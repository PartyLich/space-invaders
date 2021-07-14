import Engine from './systems/engine';

import _styles from './main.css';


(function () {
  // When the DOM is ready, create (and start) the game.
  window.addEventListener('load', function () {
    // Run the first game tick.  All future calls will be scheduled by
    // the tick() function itself.
    const Game = Engine();
    Game.start();
  });
}());
