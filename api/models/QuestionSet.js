module.exports = {
  meta: {
    schemaName: 'organization_information'
  },
  attributes: {
    organization: {
      model: 'organization'
    },
    title: {
      type: 'text',
      required: true
    },
    questions: {
      collection: 'question'
    }
  }
};
