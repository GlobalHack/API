module.exports = {
  meta: {
    schemaName: 'organization_information'
  },
  attributes: {
    organization: {
      model: 'organization'
    },
    consumer: {
      model: 'consumer'
    },
    legacy_uuid: {
      type: 'string'
    }
  }
};
