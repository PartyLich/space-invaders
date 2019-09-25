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

  return {
    clearScreen,
  };
};

export default Graphics;
