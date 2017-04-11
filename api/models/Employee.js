module.exports = {
  meta: {
    schemaName: 'organization_information'
  },
  attributes: {
    nickname: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    email_Verified: {
      type: 'boolean'
    },
    organization: {
      model: 'organization'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    ssn: {
      type: 'string',
      size: 11
    }
  }
};
