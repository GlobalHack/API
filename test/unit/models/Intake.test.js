'use strict'
let expect = require('chai').expect

describe('IntakeModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Intake.create({
          'consumer': {
            'firstName': 'Test',
            'lastName': 'Tester',
            'ssn': '123-45-6789',
            'domesticViolence': true,
            'youth': true,
            'dateOfBirth': '01-01-2001'
          },
          'employee': {
            'organization': {
              'name': 'Test House',
              'address': '123 Test Street, Saint Louis, MO 63124'
            },
            'firstName': 'Tom',
            'lastName': 'Tester',
            'nickname': 'The Testerino',
            'email': 'Tom.Tester@aol.com',
            'role': 1,
            'disabled': false,
            'email_verified': false
          },
          'score': 1
        })
        .then(function(results) {
          // run some tests
          expect(results.score).to.equal(1)
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Intake.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.score).to.equal(1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Intake.update({
          'id': testID
        }, {
          'score': 2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].score).to.equal(2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Intake.destroy({
          'id': testID
        })
        .then(function() {
          Intake.findOne({
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
