module.exports = {

  setOwner: function(req, res){
    const options = {user: req.param('id')};
    User.setOwner(options, function (err){
      if (err) return res.serverError()

      return res.ok()
    });
  },

  attachDefaultRole: function( req, res ){
    const options = {user: req.param('id')};

    User.attachDefaultRole(options, function(err){
      if (err) return res.serverError()

      return res.ok()
    });
  },

};
