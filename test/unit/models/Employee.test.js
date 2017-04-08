'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('EmployeeModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Employee.create({
          'organization': 1,
          'firstName': uid1,
          'lastName': uid1,
          'nickname': uid1,
          'email': uid1,
          'role': 1,
          'disabled': false,
          'email_verified': false
        })
        .then(function(results) {
          // run some tests
          expect(results.firstName).to.equal(uid1)
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
          expect(results.firstName).to.equal(uid1)
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
          'nickname': uid2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].nickname).to.equal(uid2)
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
