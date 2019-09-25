// Bullet
// ------
import createDrawable from '../components/drawable';
import createMoveable from '../components/moveable';

/**
 * creates a new bullet.
 * @param  {object} center
 * @param  {object} velocity
 * @return {object}
 */
const Bullet = function (center, velocity) {
  const size = {x: 3, y: 3};

  return Object.assign(
      {},
      createDrawable(center, size),
      createMoveable(velocity)
  );
};

export default Bullet;
