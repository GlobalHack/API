'use strict'
let expect = require('chai').expect
// const uid = require('uid')
// const uid1 = uid()
// const uid2 = uid()
const faker = require('faker')

describe('ConsumerModel', function() {
  let testObject = null
  let testFirstName = faker.fake("{{name.firstName}}")
  let testLastName = faker.fake("{{name.lastName}}")

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Consumer.create({
          'firstName': testFirstName,
          'lastName': testLastName,
          'ssn': '123-45-6789',
          'domesticViolence': true,
          'youth': true,
          'dateOfBirth': '01-01-2001'
        })
        .then(function(results) {
          // run some tests
          expect(results.firstName).to.equal(testFirstName)
          expect(results.lastName).to.equal(testLastName)
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Consumer.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.firstName).to.equal(testFirstName)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Consumer.update({
          'id': testObject.id
        }, {
          'ssn': 'new value'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].ssn).to.equal('new value')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Consumer.destroy({
          'id': testObject.id
        })
        .then(function() {
          Consumer.findOne({
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
})
