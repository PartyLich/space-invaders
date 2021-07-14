import test from 'tape';
import Collision from '../src/systems/collision';

test('colliding()', (t) => {
  const collision = Collision();

  {
    const b1 = {
      center: { x: 10, y: 10 },
      size: { x: 10, y: 10 },
    };
    const b2 = {
      center: { x: 10, y: 10 },
      size: { x: 10, y: 10 },
    };
    const msg = 'true if two passed bodies are colliding';
    const actual = collision.colliding(b1, b2);
    const expected = true;
    t.deepEqual(actual, expected, msg);
  }

  {
    const b1 = {
      center: { x: 10, y: 10 },
      size: { x: 10, y: 10 },
    };
    const b2 = {
      center: { x: 10, y: 10 },
      size: { x: 10, y: 10 },
    };
    const msg = 'false if two passed bodies are the same object';
    const actual = collision.colliding(b1, b2);
    const expected = true;
    t.deepEqual(actual, expected, msg);
  }

  {
    const b1 = {
      center: { x: 30, y: 10 },
      size: { x: 10, y: 10 },
    };
    const b2 = {
      center: { x: 10, y: 10 },
      size: { x: 10, y: 10 },
    };
    const msg = 'false if two passed bodies are not colliding';
    const actual = collision.colliding(b1, b2);
    const expected = false;
    t.deepEqual(actual, expected, msg);
  }

  t.end();
});

test('notCollidingWithAnything()', (t) => {
  const collision = Collision();
  t.end();
});

test('inBounds()', (t) => {
  const collision = Collision(null, { x: 10, y: 10 });

  {
    const entities = [
      {
        center: { x: 11, y: 5 },
      },
      {
        center: { x: 5, y: 11 },
      },
      {
        center: { x: 5, y: -1 },
      },
      {
        center: { x: -1, y: 5 },
      },
    ];
    for (const b1 of entities) {
      const msg = 'false if entity is outside gameSize';
      const actual = collision.inBounds(b1);
      const expected = false;
      t.deepEqual(actual, expected, msg);
    }
  }

  {
    const b1 = {
      center: { x: 9, y: 9 },
    };
    const msg = 'true if entity is within gameSize';
    const actual = collision.inBounds(b1);
    const expected = true;
    t.deepEqual(actual, expected, msg);
  }

  t.end();
});

test('removeOutOfBounds()', (t) => {
  const collision = Collision();
  t.end();
});

test('removeCollided()', (t) => {
  const collision = Collision();
  t.end();
});
