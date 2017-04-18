'use strict'
let expect = require('chai').expect
let faker = require('faker')

describe('QuestionModel', function() {
  let testObject = null
  let testTitle = faker.fake("{{lorem.sentence}}")

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Question.create({
          'key': faker.fake("{{random.word}}"),
          'title': testTitle,
          'help': faker.fake("{{random.word}}"),
          'type': 'string',
          'required': false,
          'prefix': {
            'prefix': faker.fake("{{random.word}}")
          },
          'widget': {
            'title': faker.fake("{{random.word}}")
          }
        })
        .then(function(results) {
          // run some tests
          expect(results.title).to.equal(testTitle)
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Question.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.title).to.equal(testTitle)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Question.update({
          'id': testObject.id
        }, {
          'title': 'Something Different'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].title).to.equal('Something Different')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Question.destroy({
          'id': testObject.id
        })
        .then(function() {
          Question.findOne({
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
          Prefix.destroy({
            'id': testObject.organization
          }),
          Widget.destroy({
            'id': testObject.organization
          })
        ]).then((results) => {
          done()
        })
        .catch(done)
    })
  })

})
