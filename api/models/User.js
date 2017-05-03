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
      return this.firstName + this.lastName
    }
  },
  setOwner: function ( options, cb ) {
    /**
      @param
        user - id of user model to update
    **/
    User.update({ id: options.user }, { owner: options.user })
      .catch(function(e){
        return cb(e)
      })

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
  }
}
