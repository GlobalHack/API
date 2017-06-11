/**
 * AuthPolicy
 *
 * @module      :: AuthPolicy
 * @description :: Set request user based on authorization header
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function (req, res, next) {
  if (!req.user || !req.user.uid) {
    return res.forbidden('You are not permitted to perform this action.');
  }
  User.findOne({id: req.user.uid}).populate('employee')
    .then(function (user) {
      req.user = user;
      return Organization.findOne({id: user.employee.organization});
    })
    .then(function (organization) {
      req.user.organization = organization;
      return next();
    });
};
