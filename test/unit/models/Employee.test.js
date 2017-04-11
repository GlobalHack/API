'use strict'
let expect = require('chai').expect
const faker = require('faker')

describe('EmployeeModel', function() {
  let testObject = null

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Employee.create({
          'nickname': faker.fake("{{random.word}}"),
          'password': faker.fake("{{random.word}}"),
          'email_Verified': true,
          'organization': {
            'name': faker.fake("{{company.companyName}}"),
            'address': faker.fake("{{address.streetAddress}}, {{address.city}}, {{address.stateAbbr}} {{address.zipCode}}")
          },
          'firstName': faker.fake("{{name.firstName}}"),
          'lastName': faker.fake("{{name.lastName}}"),
          'email': faker.fake("{{internet.email}}"),
          'ssn': '123-45-6789'
        })
        .then(function(results) {
          // run some tests
          expect(results.ssn).to.equal('123-45-6789')
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Employee.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.ssn).to.equal('123-45-6789')
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Employee.update({
          'id': testObject.id
        }, {
          'ssn': '987-65-4321'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].ssn).to.equal('987-65-4321')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Employee.destroy({
          'id': testObject.id
        })
        .then(function() {
          Employee.findOne({
              'id': testObject.id
            })
            .then(function(results) {
              expect(results).to.be.undefined
              done()
            })
        })
        .catch(done)
    })
  })

  describe('cleaning up', () => {
    it('should clean up test dependencies', (done) => {
      Promise.all([
          Organization.destroy({
            'id': testObject.organization
          })
        ]).then((results) => {
          done()
        })
        .catch(done)
    })
  })
})
