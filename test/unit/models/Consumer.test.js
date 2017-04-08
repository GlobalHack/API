'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('ConsumerModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Consumer.create({
          'firstName': uid1,
          'lastName': uid1,
          'ssn': uid1,
          'domesticViolence': true,
          'youth': true,
          'dateOfBirth': '01-01-2001'
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
      Consumer.findOne({
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
      Consumer.update({
          'id': testID
        }, {
          'ssn': uid2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].ssn).to.equal(uid2)
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
