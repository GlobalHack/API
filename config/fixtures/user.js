/**
 * Create admin user.
 * @param adminRole - the admin role which grants all permissions
 */
var _ = require('lodash')
exports.create = function (roles, userModel) {
  if (_.isEmpty(sails.config.permissions.adminUsername)) {
    throw new Error('sails.config.permissions.adminUsername is not set');
  }
  if (_.isEmpty(sails.config.permissions.adminPassword)) {
    throw new Error('sails.config.permissions.adminPassword is not set');
  }
  if (_.isEmpty(sails.config.permissions.adminEmail)) {
    throw new Error('sails.config.permissions.adminEmail is not set');
  }
  return sails.models.user.findOne({ email: sails.config.permissions.adminEmail })
    .then(function (user) {
      if (user) return user;

      sails.log.info('sails-permissions: admin user does not exist; creating...');
      throw new Error('need to create User with admin credentials via Auth0');
  });
};
