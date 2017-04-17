function create(user, callback) {
  console.log("create");

  var token = jwt.sign({
    aud: configuration.REACT_APP_AUTH0CLIENTID,
    iss: configuration.REACT_APP_AUTH0DOMAIN
  }, configuration.USER_API_SECRET);

  bcrypt.hash(user.password, 10, function (err, hashedPassword) {

    var postBodyUser = {
      email: user.email,
      nickName: user.email.split('@')[0].split('.').join(' '),
      password: hashedPassword,
      firstName: user.user_metadata.first_name,
      lastName:  user.user_metadata.last_name,
      emailVerified: false
    };

    var postOptions = {
      method: 'POST',
      url: 'http://dev.cemaritan.com/api/users/',
      body: JSON.stringify(postBodyUser),
      headers: {
        'authorization': 'Bearer ' + token
      }
    };

    function cb(error, response, body) {
      if (error || response.statusCode !== 200){
        callback(error);
      } else {
        console.log(body);
        user.profile_id = body;
        callback(null, user, context);
      }
    }

    request(postOptions, cb);
  });
}
