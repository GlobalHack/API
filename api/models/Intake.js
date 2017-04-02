module.exports = {
  meta: {
    schemaName: 'customer_information'
  },
  attributes: {
    customer: {
      model: 'consumer'
    },
    employee: {
      model: 'employee'
    },
    score: {
      "type": "integer",
      defaultsTo: 0
    }
  }
};
