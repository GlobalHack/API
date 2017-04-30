var _ = require('lodash');
var keyBy = require('lodash.keyby');

function getSchemaVals(entry) {
  return {
    'key'    : entry.key,
    'title'  : entry.title,
    'type'   : 'string',
    'default': entry.default
  };
}

function getFormVals(entry) {
  return {
    'key'        : entry.key,
    'type'       : entry.widget,
    'help'       : entry.help,
    'heading'    : entry.heading,
    'placeholder': entry.help || ''
  };
}

module.exports = {

  getSchema: function (fields) {
    return keyBy(_.map(fields, getSchemaVals), 'key');
  },

  getForm: function (fields) {
    return _.map(fields, getFormVals);
  },

  getSchemaForm: function (fields) {
    return {
      'schema': {
        type      : 'object',
        properties: module.exports.getSchema(fields)
      },
      'form'  : module.exports.getForm(fields)
    };
  }

};
