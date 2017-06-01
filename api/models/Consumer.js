var uuid = require('uuid');

module.exports = {
  meta: {
    schemaName: 'consumer_information'
  },
  attributes: {
    uuid: {
      type: 'string',
      defaultsTo: function() {
        return uuid.v4();
      },
      unique: true
    },
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    ssn: {
      type: 'string'
    },
    domesticViolence: {
      type: 'string'
    },
    youth: {
      type: 'string'
    },
    dateOfBirth: {
      type: 'string'
    },
    primary_organization: {
      model: 'organization'
    }
  }
};
