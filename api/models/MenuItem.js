module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    text: {
      type: 'text',
      required: true
    },
    icon: {
      model: 'user',
      required: true
    },
    link: {
      model: 'user',
      required: true
    }
  }
};
