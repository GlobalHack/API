var _ = require('lodash');
var question = require('./Question');
var organization = require('./Organization');
var prefix = require('./Prefix');
var menuitem = require('./MenuItem');
var role = require('./Role');
var consumer = require('./Consumer');
var questionSet = require('./QuestionSet');
var questionSetQuestion = require('./QuestionSetQuestion');
var user = require('./User');
var employee = require('./Employee');

module.exports = {

  installFixture: function (model, name, fixtures) {
    model.findOrCreateEach(fixtures, fixtures).exec(function (err, results) {
      if (err) {
        sails.log.debug(err);
      } else {
        sails.log.debug(name + ' installed');
      }
    });
  },

  createModels: function () {
    var models = _.compact(_.map(sails.models, function (model, name) {
      return model && model.globalId && model.identity && {
        name      : model.globalId,
        identity  : model.identity,
        attributes: _.omit(model.attributes, _.functions(model.attributes))
        };
    }));

    _.map(models, function (model) {
      return sails.models.model.findOrCreate({name: model.name}, model);
    });
  },

  installFixtures: function () {
    this.installFixture(Question, 'Questions', question.fixtures);
    this.installFixture(Organization, 'Organizations', organization.fixtures);
    this.installFixture(Prefix, 'Prefixes', prefix.fixtures);
    this.installFixture(MenuItem, 'MenuItems', menuitem.fixtures);
    this.installFixture(Role, 'Roles', role.fixtures);
    this.installFixture(Consumer, 'Consumers', consumer.fixtures);
    this.installFixture(QuestionSet, 'Question Sets', questionSet.fixtures);
    this.installFixture(QuestionSetQuestion, 'Question Set Questions', questionSetQuestion.fixtures);
    this.installFixture(User, 'Users', user.fixtures);
    this.installFixture(Employee, 'Employees', employee.fixtures);
    this.createModels();
  }
};
