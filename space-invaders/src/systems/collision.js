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
   * Returns true if two passed bodies are colliding.
   * The approach is to test for five situations.  If any are true, the bodies
   * are definitely not colliding.  If none of them are true, the bodies are
   * colliding.
   * @param  {object} b1
   * @param  {object} b2
   * @return {boolean}  true if two passed bodies are colliding
   */
  const colliding = function (b1, b2) {
    return !(
      // 1. b1 is the same body as b2.
      b1 === b2 ||
      // 2. Right of `b1` is to the left of the left of `b2`.
      b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||
      // 3. Bottom of `b1` is above the top of `b2`.
      b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||
      // 4. Left of `b1` is to the right of the right of `b2`.
      b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||
      // 5. Top of `b1` is below the bottom of `b2`.
      b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2
    );
  };

  /**
   * returns true if passed entity is not colliding with anything.
   * @param  {object} b1
   * @param {array} arr
   * @return {boolean}  true if passed entity is not colliding with anything
   */
  const notCollidingWithAnything = (b1) => {
    const results = [];
    for (const [_, entity] of entityManager.all()) {
      if (colliding(b1, entity)) {
        results.push(b1, entity);
      }
    }
    return results;
  };

  /**
   * Remove any entity that has collided
   * @param  {object} entity
   * @return {object}
   */
  const removeCollided = (entity) => {
    const colliders = notCollidingWithAnything(entity);
    if (entity.isDead || colliders.length === 0) {
      return entity;
    }

    colliders.forEach((entity) => entityManager.remove(entity.id));
    // Return an object for any later functions in the pipeline
    return { isDead: true, id: entity.id };
  };

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

  /**
   * Remove any entity outside the game screen
   * @param  {object} entity
   * @return {object}
   */
  const removeOutOfBounds = (entity) => {
    // Passthrough any dead or in bounds entities
    if (entity.isDead || inBounds(entity)) return entity;

    entityManager.remove(entity.id);
    // Return an object for any later functions in the pipeline
    return { isDead: true, id: entity.id };
  };

  return {
    colliding,
    notCollidingWithAnything,
    inBounds,
    removeOutOfBounds,
    removeCollided,
  };
};

export default Collision;
