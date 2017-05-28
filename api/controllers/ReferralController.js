var _ = require('lodash')
module.exports = {

  incoming: function(req, res){
    Organization.fromUser(req.user.uid, function(org){
      console.log(org);


      Referral.find({
        where: {
          reciever: org,
        },
        sort: 'referralDate ASC'
      }).populate("client")
      .populate("reciever")
      .populate("owner")
      .exec(function (err, referrals){
        if (err) {
          return res.send(500, err)
        }

        if (! referrals) {
          return res.send(200, [])
        }

        data = _.map(referrals, Referral.mapDataToReferralWidget);
        return res.send(200, data)
      });

    });

  },
  outgoing: function(req, res) {
    Referral.find({
      where: {
        owner: req.user.organization.id,
      },
      sort: 'referralDate ASC'
    }).populate("client")
    .populate("reciever")
    .populate("owner")
    .exec(function (err, referrals){
      if (err) {
        return res.send(500, err)
      }

      if (! referrals) {
        return res.send(200, [])
      }

      data = _.map(referrals, Referral.mapDataToReferralWidget);
      return res.send(200, data)
    });
  }
}
