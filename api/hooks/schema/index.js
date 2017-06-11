/**
 * Adds support for schema blueprint and binds :model/schema route for each RESTful model.
 */

var _         = require('lodash');
var pluralize = require('pluralize');

module.exports = function (sails) {
  return {
    initialize: function (cb) {
      var config = sails.config.blueprints;

      sails.on('router:before', function () {
        _.forEach(sails.models, function (model) {
          var controller = sails.middleware.controllers[model.identity];

          if (!controller) return;
          // Validate blueprint config for this controller
          if (config.prefix) {
            if (!_(config.prefix).isString()) {
              return;
            }
            if (!config.prefix.match(/^\//)) {
              config.prefix = '/' + config.prefix;
            }
          }

          // Validate REST route blueprint config for this controller
          if (config.restPrefix) {
            if (!_(config.restPrefix).isString()) {
              return;
            }
            if (!config.restPrefix.match(/^\//)) {
              config.restPrefix = '/' + config.restPrefix;
            }
          }

          var prefix    = config.prefix + config.restPrefix;
          var baseRoute = [prefix, model.identity].join('/');
          if (config.pluralize && _.get(controller, '_config.pluralize', true)) {
            baseRoute = pluralize(baseRoute);
          }
          var route = baseRoute + '/schema';

          sails.router.bind(route, _.get(sails.middleware, 'blueprints.schema'), null, {controller: model.identity});
        });
      });

      cb();
    }
  };
};
