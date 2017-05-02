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

var question = require('../api/fixtures/Question');
var organization = require('../api/fixtures/Organization');
var prefix = require('../api/fixtures/Prefix');
var menuitem = require('../api/fixtures/MenuItem');

function installFixture(model, name, fixtures) {
  model.findOrCreateEach(fixtures, fixtures).exec(function (err, results) {
    if (err) {
      sails.log.debug(err);
    } else {
      sails.log.debug(name + ' installed');
    }
  });
}

function installFixtures() {
  installFixture(Question, 'Questions', question.fixtures);
  installFixture(Organization, 'Organizations', organization.fixtures);
  installFixture(Prefix, 'Prefixes', prefix.fixtures);
  installFixture(MenuItem, 'MenuItems', menuitem.fixtures);
}

module.exports.bootstrap = function (cb) {
  // installFixtures();
  sails.on('lifted', PermissionMetaService.refreshPermissions)
  cb();
};
