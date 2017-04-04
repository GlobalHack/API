var _ = require('lodash');

function getSchemaVals(entry) {
  return {
    'title'  : entry.title,
    'type'   : entry.type,
    'default': entry.default
  };
}

function getFormVals(entry) {
  return {
    'placeholder': entry.help,
    'type'       : entry.widget
  };
}

module.exports = {

  getSchema: function (fields) {
    return _.map(fields, getSchemaVals);
  },

  getForm: function (fields) {
    return _.map(fields, getFormVals);
  },

  getSchemaForm: function (fields) {
    return {
      'schema': module.exports.getSchema(fields),
      'form'  : module.exports.getForm(fields)
    };
  }

};
