'use strict'
const expect = require('chai').expect
const request = require('supertest')
const faker = require('faker')

describe('OrganizationController', function() {

  let testObject = null
  let testName = faker.fake("{{company.companyName}}")
  let testAddress = faker.fake("{{address.streetAddress}}, {{address.city}}, {{address.stateAbbr}} {{address.zipCode}}")

  it('should POST to /organizations', function(done) {
    request(sails.hooks.http.app)
      .post('/api/organizations')
      .send({
        name: testName,
        address: testAddress
      })
      .then((results) => {
        expect(results.statusCode).to.equal(201)
        testObject = JSON.parse(results.res.text)
        expect(testObject.name).to.equal(testName)
        expect(testObject.address).to.equal(testAddress)
        done()
      })
  })

  it('should GET /organizations', function(done) {
    request(sails.hooks.http.app)
      .get(`/api/organizations/${testObject.id}`)
      .then((results) => {
        expect(results.statusCode).to.equal(200)
        let res = JSON.parse(results.res.text)
        expect(res.name).to.equal(testObject.name)
        expect(res.address).to.equal(testObject.address)
        done()
      })
  })

  it('should PUT /organizations', function(done) {
    request(sails.hooks.http.app)
      .put(`/api/organizations/${testObject.id}`)
      .send({
        address: "Something Different"
      })
      .then((results) => {
        expect(results.statusCode).to.equal(200)
        let res = JSON.parse(results.res.text)
        expect(res.name).to.equal(testObject.name)
        expect(res.address).to.equal("Something Different")
        done()
      })
  })

  it('should DELETE /organizations', function(done) {
    request(sails.hooks.http.app)
      .delete(`/api/organizations/${testObject.id}`)
      .then((results) => {
        expect(results.statusCode).to.equal(200)
      })
      .then(() => {
        request(sails.hooks.http.app)
          .get(`/api/organizations/${testObject.id}`)
          .then((results) => {
            expect(results.statusCode).to.equal(404)
            done()
          })
      })
  })

})
