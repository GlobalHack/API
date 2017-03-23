module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    organization: {
      model: 'organization'
    },
    prefix: {
      type: 'text'
    }
  }
};
