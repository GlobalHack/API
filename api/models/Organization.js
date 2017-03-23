module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    name: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    employees: {
      collection: 'employee',
      via: 'organization'
    }
  }
};
