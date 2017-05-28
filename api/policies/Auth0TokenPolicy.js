/**
 * tokenAuth
 *
 * @module      Policies
 * @description Policy that verifies a given JWT token.
 *              If successful, allows said api request to execute
 * @docs        http://sailsjs.org/#!documentation/policies
 * @see         http://github.com/auth0/express-jwt
 *
 */
var jwt = require('express-jwt');
module.exports = jwt(
  {
    secret: process.env.AUTH0SECRET,
    audience: process.env.REACT_APP_AUTH0CLIENTID,
    issuer: 'https://'+process.env.REACT_APP_AUTH0DOMAIN+'/'
  }
);
