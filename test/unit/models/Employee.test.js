'use strict'
let expect = require('chai').expect

describe('EmployeeModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Employee.create({
          'organization': 1,
          'firstName': 'Tom',
          'lastName': 'Tester',
          'nickname': 'The Testerino',
          'email': 'Tom.Tester@aol.com',
          'role': 1,
          'disabled': false,
          'email_verified': false
        })
        .then(function(results) {
          // run some tests
          expect(results.firstName).to.equal('Tom')
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Employee.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.firstName).to.equal('Tom')
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Employee.update({
          'id': testID
        }, {
          'nickname': 'The Dude'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].nickname).to.equal('The Dude')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Employee.destroy({
          'id': testID
        })
        .then(function() {
          Employee.findOne({
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
