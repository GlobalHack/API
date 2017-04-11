'use strict'
let expect = require('chai').expect
const faker = require('faker')

describe('RequestLogModel', function() {
  let testObject = null
  let testIP = faker.fake("{{internet.ip}}")
  let testIP2 = faker.fake("{{internet.ip}}")

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      RequestLog.create({
          'id': faker.fake("{{random.uuid}}"),
          'ipAddress': testIP,
          'method': "POST",
          'url': faker.fake("{{internet.url}}"),
          'body': JSON.stringify({'key': 'value'}),
          'model': 'Test Model'
        })
        .then(function(results) {
          // run some tests
          expect(results.ipAddress).to.equal(testIP)
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      RequestLog.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.ipAddress).to.equal(testIP)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      RequestLog.update({
          'id': testObject.id
        }, {
          'ipAddress': testIP2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].ipAddress).to.equal(testIP2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      RequestLog.destroy({
          'id': testObject.id
        })
        .then(function() {
          RequestLog.findOne({
              'id': testObject.id
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
