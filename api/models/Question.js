module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    key:{
      type: 'text',
      required: true
    },
    title: {
      type: 'text',
      required: true
    },
    help: {
      type: 'text'
    },
    heading: {
      type: 'text'
    },
    type: {
      type: 'string',
      enum: ['string', 'number', 'boolean', 'date']
    },
    required: {
      type: 'boolean',
      default: false
    },
    prefix: {
      model: 'prefix'
    },
    widget: {
      type: 'string',
      enum: ['RefusableBoolean', 'RefusableSelect', 'RefusableNumber']
    },
    questionsets: {
      collection: 'questionset',
      via: 'questions',
      through: 'questionsetquestion'
    },
  }
};
