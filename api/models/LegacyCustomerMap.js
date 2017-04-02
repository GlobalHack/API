module.exports = {
  meta: {
    schemaName: 'organization_information'
  },
  attributes: {
    organization: {
      model: 'organization'
    },
    customer: {
      model: 'consumer'
    },
    legacy_uuid: {
      type: 'string'
    }
  }
};
