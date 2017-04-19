module.exports = {
  meta: {
    schemaName: 'consumer_information'
  },
  attributes: {
    consumer: {
      model: 'consumer'
    },
    employee: {
      model: 'employee'
    },
    score: {
      type: 'integer',
      defaultsTo: 0
    },
    complete: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
