/**
 * Collision system factory
 * @param  {object} entityManager entity manager
 * @param  {object} gameSize
 * @param  {number} gameSize.x  x dimension of game area
 * @param  {number} gameSize.y  y dimension of game area
 * @return {object}
 */
const Collision = function (entityManager, gameSize) {
  /**
   * True if an entity is inside the gameSize
   * @param  {object} entity
   * @return {boolean}
   */
  const inBounds = (entity) => !(
    entity.center.x < 0 ||
    entity.center.x > gameSize.x ||
    entity.center.y < 0 ||
    entity.center.y > gameSize.y
  );

  return {
    inBounds,
  };
};

export default Collision;
