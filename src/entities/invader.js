// Invaders
// --------
import createDrawable from '../components/drawable';
import createMoveable from '../components/moveable';

/**
 * creates an invader.
 * @param  {object} center
 * @param  {number} center.x
 * @param  {number} center.y
 * @return {object}
 */
const Invader = function (center) {
  const size = { x: 15, y: 15 };

  // Invaders patrol from left to right and back again.
  // `patrolX` records the current (relative) position of the
  // invader in their patrol.  It starts at 0, increases to 40, then
  // decreases to 0, and so forth.
  const patrolX = 0;

  // The x speed of the invader.  A positive value moves the invader
  // right. A negative value moves it left.
  const speedX = 0.3;

  const aiControlled = true;

  return Object.assign({},
      createDrawable(center, size),
      createMoveable({ x: speedX, y: 0 }),
      {
        patrolX,
        aiControlled,
      }
  );
};

export default Invader;
