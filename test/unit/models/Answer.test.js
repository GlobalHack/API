'use strict'
let expect = require('chai').expect

describe('AnswerModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Answer.create({
          'answer': 'Excelsior',
          'intake':1,
          'question':1
        })
        .then(function(results) {
          // run some tests
          expect(results.answer).to.equal('Excelsior')
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Answer.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.answer).to.equal('Excelsior')
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Answer.update({
          'id': testID
        }, {
          'answer': 'Something completely different'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].answer).to.equal('Something completely different')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Answer.destroy({
          'id': testID
        })
        .then(function() {
          Answer.findOne({
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
