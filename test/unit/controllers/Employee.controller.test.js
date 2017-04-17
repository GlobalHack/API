'use strict'
const expect = require('chai').expect
const request = require('supertest')
const faker = require('faker')

describe('EmployeeController', function() {

  let testObject = null
  let testNickName = faker.fake("{{random.word}}")
  let testPassword = faker.fake("{{random.word}}")
  let testEmailVerified = true
  let testFirstName = faker.fake("{{name.firstName}}")
  let testLastName = faker.fake("{{name.lastName}}")
  let testEmail = faker.fake("{{internet.email}}")
  let testSSN = '123-45-6789'

  it('should POST to /employee', function(done) {
    request(sails.hooks.http.app)
      .post('/api/employees')
      .send({
        nickname: testNickName,
        password: testPassword,
        email_Verified: testEmailVerified,
        firstName: testFirstName,
        lastName: testLastName,
        email: testEmail,
        ssn: testSSN
      })
      .then((results) => {
        expect(results.statusCode).to.equal(201)
        testObject = JSON.parse(results.res.text)
        expect(testObject.firstName).to.equal(testFirstName)
        expect(testObject.lastName).to.equal(testLastName)
        done()
      })
  })

  it('should GET /employees', function(done) {
    request(sails.hooks.http.app)
      .get(`/api/employees/${testObject.id}`)
      .then((results) => {
        expect(results.statusCode).to.equal(200)
        let res = JSON.parse(results.res.text)
        expect(res.firstName).to.equal(testObject.firstName)
        expect(res.lastName).to.equal(testObject.lastName)
        done()
      })
  })

  it('should PUT /employees', function(done) {
    request(sails.hooks.http.app)
      .put(`/api/employees/${testObject.id}`)
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

  it('should DELETE /employees', function(done) {
    request(sails.hooks.http.app)
      .delete(`/api/employees/${testObject.id}`)
      .then((results) => {
        expect(results.statusCode).to.equal(200)
      })
      .then(() => {
        request(sails.hooks.http.app)
          .get(`/api/employees/${testObject.id}`)
          .then((results) => {
            expect(results.statusCode).to.equal(404)
            done()
          })
      })
  })

})
