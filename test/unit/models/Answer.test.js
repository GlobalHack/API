'use strict'
let expect = require('chai').expect
// const uid = require('uid')
// const uuid = require('uuid').v4
// const faker = require('faker')
// const uid1 = uid()
// const uid2 = uid()

describe('AnswerModel', function() {
  let testObject = null
  let testAnswer = '5 years'

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Answer.create({
          'answer': testAnswer,
          'intake': {
            'score': 1
          },
          'question': {
            'key': 'General.1',
            'title': 'How long have you been homeless?',
            'help': 'In years',
            'type': 'string',
            'required': false
          }
        })
        .then(function(results) {
          // run some tests
          expect(results.answer).to.equal(testAnswer)
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Answer.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.answer).to.equal(testAnswer)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Answer.update({
          'id': testObject.id
        }, {
          'answer': 'new answer'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].answer).to.equal('new answer')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Answer.destroy({
          'id': testObject.id
        })
        .then(function() {
          Answer.findOne({
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

  describe('cleaning up', () => {
    it('should clean up test dependencies', (done) => {
      Promise.all([
          Intake.destroy({
            'id': testObject.intake
          }),
          Question.destroy({
            'id': testObject.question
          })
        ]).then((results) => {
          done()
        })
        .catch(done)
    })
  })

})
