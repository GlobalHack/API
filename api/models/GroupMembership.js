module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    organization: {
      model: 'organization'
    },
    coordinated_entry_group: {
      model: 'coordinatedentrygroup'
    }
  }
};
