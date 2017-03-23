module.exports = {
  meta: {
    schemaName: 'organization_information'
  },
  attributes: {
    organization: {
      model: 'organization'
    },
    inviter: {
      model: 'employee'
    },
    invitee: {
      model: 'employee'
    },
  }
};
