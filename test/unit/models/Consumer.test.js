'use strict'
let expect = require('chai').expect

describe('ConsumerModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Consumer.create({
          'firstName': 'Test',
          'lastName': 'Tester',
          'ssn': '123-45-6789',
          'domesticViolence': true,
          'youth': true,
          'dateOfBirth': '01-01-2001'
        })
        .then(function(results) {
          // run some tests
          expect(results.firstName).to.equal('Test')
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Consumer.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.firstName).to.equal('Test')
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Consumer.update({
          'id': testID
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
      Consumer.destroy({
          'id': testID
        })
        .then(function() {
          Consumer.findOne({
              'id': testID
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
