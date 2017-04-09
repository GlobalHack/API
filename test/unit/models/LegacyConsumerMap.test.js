'use strict'
let expect = require('chai').expect
const uuid = require('uuid')
const faker = require('faker')

describe('LegacyConsumerMapModel', function() {
  let testObject = null
  let uuid1 = uuid.v4()
  let uuid2 = uuid.v4()

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      LegacyConsumerMap.create({
          'organization': {
            'name': faker.fake("{{company.companyName}}"),
            'address': faker.fake("{{address.streetAddress}}, {{address.city}}, {{address.stateAbbr}} {{address.zipCode}}")
          },
          'consumer': {
            'firstName': faker.fake("{{name.firstName}}"),
            'lastName': faker.fake("{{name.lastName}}"),
            'ssn': '123-45-6789',
            'domesticViolence': true,
            'youth': true,
            'dateOfBirth': '01-01-2001'
          },
          'legacy_uuid': uuid1
        })
        .then(function(results) {
          // run some tests
          expect(results.legacy_uuid).to.equal(uuid1)
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      LegacyConsumerMap.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.legacy_uuid).to.equal(uuid1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      LegacyConsumerMap.update({
          'id': testObject.id
        }, {
          'legacy_uuid': uuid2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].legacy_uuid).to.equal(uuid2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      LegacyConsumerMap.destroy({
          'id': testObject.id
        })
        .then(function() {
          LegacyConsumerMap.findOne({
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
          }),
          Consumer.destroy({
            'id': testObject.consumer
          })
        ]).then((results) => {
          done()
        })
        .catch(done)
    })
  })

})
