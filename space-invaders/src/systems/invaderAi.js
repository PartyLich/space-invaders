import Bullet from '../entities/bullet';

const invaderAi = (entityManager) => {
  /**
   * Update entity patrol path
   * @param  {object} entity
   */
  function updatePatrol(entity) {
    if (!entity.hasOwnProperty('patrolX')) return;
    const PATROL_MAX = 50;
    // If the invader is outside the bounds of their patrol...
    if (entity.patrolX < 0 || entity.patrolX > PATROL_MAX) {
      // ... reverse direction of movement.
      entity.velocity.x = -entity.velocity.x;
    }

    // Update variable that keeps track of current position in patrol.
    entity.patrolX += entity.velocity.x;
  }

  /**
   * returns true if `invader` is directly above at least one other invader.
   * @param  {object} invader
   * @param  {number} i
   * @param {array} entities
   * @return {boolean}
   */
  const invadersBelow = function (invader, i, entities) {
    // If filtered array is not empty, there are invaders below.
    return (
      entities.filter((b) =>
        // Keep `b` if it is an invader, if it is in the same column
        // as `invader`, and if it is somewhere below `invader`.
        (
          b.aiControlled &&
          Math.abs(invader.center.x - b.center.x) < b.size.x &&
          b.center.y > invader.center.y
        )
      ).length > 0
    );
  };


  /**
   * Fire a bullet
   * @param  {object} entity
   * @param {number} i
   * @param  {array} entityList
   */
  function fire(entity, i) {
    if (!entity.aiControlled) return;
    const entityArr = entityManager.entityArray()
    i = i || entityArr.indexOf(entity);
    const shotRoll = Math.random() > 0.995;
    const clearSight = shotRoll &&
        !invadersBelow(entity, i, entityArr);

    // If coin flip comes up and no friends below in this
    // invader's column...
    if (clearSight) {
      // ... create a bullet just below the invader that will move
      // downward...
      const bulletCenter = {
        x: entity.center.x,
        y: entity.center.y + entity.size.y / 2 + 4,
      };
      const bulletVelocity = { x: 0, y: 2 };
      const bullet = Bullet(bulletCenter, bulletVelocity);

      // ... and add the bullet to the game.
      entityManager.add(bullet);
    }
  }

  /**
   * Simulate
   * @param  {object} entity
   * @param  {number} i
   * @return {object}
   */
  function simulate(entity, i) {
    updatePatrol(entity);
    fire(entity, i);

    return entity;
  }

  /**
   * @param  {object[]} entityList an array of entities
   * @return {object[]} a new array of updated entities
   */
  const simulateEntities = (entityList) => entityList.map(simulate);

  return Object.assign({}, {
    simulate,
    simulateEntities,
  });
};

export default invaderAi;
