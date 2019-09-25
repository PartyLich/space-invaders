import createCoord from './coord';

const createDrawable = (
    center = createCoord(),
    size = createCoord()
) => ({
  center,
  size,
  isDrawable: true,
});

export default createDrawable;
