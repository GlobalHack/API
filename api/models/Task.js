module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    text: {
      type: 'text',
      required: true
    },
    user: {
      model: 'user'
    }
  }
};
