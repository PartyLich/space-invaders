const PlayerControl = (entityManager, keyboarder, shootSound) => {
  /**
   * Respond to player movement input
   * @param  {object} entity
   * @return {object}
   */
  function move(entity) {
    if (entity.playerControlled) {
      // If left cursor key is down...
      if (keyboarder.isDown(keyboarder.KEYS.LEFT)) {
        // ... move left.
        entity.velocity.x = -2;
      } else if (keyboarder.isDown(keyboarder.KEYS.RIGHT)) {
        entity.velocity.x = 2;
      } else {
        entity.velocity.x = 0;
      }
    }

    return entity;
  }

  return {
  };
};

export default PlayerControl;
