/**
 * Graphics system factory
 * @param  {object} gameSize size of the game viewport
 * @param  {number} gameSize.x  x dimension of the game viewport
 * @param  {number} gameSize.y  y dimension of the game viewport
 * @return {object}          graphics system object
 */
const Graphics = function (gameSize) {
  // Clear away the drawing from the previous tick.
  const clearScreen = (screen) =>
    screen.clearRect(0, 0, gameSize.x, gameSize.y);

  /**
   * draws passed body as a rectangle to `screen`, the drawing context.
   * @param  {CanvasRenderingContext2D} screen the drawing context
   * @param  {object} entity   drawable object
   */
  const draw = (screen) => (entity) => {
    if (entity.isDrawable) {
      screen.fillRect(
          entity.center.x - entity.size.x / 2,
          entity.center.y - entity.size.y / 2,
          entity.size.x,
          entity.size.y
      );
    }

    return entity;
  };

  return {
    clearScreen,
    draw,
  };
};

export default Graphics;
