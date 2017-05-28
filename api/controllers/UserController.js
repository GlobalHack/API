module.exports = {

  signUp: function(req, res){
    const options = {user: req.param('id')};
    User.setOwner(options, function (err){
      if (err) return res.serverError()
    });
    User.attachDefaultRole(options, function(err){
      if (err) return res.serverError()
    });
    return res.ok(200, options)
  },
};
