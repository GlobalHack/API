'use strict'
let expect = require('chai').expect

describe('GroupMembershipModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      GroupMembership.create({
          'organization': 1,
          'CoordinatedEntryGroup': 1
        })
        .then(function(results) {
          // run some tests
          expect(results.organization).to.equal(1)
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      GroupMembership.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.organization).to.equal(1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      GroupMembership.update({
          'id': testID
        }, {
          'organization': 2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].organization).to.equal(2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      GroupMembership.destroy({
          'id': testID
        })
        .then(function() {
          GroupMembership.findOne({
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
