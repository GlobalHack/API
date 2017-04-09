// 'use strict'
// let expect = require('chai').expect
// const uid = require('uid')
// const uid1 = uid()
// const uid2 = uid()
//
// describe('RoleModel', function() {
//   let testID = null
//   describe('#create()', function() {
//     it('should check create function', function(done) {
//       // Create a new resource
//       Role.create({
//           'name': uid1,
//           'users': [1,2],
//           'active': true,
//           'permissions': {
//             'model': {
//               'name': uid1,
//               'identity': uid1,
//               'attributes': JSON.stringify({'key':'value'}),
//               'permissions': 1
//             },
//             'action': 'read',
//             'relation': 'role',
//             'role': 1
//           }]
//         })
//         .then(function(results) {
//           // run some tests
//           expect(results.active).to.equal(true)
//           // save the id of the new record
//           testID = results.id
//           done()
//         })
//         .catch(done)
//     })
//   })
//
//   describe('#findOne()', function() {
//     it('should check find one function', function(done) {
//       Role.findOne({
//           'id': testID
//         })
//         .then(function(results) {
//           // run some tests
//           expect(results.active).to.equal(true)
//           done()
//         })
//         .catch(done)
//     })
//   })
//
//   describe('#update()', function() {
//     it('should check update function', function(done) {
//       Role.update({
//           'id': testID
//         }, {
//           'active': false
//         })
//         .then(function(results) {
//           // run some tests
//           expect(results[0].active).to.equal(false)
//           done()
//         })
//         .catch(done)
//     })
//   })
//
//   describe('#destroy()', function() {
//     it('should check destroy function', function(done) {
//       Role.destroy({
//           'id': testID
//         })
//         .then(function() {
//           Role.findOne({
//               'id': testID
//             })
//             .then(function(results) {
//               expect(results).to.be.undefined
//               done()
//             })
//         })
//         .catch(done)
//     })
//   })
// })
