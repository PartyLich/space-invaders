/**
 * @param {object} center
 * @param  {number} center.x
 * @param  {number} center.y
 * @param {object} size
 * @param  {number} size.x
 * @param  {number} size.y
 * @return {object}
 */
const createDrawable = (
    { x = 0, y = 0 } = {},
    { x: sizeX = 0, y: sizeY = 0 } = {}
) => ({
  center: { x, y },
  size: { x: sizeX, y: sizeY },
  isDrawable: true,
});

export default createDrawable;
