'use strict'
let expect = require('chai').expect
const faker = require('faker')

describe('CoordinatedEntryGroupModel', function() {
  let testObject = null
  let testName = faker.fake("{{company.companyName}}")
  let testAddress = faker.fake("{{address.streetAddress}}, {{address.city}}, {{address.stateAbbr}} {{address.zipCode}}")

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      CoordinatedEntryGroup.create({
          'lead_organization': {
            'name': testName,
            'address': testAddress,
          },
          'name': 'My Test Group',
          'access_level': 1
        })
        .then(function(results) {
          // run some tests
          expect(results.name).to.equal('My Test Group')
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      CoordinatedEntryGroup.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.access_level).to.equal(1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      CoordinatedEntryGroup.update({
          'id': testObject.id
        }, {
          'access_level': 2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].access_level).to.equal(2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      CoordinatedEntryGroup.destroy({
          'id': testObject.id
        })
        .then(function() {
          CoordinatedEntryGroup.findOne({
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
            'id': testObject.lead_organization
          })
        ]).then((results) => {
          done()
        })
        .catch(done)
    })
  })

})
