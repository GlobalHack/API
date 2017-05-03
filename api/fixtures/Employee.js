var uuid      = require('uuid');
var faker     = require('faker');
var RandomSSN = require('ssn').RandomSSN;

var fixtures = [];
fixtures.push({
  id:1,
  email: "test@cemaritan.com",
  firstName: "test",
  lastName: "user",
  user: 1,
  role: 'admin'
});
fixtures.push({
  id:2,
  email: "drew+jt@globalhack.org",
  firstName: "John",
  lastName: "True",
  user: 2,
  role: 'user'
});
fixtures.push({
  id:3,
  email: "drew+cc@globalhack.org",
  firstName: "Charlotte",
  lastName: "Crocker",
  user: 3,
  role: 'user'
});
fixtures.push({
  id:4,
  email: "drew+dc@globalhack.org",
  firstName: "Duke",
  lastName: "Cross",
  user: 4,
  role: 'admin'
});

module.exports = {
  fixtures: fixtures
};
