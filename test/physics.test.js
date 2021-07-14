import test from 'tape';
import Physics from '../src/systems/physics';

test('move()', (assert) => {
  const physics = Physics();

  {
    const entity = {
      center: { x: 0, y: 0 },
      velocity: { x: 10, y: 10 },
      isMoveable: true,
    };
    const msg = 'should update center according to velocity';
    physics.move(entity);
    const actual = entity.center;
    const expected = { x: 10, y: 10 };
    assert.deepEqual(actual, expected, msg);
  }

  assert.end();
});

test('moveEntities()', (t) => {
  const physics = Physics();

  {
    let entityList = [
      {
        center: { x: 0, y: 0 },
        velocity: { x: 10, y: 10 },
        isMoveable: true,
      },
      {
        center: { x: 0, y: 0 },
        velocity: { x: 20, y: 20 },
        isMoveable: true,
      },
      {
        center: { x: 0, y: 0 },
        velocity: { x: 20, y: 20 },
      },
    ];
    let msg = 'should update center of all moveable entities in list';
    entityList = physics.moveEntities(entityList);

    let actual = entityList[0].center;
    let expected = { x: 10, y: 10 };
    t.deepEqual(actual, expected, msg);

    actual = entityList[1].center;
    expected = { x: 20, y: 20 };
    t.deepEqual(actual, expected, msg);

    msg = 'entities without isMovable == true should be unchanged';
    actual = entityList[2].center;
    expected = { x: 0, y: 0 };
    t.deepEqual(actual, expected, msg);
  }

  t.end();
});
