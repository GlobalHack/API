'use strict'
let expect = require('chai').expect

describe('Find Organization fixtures', function() {
  it('should find expected Organization fixtures', function(done) {
    Organization.find()
      .then(function(results) {
        // run some tests
        expect(results[0].name).to.equal("Karen House")
        expect(results[1].name).to.equal("Missionaries of Charity")
        expect(results[2].name).to.equal("New Life Evangelistic Center")
        expect(results[3].name).to.equal("Sunshine Ministries Homeless Shelter")
        expect(results[4].name).to.equal("The Bridge – Centenary Church")
        expect(results[5].name).to.equal("Horizon Club")
        expect(results[6].name).to.equal("St. Patrick Center")
        expect(results[7].name).to.equal("The SPOT")
        done()
      })
      .catch(done)
  })
})
