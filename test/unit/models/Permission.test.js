'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('PermissionModel', function() {
  let testObject = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Permission.create({
          'model': {
            'name' : 'Test Model',
            'identity': 'Test Identity',
            'attributes': JSON.stringify({'key':'value'})
          },
          'action': 'read',
          'relation': 'role'
        })
        .then(function(results) {
          // run some tests
          expect(results.action).to.equal('read')
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Permission.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.action).to.equal('read')
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Permission.update({
          'id': testObject.id
        }, {
          'action': 'create'
        })
        .then(function(results) {
          // run some tests
          expect(results[0].action).to.equal('create')
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Permission.destroy({
          'id': testObject.id
        })
        .then(function() {
          Permission.findOne({
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
          Model.destroy({
            'id': testObject.model
          })
        ]).then((results) => {
          done()
        })
        .catch(done)
    })
  })

})
