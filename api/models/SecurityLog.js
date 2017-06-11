/**
 * SecurityLog.js
 *
 * @description :: Stores reference to Request Log
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  autoPK: false,
  autoUpdatedAt: false,
  autoCreatedAt: false,

  attributes: {
    request: {
      model: 'RequestLog',
      primaryKey: true
    }
  }
};

