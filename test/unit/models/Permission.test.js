'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('PermissionModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Permission.create({
          'model': 1,
          'action': 'read',
          'relation': 'role',
          'role': 1,
          'user': 1,
          'criteria': 1
        })
        .then(function(results) {
          // run some tests
          expect(results.action).to.equal('read')
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Permission.findOne({
          'id': testID
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
          'id': testID
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
          'id': testID
        })
        .then(function() {
          Permission.findOne({
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
