'use strict'
let expect = require('chai').expect

describe('Find Organization fixtures', function() {
  it('should find expected Organization fixtures', function(done) {
    Organization.find()
      .then(function(results) {
        // run some tests
        expect(results[0].name).to.equal("Biddle House Opportunities Center")
        expect(results[1].name).to.equal("Covenant House")
        done()
      })
      .catch(done)
  })
})
