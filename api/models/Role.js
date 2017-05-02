/**
 * @module Role
 *
 * @description
 *   Roles endow Users with Permissions. Exposes Postgres-like API for
 *   resolving granted Permissions for a User.
 *
 * @see <http://www.postgresql.org/docs/9.3/static/sql-grant.html>
 */

var _ = require('lodash');

module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  autoCreatedBy: false,

  description: 'Confers `Permission` to `User`',

  attributes: {
    name: {
      type: 'string',
      index: true,
      notNull: true,
      unique: true
    },
    users: {
      collection: 'User',
      via: 'roles'
    },
    active: {
      type: 'boolean',
      defaultsTo: true,
      index: true
    },
    permissions: {
      collection: 'Permission',
      via: 'role'
    },
  },
  getRoleForPermissionMeta: function(options, cb){
    /**
    * @param permissionMeta ( object, id )
    * @return role for that object
    **/
    const permissionMeta = options.permissionMeta;

    (function _lookupPermissionMetaIfNecessary(afterLookup){
      if ( typeof permissionMeta === 'object' ) return afterLookup(null, permissionMeta)
      return PermissionMeta.findOne(permissionMeta).exec(afterLookup);
    })(function(err, permissionMeta){
      if (err) return cb(err);
      if (!permissionMeta){
        err = new Error();
        err.message = require('util').format('There is no Permission Meta object found that you reference.')
        err.status = 404;
        return cb(err);
      }

      Role.findOrCreate({name: permissionMeta.role}).exec(function(err, role){
        if (err) return cb(err);

        return cb(null, role);
      });
    });
  },
  dropAllPermissions: function(options, cb){
    /**
    *@param roles in which all permissions needs to be dropped
    *@return
    **/
    const roles = _.isArray(options.role) ? options.role : [options.role];

    for(var i = 0; i < roles.length; i += 1){

      var role = roles[i];
      (function _lookupRoleIfNecessary(afterLookup){
        if ( typeof role == 'object' ) return afterLookup(null, role)
        Role.findOne(role).exec(afterLookup);
      })(function(err, role){
          if (err) return cb(err);
          if(!role){
            err = new Error();
            err.message = require('util').format('There is no Role ob jects found that you are referencing.')
            err.status = 404;
            return cb(err);
          }

          Permission.destroy({role: role.id}).exec(function(err, array){
            if (err) {
              return cb(err);
            }

            if (array) {
              Criteria.destroy({permission: _.pluck(array, "id")}).exec(function(err, array){
                if (err) {
                  return cb(err);
                }
              });
            }

            return cb()
          })
      })
    }
  }
};
