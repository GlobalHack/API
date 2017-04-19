var uuid = require('uuid');
var faker = require('faker');
var RandomSSN = require('ssn').RandomSSN;

var createConsumer = function () {
  return {
    uuid: uuid.v4(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    ssn: new RandomSSN().value().toFormattedString(),
    domesticViolence: faker.random.number(1),
    youth: faker.random.number(1),
    dateOfBirth: faker.date.past()
  }
};

var fixtures = [];
for (var i = 0; i < 20; i++) {
  fixtures.push(createConsumer());
}

module.exports = {
  fixtures: fixtures
};
