/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var _ = require('lodash');
var question = require('../api/fixtures/Question');
var organization = require('../api/fixtures/Organization');
var prefix = require('../api/fixtures/Prefix');
var menuitem = require('../api/fixtures/MenuItem');
var role = require('../api/fixtures/Role');

function installFixture(model, name, fixtures) {
  model.findOrCreateEach(fixtures, fixtures).exec(function (err, results) {
    if (err) {
      sails.log.debug(err);
    } else {
      sails.log.debug(name + ' installed');
    }
  });
}

function createModels() {
  var models = _.compact(_.map(sails.models, function (model, name) {
    return model && model.globalId && model.identity && {
        name: model.globalId,
        identity: model.identity,
        attributes: _.omit(model.attributes, _.functions(model.attributes))
      };
  }));

  _.map(models, function (model) {
    return sails.models.model.findOrCreate({ name: model.name }, model);
  });
}

function installFixtures() {
  installFixture(Question, 'Questions', question.fixtures);
  installFixture(Organization, 'Organizations', organization.fixtures);
  installFixture(Prefix, 'Prefixes', prefix.fixtures);
  installFixture(MenuItem, 'MenuItems', menuitem.fixtures);
  installFixture(Role, 'Roles', role.fixtures);
  createModels();
}

module.exports.bootstrap = function (cb) {
  // installFixtures();
  cb();
};
