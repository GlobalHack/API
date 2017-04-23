/**
 * @module Permission
 *
 * @description
 *   The actions a Role is granted on a particular Model and its attributes
 */
var _ = require('lodash');
module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  autoCreatedBy: false,

  description: [
    'Defines a particular `action` that a `Role` can perform on a `Model`.',
    'A `User` can perform an `action` on a `Model` by having a `Role` which',
    'grants the necessary `Permission`.'
  ].join(' '),

  attributes: {

    /**
     * The Model that this Permission applies to.
     */
    model: {
      model: 'Model',
      required: true
    },

    action: {
      type: 'string',
      index: true,
      notNull: true,
      /**
       * TODO remove enum and support permissions based on all controller
       * actions, including custom ones
       */
      enum: [
        'create',
        'read',
        'update',
        'delete'
      ]
    },

    relation: {
      type: 'string',
      enum: [
        'role',
        'owner',
        'user'
      ],
      defaultsTo: 'role',
      index: true
    },

    /**
     * The Role to which this Permission grants create, read, update, and/or
     * delete privileges.
     */
    role: {
      model: 'Role',
      // Validate manually
      //required: true
    },

    /**
     * The User to which this Permission grants create, read, update, and/or
     * delete privileges.
     */
    user: {
      model: 'User'
      // Validate manually
    },

    /**
     * A list of criteria.  If any of the criteria match the request, the action is allowed.
     * If no criteria are specified, it is ignored altogether.
     */
    criteria: {
      collection: 'Criteria',
      via: 'permission'
    }
  },

  afterValidate: [
    function validateOwnerCreateTautology (permission, next) {
      if (permission.relation == 'owner' && permission.action == 'create') {
        next(new Error('Creating a Permission with relation=owner and action=create is tautological'));
      }

      if (permission.action === 'delete' &&
              _.filter(permission.criteria, function (criteria) { return !_.isEmpty(criteria.blacklist); }).length) {
        next(new Error('Creating a Permission with an attribute blacklist is not allowed when action=delete'));
      }

      if (permission.relation == 'user' && permission.user === "") {
        next(new Error('A Permission with relation user MUST have the user attribute set'));
      }

      if (permission.relation == 'role' && permission.role === "") {
        next(new Error('A Permission with relation role MUST have the role attribute set'));
      }

      next();
    }
  ],
  buildPermissionFromMeta: function(options, cb){
    /**
    *@param permissionMeta object
    *@return
    **/
    const permissionMeta = options.permissionMeta;

    (function _lookupPermissionMetaIfNecessary(afterLookup){
      if (typeof permissionMeta == 'object') return afterLookup(null, permissionMeta)
      PermissionMeta.findOne(permissionMeta).exec(afterLookup)
    })(function(err, permissionMeta){
      if (err) return cb(err);
      if (!permissionMeta){
        err = new Error();
        err.message = require('util').format('There is no Permission Meta object found that you reference.')
        err.status = 404;
        return cb(err);
      }

      PermissionService.grant({
        role: permissionMeta.role,
        model: permissionMeta.model,
        action: permissionMeta.action,
        criteria: {
          where: permissionMeta.criteria ? permissionMeta.criteria : {},
          blacklist: permissionMeta.blacklist ? permissionMeta.blacklist : []
        }
      }).then(function(){
        sails.log("Created permission " + permissionMeta.action + "on " + permissionMeta.model + " for role " + permissionMeta.role);
        return cb();
      }).catch(sails.log.error);
    });
  }
};
