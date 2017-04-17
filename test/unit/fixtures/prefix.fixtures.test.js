'use strict'
let expect = require('chai').expect

describe('Find Prefix fixtures', function() {
  it('should find expected Prefix fixtures', function(done) {
    Prefix.find()
      .then(function(results) {
        // run some tests
        expect(results[0].prefix).to.equal("Do you have now, have you ever had, or has a healthcare provider ever told you that you have any of the following medical conditions:")
        done()
      })
      .catch(done)
  })
})
