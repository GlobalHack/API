
module.exports = {

  refreshPermissions: function(where){
    var rolesCleared = []
    const metaCriteria = where ? where : {}
    PermissionMeta.find(metaCriteria)
      .exec(function(err, metaObjects){
        if (err) return cb(err);

        for ( var i = 0; i < metaObjects.length; i += 1) {
          Role.getRoleForPermissionMeta({permissionMeta: metaObjects[i]})
          .then(function(role){
            if (rolesCleared.indexOf(role.id) < 0 ){
              rolesCleared.push(role);
              return Role.dropAllPermissions({role: role})
            }
          })
          .then(function(){
            return Permission.buildPermissionFromMeta(metaCriteria)
          })
          .catch(function(err){
            sails.log.error(err);
          });
        }
      });
    }
}
