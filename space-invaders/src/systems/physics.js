/**
 * Physics system factory
 * @return {object}
 */
const Physics = function () {
  /**
   * updates the position of the entity for a single tick.
   * @param  {object} entity
   * @param  {object} entity.center
   * @param  {number} entity.center.x
   * @param  {number} entity.center.y
   * @param  {object} entity.velocity
   * @param  {number} entity.velocity.x
   * @param  {number} entity.velocity.y
   */
  const move = (entity) => {
    if (entity.isMoveable) {
      // Add velocity to center to move entity
      entity.center.x += entity.velocity.x;
      entity.center.y += entity.velocity.y;
    }
    return entity;
  };

  return {
    move,
  };
};

export default Physics;
