/**
 * @param {object} velocity
 * @param  {number} velocity.x
 * @param  {number} velocity.y
 * @return {object}
 */
const createMoveable = ({ x = 0, y = 0 } = {}) => ({
  velocity: { x, y },
  isMoveable: true,
});

export default createMoveable;
