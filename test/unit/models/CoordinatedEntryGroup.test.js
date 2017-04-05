'use strict'
let expect = require('chai').expect

describe('CoordinatedEntryGroupModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      CoordinatedEntryGroup.create({
          'lead_organization': 1,
          'name': 'Test Houses',
          'access_level': 1
        })
        .then(function(results) {
          // run some tests
          expect(results.name).to.equal('Test Houses')
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      CoordinatedEntryGroup.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.name).to.equal('Test Houses')
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      CoordinatedEntryGroup.update({
          'id': testID
        }, {
          'name': 'Test Neighborhood'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].name).to.equal('Test Neighborhood')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      CoordinatedEntryGroup.destroy({
          'id': testID
        })
        .then(function() {
          CoordinatedEntryGroup.findOne({
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
