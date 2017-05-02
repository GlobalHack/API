module.exports.permissions = {
  name: 'permissions',

  adminEmail: process.env.ADMIN_EMAIL || 'test@cemaritan.com',
  adminUsername: process.env.ADMIN_USERNAME || 'admin',
  adminPassword: process.env.ADMIN_PASSWORD || 'testing123',

  afterEvents: [
    'hook:auth:initialized'
  ]
};
