module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    text: {
      type: 'text',
      required: true
    },
    fromUser: {
      model: 'user',
      required: true
    },
    toUser: {
      model: 'user',
      required: true
    }
  }
};
