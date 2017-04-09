'use strict'
let expect = require('chai').expect
// const uid = require('uid')
const faker = require('faker')
// const uid1 = uid()
// const uid2 = uid()

describe('OrganizationModel', function() {
  let testObject = null
  let testName = faker.fake("{{company.companyName}}")
  let testAddress = faker.fake("123 {{address.streetName}}, {{address.city}}, {{address.stateAbbr}} {{address.zipCode}}")

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Organization.create({
          'name': testName,
          'address': testAddress,
        })
        .then(function(results) {
          // run some tests
          expect(results.name).to.equal(testName)
          expect(results.address).to.equal(testAddress)
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Organization.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.name).to.equal(testName)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Organization.update({
          'id': testObject.id
        }, {
          'address': 'new address'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].address).to.equal('new address')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Organization.destroy({
          'id': testObject.id
        })
        .then(function() {
          Organization.findOne({
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
