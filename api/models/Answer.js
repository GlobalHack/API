module.exports = {
  meta: {
    schemaName: 'consumer_information'
  },
  attributes: {
    intake: {
      model: 'intake',
      required: true
    },
    question: {
      model: 'question',
      required: true
    },
    answer: {
      type: 'text',
      required: true
    }
  }
};
