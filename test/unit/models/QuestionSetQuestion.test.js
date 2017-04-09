'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('QuestionSetQuestionModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      QuestionSetQuestion.create({
          'questionset': 1,
          'question': 1
        })
        .then(function(results) {
          // run some tests
          expect(results.question).to.equal(1)
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      QuestionSetQuestion.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.question).to.equal(1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      QuestionSetQuestion.update({
          'id': testID
        }, {
          'question': 2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].question).to.equal(2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      QuestionSetQuestion.destroy({
          'id': testID
        })
        .then(function() {
          QuestionSetQuestion.findOne({
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
