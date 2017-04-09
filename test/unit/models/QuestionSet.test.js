'use strict'
let expect = require('chai').expect
const faker = require('faker')

describe('QuestionSetModel', function() {
  let testObject = null
  let testTitle = faker.fake("{{lorem.sentence}}")

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      QuestionSet.create({
          'organization': {
            'name': faker.fake("{{company.companyName}}"),
            'address': faker.fake("{{address.streetAddress}}, {{address.city}}, {{address.stateAbbr}} {{address.zipCode}}")
          },
          'title': testTitle,
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
      QuestionSet.findOne({
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
      QuestionSet.update({
          'id': testObject.id
        }, {
          'title': 'Something different'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].title).to.equal('Something different')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      QuestionSet.destroy({
          'id': testObject.id
        })
        .then(function() {
          QuestionSet.findOne({
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
          Organization.destroy({
            'id': testObject.organization
          })
        ]).then((results) => {
          done()
        })
        .catch(done)
    })
  })

})
