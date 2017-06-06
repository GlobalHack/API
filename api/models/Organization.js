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
    zip: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    restrictions: {
      type: 'string'
    },
    notes: {
      type: 'string'
    },
    employees: {
      collection: 'employee',
      via: 'organization'
    }
  }
};
