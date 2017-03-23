module.exports = {
  meta: {
    schemaName: 'customer_information'
  },
  attributes: {
    customer: {
      model: 'customer',
      unique: true
    },
    employee: {
      model: 'employee',
      unique: true
    },
    score: {
      "type": "integer",
      defaultsTo: 0,
    }
  }
};
