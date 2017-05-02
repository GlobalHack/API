module.exports = {

  refreshPermissions: function(where){
    var rolesCleared = []
    const metaCriteria = where ? where : {}
    PermissionMeta.find(metaCriteria)
      .exec(function(err, metaObjects){
        if (err) return cb(err);

        metaObjects.forEach( function (meta) {
          Role.getRoleForPermissionMeta({permissionMeta: meta}, function(err, role){
            if (err) return err

            if (rolesCleared.indexOf(role.id) < 0 ){
              rolesCleared.push(role);
              Role.dropAllPermissions({role: role}, sails.log)
            }
            return Permission.buildPermissionFromMeta({permissionMeta: meta}, sails.log)
          });
        });
      });
    }
}
