module.exports = {
  meta: {
    schemaName: 'customer_information'
  },
  attributes: {
    intake: {
      model: 'intake'
    },
    question: {
      model: 'question'
    },
    answer: {
      type: 'text'
    }
  }
};
