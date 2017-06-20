var uuid      = require('uuid');
var faker     = require('faker');
var RandomSSN = require('ssn').RandomSSN;

var fixtures = [];
fixtures.push({
  id: 1,
  email: "drew@globalhack.org",
  firstName: "Drew",
  lastName: "Winship",
  user: 1,
  role: 'Admin',
  organization: 9
});
fixtures.push({
  id:2,
  email: "drew+jt@globalhack.org",
  firstName: "John",
  lastName: "True",
  user: 2,
  role: 'User',
  organization: 9
});
fixtures.push({
  id:3,
  email: "drew+cc@globalhack.org",
  firstName: "Charlotte",
  lastName: "Crocker",
  user: 3,
  role: 'User'
});
fixtures.push({
  id:4,
  email: "drew+dc@globalhack.org",
  firstName: "Duke",
  lastName: "Cross",
  user: 4,
  role: 'Admin'
});

module.exports = {
  fixtures: fixtures
};
