'use strict'
let expect = require('chai').expect
const uuid = require('uuid')
const uuid1 = uuid.v4()
const uuid2 = uuid.v4()

describe('LegacyConsumerMapModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      LegacyConsumerMap.create({
          'organiation': 1,
          'consumer': 1,
          'legacy_uuid': uuid1
        })
        .then(function(results) {
          // run some tests
          expect(results.legacy_uuid).to.equal(uuid1)
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      LegacyConsumerMap.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.legacy_uuid).to.equal(uuid1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      LegacyConsumerMap.update({
          'id': testID
        }, {
          'legacy_uuid': uuid2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].legacy_uuid).to.equal(uuid2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      LegacyConsumerMap.destroy({
          'id': testID
        })
        .then(function() {
          LegacyConsumerMap.findOne({
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
