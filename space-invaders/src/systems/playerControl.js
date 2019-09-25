import { pipe } from '../lib/lib';
import createBullet from '../entities/bullet';

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

  /**
   * Play shooting audio
   */
  function playShootSound() {
    // ... rewind the shoot sound...
    shootSound.load();

    // ... and play the shoot sound.
    shootSound.play();
  }

  /**
   * Respond to player shoot input
   * @param  {object} entity
   * @return {object}
   */
  function fire(entity) {
    if (entity.playerControlled) {
      // If S key is down...
      if (keyboarder.isDown(keyboarder.KEYS.S)) {
        // ... create a bullet just above the player that will move upwards...
        const bulletCenter = {
          x: entity.center.x,
          y: entity.center.y - entity.size.y - 10,
        };
        const bulletVelocity = { x: 0, y: -7 };
        const bullet = createBullet(bulletCenter, bulletVelocity);

        // ... add the bullet to the game...
        entityManager.add(bullet);

        playShootSound();
      }
    }
    return entity;
  }

  /**
   * updates the state of the player for a single tick.
   */
  const simulate = pipe(
      move,
      fire
  );

  return {
    simulate,
  };
};

export default PlayerControl;
