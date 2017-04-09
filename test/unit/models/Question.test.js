'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('QuestionModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Question.create({
          'title': uid1,
          'help': uid1,
          'type': 'string',
          'required': false,
          'prefix': 1,
          'widget': 1,
          'questionset': {
            "organization": 1,
            "title": uid1,
            "questions": [1,2,3]
          }
        })
        .then(function(results) {
          // run some tests
          expect(results.title).to.equal(uid1)
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Question.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.title).to.equal(uid1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Question.update({
          'id': testID
        }, {
          'title': uid2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].title).to.equal(uid2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Question.destroy({
          'id': testID
        })
        .then(function() {
          Question.findOne({
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
