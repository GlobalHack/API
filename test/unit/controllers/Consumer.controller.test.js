'use strict'
const expect = require('chai').expect
const request = require('supertest')
const faker = require('faker')

describe('ConsumerController', function() {

      let testObject = null
      let testFirstName = faker.fake("{{name.firstName}}")
      let testLastName = faker.fake("{{name.lastName}}")
      let testSSN = '123-45-6789'
      let testDomesticViolence = true
      let testYouth = true
      let testDateOfBirth = '01-01-2001'

      it('should POST to /consumers', function(done) {
        request(sails.hooks.http.app)
          .post('/api/consumers')
          .send({
            firstName: testFirstName,
            lastName: testLastName,
            ssn: testSSN,
            domesticViolence: testDomesticViolence,
            dateOfBirth: testDateOfBirth
          })
          .then((results) => {
            expect(results.statusCode).to.equal(201)
            testObject = JSON.parse(results.res.text)
            expect(testObject.firstName).to.equal(testFirstName)
            expect(testObject.lastName).to.equal(testLastName)
            done()
          })
      })

      it('should GET /consumers', function(done) {
        request(sails.hooks.http.app)
          .get(`/api/consumers/${testObject.id}`)
          .then((results) => {
            expect(results.statusCode).to.equal(200)
            let res = JSON.parse(results.res.text)
            expect(res.firstName).to.equal(testObject.firstName)
            expect(res.lastName).to.equal(testObject.lastName)
            done()
          })
      })

      it('should PUT /consumers', function(done) {
        request(sails.hooks.http.app)
          .put(`/api/consumers/${testObject.id}`)
          .send({
            lastName: "Something Different"
          })
          .then((results) => {
            expect(results.statusCode).to.equal(200)
            let res = JSON.parse(results.res.text)
            expect(res.firstName).to.equal(testObject.firstName)
            expect(res.lastName).to.equal("Something Different")
            done()
          })
      })

      it('should DELETE /consumers', function(done) {
          request(sails.hooks.http.app)
            .delete(`/api/consumers/${testObject.id}`)
            .then((results) => {
              expect(results.statusCode).to.equal(200)
            })
            .then(() => {
                request(sails.hooks.http.app)
                  .get(`/api/consumers/${testObject.id}`)
                  .then((results) => {
                    expect(results.statusCode).to.equal(404)
                    done()
                  })
              })
            })

      })
