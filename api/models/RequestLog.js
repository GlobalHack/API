/**
 * RequestLog.js
 *
 * @description :: Stores api requests
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  autoPK: false,
  autoCreatedBy: false,
  autoUpdatedAt: false,

  attributes: {
    id: {
      type: 'string',
      primaryKey: true
    },
    ipAddress: {
      type: 'string'
    },
    method: {
      type: 'string'
    },
    url: {
      type: 'string',
      url: true
    },
    body: {
      type: 'json'
    },
    user: {
      model: 'User'
    },
    model: {
      type: 'string'
    }
  }
};

