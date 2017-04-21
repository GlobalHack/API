var sails = require('sails');
var question = require('../api/fixtures/Question');
var organization = require('../api/fixtures/Organization');
var prefix = require('../api/fixtures/Prefix');
var menuitem = require('../api/fixtures/MenuItem');

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(120000);

  sails.lift({
    // configuration for testing purposes
  }, function(err) {
    if (err) return done(err);
    // here you can load fixtures, etc.
    //installFixtures();
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});

function installFixture(model, name, fixtures) {
  model.findOrCreateEach(fixtures, fixtures).exec(function(err, results) {
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
