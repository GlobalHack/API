/**
 * @module Model
 *
 * @description
 *   Abstract representation of a Waterline Model.
 */
module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  description: 'Represents a Waterline collection that a User can create, query, etc.',

  autoPK: true,

  attributes: {
    role: {
      type: 'string'
    },
    model: {
      type: 'string'
    },
    action: {
      type: 'string'
    },
    criteria: {
      type: 'json'
    },
    blacklist: {
      type: 'array'
    }
  }
};
