'use strict'
let expect = require('chai').expect

describe('Find Question fixtures', function() {
  it('should find expected Question fixtures', function(done) {
    Question.find()
      .then(function(results) {
        // run some tests
        expect(results.length).to.equal(51)
        expect(results[0].title).to.equal("How old are you?")
        expect(results[0].type).to.equal("number")
        done()
      })
      .catch(done)
  })
})
