module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    owner: {
      model: 'organization'
    },
    reciever: {
      model: 'organization'
    },
    client: {
      model: 'user'
    },
    referralDate: {
      type: 'date',
      defaultTo: function() {
        return new Date();
      }
    },
    referralStatus: {
      type: 'string',
      enum: ['Arrived', 'Accepted', 'Denied', 'Completed']
    },
    expiresInDays: {
      type: 'integer',
      defaultTo: 7
    },
  },
  mapDataToReferralWidget: function(referral) {
    return {
      'id': referral.id,
      'client_name': referral.client.getName(),
      'date_referred': referral.referralDate,
      'referring_entity': referral.owner,
      'referring_to': referral.reciever,
      'referral_status': referral.referralStatus,
      'notes': []
    }
  }
};
