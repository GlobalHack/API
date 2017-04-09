'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('RequestLogModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      RequestLog.create({
          'id': uid1,
          'ipAddress': uid1,
          'method': uid1,
          'url': 'http://www.google.com',
          'body': JSON.stringify({'key': 'value'}),
          'user': 1,
          'model': 1
        })
        .then(function(results) {
          // run some tests
          expect(results.ipAddress).to.equal(uid1)
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      RequestLog.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.ipAddress).to.equal(uid1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      RequestLog.update({
          'id': testID
        }, {
          'ipAddress': uid2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].ipAddress).to.equal(uid2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      RequestLog.destroy({
          'id': testID
        })
        .then(function() {
          RequestLog.findOne({
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
