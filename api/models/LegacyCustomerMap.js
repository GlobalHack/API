module.exports = {
  meta: {
    schemaName: 'organization_information'
  },
  attributes: {
    organization: {
      model: 'organization'
    },
    customer: {
      model: 'customer'
    },
    legacy_uuid: {
      type: 'string'
    }
  }
};
