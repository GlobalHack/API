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
      type: 'string',
      size: 64,
      columnName: 'first_name'
    },
    lastName: {
      type: 'string',
      size: 64,
      columnName: 'last_name'
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
