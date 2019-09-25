// Main game object
// ----------------
import createEntityManager from './entityManager';

/**
 * Get the drawing context.  This contains functions that let you draw
 * to the canvas.
 * @return {CanvasRenderingContext2D} canvas 2d rendering context
 */
const getScreen = () =>
  document.getElementById('space-invaders').getContext('2d');

/**
 * Creates the game object with the game state and logic.
 * @return {object}
 */
const Engine = function () {
  // In index.html, there is a canvas tag that the game will be drawn in.
  // Grab that canvas out of the DOM.
  const canvas = document.getElementById('space-invaders');

  // Note down the dimensions of the canvas.  These are used to
  // place game entities.
  const gameSize = { x: canvas.width, y: canvas.height };

  const screen = getScreen();

  // In index.html, there is an audio tag that loads the shooting sound.
  // Get the shoot sound from the DOM and store it on the game object.
  const shootSound = document.getElementById('shoot-sound');

  // Systems contain all of our implementation and logic
  // Create the entity manager to hold the player, invaders, bullets etc
  const entityManager = createEntityManager();

  // Main game tick function.  Loops forever, running 60ish times a second.
  const tick = function () {
    // Clear away the drawing from the previous tick.

    // Update game state.

    // Queue up the next call to tick with the browser.
    requestAnimationFrame(tick);
  };

  return Object.assign({}, {
    start: tick,
  });
};

export default Engine;
