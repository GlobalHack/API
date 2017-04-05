'use strict'
let expect = require('chai').expect

describe('OrganizationModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Organization.create({
          'name': 'Test House',
          'address': '123 Test Street, Saint Louis, MO 63124'
        })
        .then(function(results) {
          // run some tests
          expect(results.name).to.equal('Test House')
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Organization.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.name).to.equal('Test House')
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Organization.update({
          'id': testID
        }, {
          'address': '456 Test Lane, Saint Louis, MO 63124'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].address).to.equal('456 Test Lane, Saint Louis, MO 63124')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Organization.destroy({
          'id': testID
        })
        .then(function() {
          Organization.findOne({
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
