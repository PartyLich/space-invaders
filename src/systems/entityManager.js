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

  /**
   * Add a new entity
   * @param {object|object[]} entityList
   */
  function add(entityList) {
    entityList = [].concat(entityList);
    for (const entity of entityList) {
      entity.id = nextId;
      nextId++;
      entities.set(entity.id, entity);
    }
  }

  /**
   * Remove an entity
   * @param  {number} entity entity id
   * @return {boolean}
   */
  function remove(entity) {
    return entities.delete(entity);
  }

  /**
   * return complete entity map
   * @return {Map} Map of entities
   */
  const all = () => entities;

  /**
   * Return entities as an Array
   * @return {object[]} array of entities
   */
  const entityArray = () => Array.from(entities.values());

  return {
    get,
    add,
    remove,
    all,
    entityArray,
  };
};

export default createEntityManager;
