import test from 'tape';
import Graphics from '../src/systems/graphics';

test('clearScreen()', (t) => {
  const gameSize = { x: 10, y: 10 };
  const graphics = Graphics(gameSize);
  let result = false;
  const screen = {
    clearRect() {
      result = true;
      return true;
    },
  };
  const entity = {
    center: { x: 0, y: 0 },
    size: { x: 10, y: 10 },
    isDrawable: true,
  };

  {
    const msg = 'should call screen.clearRect()';
    const expected = true;
    graphics.clearScreen(screen);
    const actual = result;
    t.deepEqual(actual, expected, msg);
  }

  t.end();
});

test('draw()', (t) => {
  const gameSize = { x: 10, y: 10 };
  const graphics = Graphics(gameSize);
  let result = false;
  const screen = {
    fillRect() {
      result = true;
      return result;
    },
  };
  const entity = {
    center: { x: 0, y: 0 },
    size: { x: 10, y: 10 },
    isDrawable: true,
  };

  {
    const msg = 'should return the entity passed in';
    const expected = entity;
    const actual = graphics.draw(screen)(entity);
    t.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should not call screen.fillRect() if isDrawable !== true';
    const expected = false;
    result = false;
    const ent = Object.assign({}, entity, { isDrawable: false });
    graphics.draw(screen)(ent);
    const actual = result;
    t.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should call screen.fillRect() if isDrawable === true';
    const expected = true;
    graphics.draw(screen)(entity);
    const actual = result;
    t.deepEqual(actual, expected, msg);
  }

  t.end();
});
