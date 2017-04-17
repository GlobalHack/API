'use strict'
let expect = require('chai').expect

describe('Find MenuItem fixtures', function() {
  it('should find expected MenuItem fixtures', function(done) {
    MenuItem.find()
      .then(function(results) {
        // run some tests
        expect(results[0].link).to.equal("/consumers")
        expect(results[1].link).to.equal("/employees")
        expect(results[2].link).to.equal("/intakes")
        done()
      })
      .catch(done)
  })
})
