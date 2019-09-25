import test from 'tape';
import createDrawable from '../src/components/drawable';

test('createDrawable()', (assert) => {
  {
    const msg = 'should default to center: (0, 0)';
    const actual = createDrawable().center;
    const expected = { x: 0, y: 0 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should default to size: (0, 0)';
    const actual = createDrawable().size;
    const expected = { x: 0, y: 0 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should have isDrawable === true';
    const actual = createDrawable().isDrawable;
    const expected = true;
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should set x alone';
    const actual = createDrawable({ x: 10 }).center;
    const expected = { x: 10, y: 0 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should set y alone';
    const actual = createDrawable({ y: 10 }).center;
    const expected = { x: 0, y: 10 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should set x and y';
    const actual = createDrawable({ x: 10, y: 10 }).center;
    const expected = { x: 10, y: 10 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should set x alone';
    const actual = createDrawable({}, { x: 10 }).size;
    const expected = { x: 10, y: 0 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should set y alone';
    const actual = createDrawable({}, { y: 10 }).size;
    const expected = { x: 0, y: 10 };
    assert.deepEqual(actual, expected, msg);
  }

  {
    const msg = 'should set x and y';
    const actual = createDrawable({}, { x: 10, y: 10 }).size;
    const expected = { x: 10, y: 10 };
    assert.deepEqual(actual, expected, msg);
  }

  assert.end();
});
