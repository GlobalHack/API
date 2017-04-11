'use strict'
let expect = require('chai').expect
const faker = require('faker')

describe('WidgetModel', function() {
  let testObject = null
  let testTitle = faker.fake("{{lorem.sentence}}")
  let testTitle2 = faker.fake("{{lorem.sentence}}")

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Widget.create({
          'title': testTitle
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
      Widget.findOne({
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
      Widget.update({
          'id': testObject.id
        }, {
          'title': testTitle2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].title).to.equal(testTitle2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Widget.destroy({
          'id': testObject.id
        })
        .then(function() {
          Widget.findOne({
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
