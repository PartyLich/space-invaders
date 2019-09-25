// Keyboard input tracking
// -----------------------

// creates a new keyboard input tracking object.
const Keyboarder = function () {
  // Records latest up/down state of each key that has ever been pressed.
  const keyState = {};

  // Handy constants that give keyCodes human-readable names.
  const KEYS = {
    LEFT: 37,
    RIGHT: 39,
    S: 83,
  };

  /**
   * Record key state.
   * @param {boolean} state true if keydown, false otherwise
   * @param {KeyboardEvent} e
   */
  const setKeyState = (state) => (e) => {
    keyState[e.keyCode] = state;
    console.log(`Setting keystate`);
  };
  const recordKeyDown = setKeyState(true);
  const recordKeyUp = setKeyState(false);

  // When key goes down, record that it is down.
  window.addEventListener('keydown', recordKeyDown);
  // When key goes up, record that it is up.
  window.addEventListener('keyup', recordKeyUp);

  /**
   * Returns true if passed key is currently down
   * @param  {number} keyCode a unique number that represents a particular key
   *     on the keyboard
   * @return {boolean}    Returns true if passed key is currently down
   */
  const isDown = (keyCode) => (keyState[keyCode] === true);

  return Object.assign({}, {
    KEYS,
    isDown,
  });
};

export default Keyboarder;
