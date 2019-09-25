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
   * Simulate
   * @param  {object} entity
   * @param  {number} i
   * @param  {object[]} entityList
   * @return {object}
   */
  function simulate(entity, i, entityList) {
    updatePatrol(entity);

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
