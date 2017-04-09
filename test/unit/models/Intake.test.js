'use strict'
const expect = require('chai').expect
const faker = require('faker')
const s = require('underscore.string')
const uuid = require('uuid').v4

// let generateSSN = () => {
//   let one = s.pad(Math.floor(Math.random() * 999), 3, 0);
//   let two = s.pad(Math.floor(Math.random() * 99), 2, 0);
//   let three = s.pad(Math.floor(Math.random() * 9999), 4, 0);
//   return (`${one}-${two}-${three}`);
// }
//
// let generateRecentDate = () => {
//   let date = faker.fake("{{date.recent}}").split(" ");
//   return (`${date[1]} ${date[2]}, ${date[3]}`);
// }

describe('IntakeModel', () => {
  let testObject = null
  let testScore = 1

  describe('#create()', () => {
    it('should check create function', (done) => {
      // Create a new resource
      Intake.create({
          'consumer': {
            'uuid': uuid.v4(),
            'firstName': faker.fake("{{name.firstName}}"),
            'lastName': faker.fake("{{name.lastName}}"),
            'ssn': '123-45-6789',
            'domesticViolence': true,
            'youth': true,
            'dateOfBirth': '1970-01-01'
          },
          'employee': {
            'nickname': faker.fake("{{random.word}}"),
            'password': uuid.v4(),
            'email_Verified': true
          },
          'score': testScore
        })
        .then((results) => {
          // run some tests
          expect(results.score).to.equal(testScore)
          // save the id of the new record
          testObject = results
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', () => {
    it('should check find one function', (done) => {
      Intake.findOne({
          'id': testObject.id
        })
        .then((results) => {
          // run some tests
          expect(results.score).to.equal(testScore)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', () => {
    it('should check update function', (done) => {
      Intake.update({
          'id': testObject.id
        }, {
          'score': 2
        })
        .then((results) => {
          // run some tests
          expect(results[0].score).to.equal(2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', () => {
    it('should check destroy function', (done) => {
      Intake.destroy({
          'id': testObject.id
        })
        .then(() => {
          Intake.findOne({
              'id': testObject.id
            })
            .then((results) => {
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
          Consumer.destroy({
            'id': testObject.consumer
          }), Employee.destroy({
            'id': testObject.employee
          })
        ]).then((results) => {
          done()
        })
        .catch(done)
    })
  })

})
