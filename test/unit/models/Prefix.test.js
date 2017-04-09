'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('PrefixModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Prefix.create({
          'organization': 1,
          'prefix': uid1
        })
        .then(function(results) {
          // run some tests
          expect(results.prefix).to.equal(uid1)
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Prefix.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.prefix).to.equal(uid1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Prefix.update({
          'id': testID
        }, {
          'prefix': uid2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].prefix).to.equal(uid2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Prefix.destroy({
          'id': testID
        })
        .then(function() {
          Prefix.findOne({
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
