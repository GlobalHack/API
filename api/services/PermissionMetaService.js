module.exports = {

  refreshPermissions: function(where){
    var rolesCleared = []
    var usersCleared = []
    const metaCriteria = where ? where : {}
    PermissionMeta.find(metaCriteria)
      .exec(function(err, metaObjects){
        if (err) return err

        Permission.dropAllPermissions({}, function(err){
          if (err) return err;

          metaObjects.forEach( function (meta) {
            Permission.buildPermissionFromMeta({permissionMeta: meta}, sails.log)
          })
        })
      })
    }
}
