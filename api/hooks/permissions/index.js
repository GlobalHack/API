var path = require('path')
var _ = require('lodash')
var Marlinspike = require('marlinspike')

var permissionPolicies = [
  'sessionAuth',
  'ModelPolicy',
  'OwnerPolicy',
  'PermissionPolicy',
  'RolePolicy'
]

function initializeFixtures () {
  let fixturesPath = path.resolve(__dirname, '../../../config/fixtures/')
  return require(path.resolve(fixturesPath, 'model')).createModels()
    .then(models => {
      this.models = models
      sails.hooks.permissions._modelCache = _.indexBy(models, 'identity')
      return require(path.resolve(fixturesPath, 'role')).create()
    })
    .then(roles => {
      this.roles = roles
      var userModel = _.find(this.models, { name: 'User' })
      return require(path.resolve(fixturesPath, 'user')).create(this.roles, userModel)
    })
    .then(() => {
      return sails.models.user.findOne({ email: sails.config.permissions.adminEmail })
    })
    .then(user => {
      user.createdBy = user.id
      user.owner = user.id
      return user.save()
    })
    .then(admin => {
      return require(path.resolve(fixturesPath, 'permission')).create(this.roles, this.models, admin, sails.config.permissions);
    })
    .catch(error => {
      sails.log.error(error)
    })
}

function installModelOwnership () {
  var models = sails.models
  if (sails.config.models.autoCreatedBy === false) return

  _.each(models, model => {
    if (model.autoCreatedBy === false) return

    _.defaults(model.attributes, {
      createdBy: {
        model: 'User',
        index: true
      },
      owner: {
        model: 'User',
        index: true
      }
    })
  })
}

class Permissions extends Marlinspike {
  constructor (sails) {
    super(sails, module)
  }

  configure () {
    if (!_.isObject(sails.config.permissions)) sails.config.permissions = { }

    /**
     * Local cache of Model name -> id mappings to avoid excessive database lookups.
     */
    sails.config.blueprints.populate = false
  }

  initialize (next) {
    let config = sails.config.permissions
    installModelOwnership()

    sails.after('hook:orm:loaded', () => {
      sails.models.model.count()
        .then(count => {
          // if (count === _.keys(sails.models).length) return next()

          return initializeFixtures()
            .then(() => {
              next()
            })
        })
        .catch(error => {
          sails.log.error(error)
          next(error)
        })
    })
  }
}

module.exports = function(sails) {
  var permissions = new Permissions(sails);
  return {
    configure: permissions.configure,
    initialize: permissions.initialize
  }
}
