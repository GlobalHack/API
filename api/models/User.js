var _ = require('lodash');

module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    roles: {
      collection: 'Role',
      via: 'users',
      dominant: true
    },
    permissions: {
      collection: "Permission",
      via: "user"
    },
    username: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    emailVerified: {
      type: 'boolean'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    getName: function() {
      return this.firstName + this.lastName;
    },
    employee: {
      model: 'employee'
    },
    consumer: {
      model: 'consumer'
    }
  },
  setDefaults: function ( options, cb ) {
    /**
      @param
        user - id of user model to update
    **/
    User.update({ id: options.user }, {
      createdBy: options.user,
      owner: options.user,
      createdAt: new Date(),
    }).exec(function after(err, updated){
      if( err ){
        return cb(err);
      }

      return cb();
    });

    return cb();
  },
  attachDefaultRole: function ( options, cb ) {
    /**
      @param
        user - id of user model to update

    **/
    options.role = 'registered'
    return User.attachRole(options, cb)
  },
  attachRole: function( options, cb ) {
    /**
     @param
      user - id of user model to update
      role - name of role to attach
    **/
    User.findOne(options.user).populate('roles')
    .exec( function(err, user){
      if( err || user == undefined ){
        return cb('error');
      }
      Role.findOne({ name: options.role})
      .exec(function(err, role){
        if( err || role == undefined){
          return cb('error');
        }

        user.roles.add(role.id);

        user.save(function(err){
          if(err){
            return cb('error');
          }
          return cb();
        });
      });
    });
  },
  dropAllPermissions: function(options, cb){
    /**
    *@param id in which all permissions needs to be dropped
    *@return
    **/
    const users = _.isArray(options.user) ? options.user : [options.user];

    users.forEach(function(user){
      (function _lookupRoleIfNecessary(afterLookup){
        if ( typeof user == 'object' ) return afterLookup(null, user)
        User.findOne(user).exec(afterLookup);
      })(function(err, user){
          if (err) return cb(err);
          if(!user){
            err = new Error();
            err.message = require('util').format('There is no User objects found that you are referencing.')
            err.status = 404;
            return cb(err);
          }

          Permission.destroy({user: user.id}).exec(function(err, array){
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
      });
    }
}
