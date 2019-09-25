import createCoord from './coord';

const createMoveable = (velocity = createCoord()) => ({
  velocity,
  isMoveable: true,
});

export default createMoveable;
