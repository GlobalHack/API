'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('CriteriaModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Criteria.create({
          'where': JSON.stringify({'key':'value'}),
          'blacklist': [1,2,3,4,5],
          'permission': 1
        })
        .then(function(results) {
          // run some tests
          expect(results.permission).to.equal(1)
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Criteria.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.permission).to.equal(1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Criteria.update({
          'id': testID
        }, {
          'permission': 2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].permission).to.equal(2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Criteria.destroy({
          'id': testID
        })
        .then(function() {
          Criteria.findOne({
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
