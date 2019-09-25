/**
 * Entity manager factory
 * @return {object} a new EntityManager instance
 */
const createEntityManager = () => {
  const entities = new Map();
  let nextId = 0;

  /**
   * Get an entity's data by id
   * @param  {number} entity entity id
   * @return {object}        entity data
   */
  function get(entity) {
    return entities.get(entity);
  }

  return {
    get,
  };
};

export default createEntityManager;
