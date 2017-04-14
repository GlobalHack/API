/**
 * AuthPolicy
 *
 * @module      :: AuthPolicy
 * @description :: Set request user based on authorization header
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  if (!req.user || !req.user.uid) {
    return res.forbidden('You are not permitted to perform this action.');
  }
  req.user.id = req.user.uid;
  req.user.organization = req.user.org;
  return next();
};
