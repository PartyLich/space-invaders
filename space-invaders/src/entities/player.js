import createDrawable from '../components/drawable';
import createMoveable from '../components/moveable';

/**
 * creates a player.
 * @param  {object} gameSize
 * @param  {number} gameSize.x
 * @param  {number} gameSize.y
 * @return {object}  a new player object
 */
const Player = function (gameSize) {
  const size = { x: 15, y: 15 };
  const center = {
    x: gameSize.x / 2,
    y: gameSize.y - size.y * 2,
  };

  const playerControlled = true;

  return Object.assign({},
      createDrawable(center, size),
      createMoveable(),
      {
        playerControlled,
      }
  );
};

export default Player;
