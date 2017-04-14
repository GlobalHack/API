var _ = require('lodash');

_.merge(exports, {
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
    nickname: {
      type: 'string'
    },
    username: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    emailVerified: {
      type: 'boolean',
      columnName: 'email_verified'
    },
    firstName: {
      type: 'string',
      size: 64,
      columnName: 'first_name'
    },
    lastName: {
      type: 'string',
      size: 64,
      columnName: 'last_name'
    },
    email: {
      type: 'string'
    }
  },

  setOwner: function ( options, cb ) {
    /**
      @param
        user - id of user model to update
        owner - id to set to owner of user ( defaults to using user id)

    **/

    const user = options.user;
    const owner = typeof options.owner === 'undefined' ? options.owner : options.user;

    sails.log.verbose('User.afterCreate.setOwner', user);
    User.update({ id: user }, { owner: user })
      .catch(function(e){
        sails.log.error(e);
        return cb(e)
      })

    cb();
  },
  attachDefaultRole: function ( options, cb ) {
    /**
      @param
        user - id of user model to update

    **/
    const user = options.user;

    sails.log.verbose('User.afterCreate.attachDefaultRole', user);
    User.findOne(user)
      .populate('roles')
      .then(function(_user){
        user = _user;
        return Role.findOne({ name: 'registered'});
      })
      .then(function(role){
        user.roles.add(role.id);
        return user.save();
      })
      .catch(function(e){
        sails.log.error(e);
        return cb(e);
      })

      cb();
  }
});
