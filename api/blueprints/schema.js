var actionUtil = require('../services/actionService');

module.exports = function (req, res) {
  var Model  = actionUtil.parseModel(req);
  var schema = Model._schema.schema;
  return res.ok(schema);
};
