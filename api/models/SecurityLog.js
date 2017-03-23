/**
* SecurityLog.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
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

