import test from 'tape';
import createMoveable from '../src/components/moveable';

test('createMoveable()', (assert) => {
  {
    const msg = 'should default to velocity: (0, 0)';
    const actual = createMoveable().velocity;
    const expected = { x: 0, y: 0 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should have isMoveable === true';
    const actual = createMoveable().isMoveable;
    const expected = true;
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should set x alone';
    const actual = createMoveable({ x: 10 }).velocity;
    const expected = { x: 10, y: 0 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should set y alone';
    const actual = createMoveable({ y: 10 }).velocity;
    const expected = { x: 0, y: 10 };
    assert.deepEqual(actual, expected, msg);
  }
  {
    const msg = 'should set x and y';
    const actual = createMoveable({ x: 10, y: 10 }).velocity;
    const expected = { x: 10, y: 10 };
    assert.deepEqual(actual, expected, msg);
  }

  assert.end();
});
