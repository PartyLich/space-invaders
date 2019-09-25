// Main game object
// ----------------
import { pipe } from '../lib/lib';

import createEntityManager from './entityManager';
import createGraphics from './graphics';
import createPhysics from './physics';
import createInvaderAi from './invaderAi';
import createCollisionSystem from './collision';

import createInvader from '../entities/invader';
import createPlayer from '../entities/player';

/**
 * Get the drawing context.  This contains functions that let you draw
 * to the canvas.
 * @return {CanvasRenderingContext2D} canvas 2d rendering context
 */
const getScreen = () =>
  document.getElementById('space-invaders').getContext('2d');

/**
 * returns an array of invaderCount invaders.
 * @param {number} invaderCount number of invaders to create
 * @return {array} an array of invaders
 */
const createInvaders = (invaderCount) => {
  const invaders = [];

  for (let i = 0; i < invaderCount; i++) {
    // Place invaders in eight columns.
    const x = 10 + (i % 8) * 30;

    // Place invaders in three rows.
    const y = 30 + (i % 3) * 30;

    // Create invader.
    const invader = createInvader({ x, y });

    // Add invader to result array
    invaders.push(invader);
  }

  return invaders;
};

/**
 * Creates the game object with the game state and logic.
 * @return {object}
 */
const Engine = function () {
  const INVADER_COUNT = 24;
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
  const graphics = createGraphics(gameSize);
  const physics = createPhysics();
  const invaderAi = createInvaderAi(entityManager);
  const collision = createCollisionSystem(entityManager, gameSize);

  // Entities contain all of the data that systems operate upon.
  // Add the invaders to the entity manager
  entityManager.add(createInvaders(INVADER_COUNT));

  // Add the player to the entity manager
  entityManager.add(createPlayer(gameSize));

  // Simulation processing pipeline.
  const simulate = pipe(
      // Invader AI
      invaderAi.simulate,
      // Move entities
      physics.move,
      // Collision detection
      collision.removeCollided(entityManager.entityArray()),
      // Boundary checks
      collision.removeOutOfBounds,
      // Draw game entities
      graphics.draw(screen)
  );

  // Main game tick function.  Loops forever, running 60ish times a second.
  const tick = function () {
    // Clear away the drawing from the previous tick.
    graphics.clearScreen(screen);

    // Update game state.
    entityManager.all().forEach(simulate);

    // Queue up the next call to tick with the browser.
    requestAnimationFrame(tick);
  };

  return Object.assign({}, {
    start: tick,
  });
};

export default Engine;
