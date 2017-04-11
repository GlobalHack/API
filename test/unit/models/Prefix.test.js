'use strict'
let expect = require('chai').expect
const faker = require('faker')

describe('PrefixModel', function() {
  let testObject = null
  let testPrefix = faker.fake("{{random.word}}")

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Prefix.create({
          'organization': {
            'name': faker.fake("{{company.companyName}}"),
            'address': faker.fake("{{address.streetAddress}}, {{address.city}}, {{address.stateAbbr}} {{address.zipCode}}")
          },
          'prefix': testPrefix
        })
        .then(function(results) {
          // run some tests
          expect(results.prefix).to.equal(testPrefix)
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Prefix.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.prefix).to.equal(testPrefix)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Prefix.update({
          'id': testObject.id
        }, {
          'prefix': 'Something different'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].prefix).to.equal('Something different')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Prefix.destroy({
          'id': testObject.id
        })
        .then(function() {
          Prefix.findOne({
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
