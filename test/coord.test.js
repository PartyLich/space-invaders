import test from 'tape';
import createCoord from '../src/components/coord';

test('createCoord()', (assert) => {
  {
    const msg = 'should default to (0, 0)';
    const actual = createCoord();
    const expected = { x: 0, y: 0 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should set x alone';
    const actual = createCoord({ x: 10 });
    const expected = { x: 10, y: 0 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should set y alone';
    const actual = createCoord({ y: 10 });
    const expected = { x: 0, y: 10 };
    assert.deepEqual(actual, expected, msg);
  }
  {
    const msg = 'should set x and y';
    const actual = createCoord({ x: 10, y: 10 });
    const expected = { x: 10, y: 10 };
    assert.deepEqual(actual, expected, msg);
  }

  assert.end();
});
