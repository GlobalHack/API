'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('OrganizationModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Organization.create({
          'name': uid1,
          'address': uid1
        })
        .then(function(results) {
          // run some tests
          expect(results.name).to.equal(uid1)
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Organization.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.name).to.equal(uid1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Organization.update({
          'id': testID
        }, {
          'address': uid2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].address).to.equal(uid2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Organization.destroy({
          'id': testID
        })
        .then(function() {
          Organization.findOne({
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
