'use strict'
let expect = require('chai').expect
const faker = require('faker')

describe('RoleModel', function() {
  let testObject = null
  let testRole = faker.fake("{{name.jobTitle}}")
  let testRole2 = faker.fake("{{name.jobTitle}}")

  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Role.create({
          'name': testRole,
          'active': true
        })
        .then(function(results) {
          // run some tests
          expect(results.active).to.equal(true)
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Role.findOne({
          'id': testObject.id
        })
        .then(function(results) {
          // run some tests
          expect(results.name).to.equal(testRole)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Role.update({
          'id': testObject.id
        }, {
          'name': testRole2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].name).to.equal(testRole2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Role.destroy({
          'id': testObject.id
        })
        .then(function() {
          Role.findOne({
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
