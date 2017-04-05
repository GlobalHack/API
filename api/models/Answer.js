module.exports = {
  meta: {
    schemaName: 'consumer_information'
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
