module.exports = {
  autoCreatedBy: false,

  description: 'Determines which roles organization admins have access to',

  meta: {
    schemaName: 'organization_information'
  },

  attributes: {
    role: {
      model: 'Role'
    },
    organization: {
      model: 'organization'
    }
  }
};
