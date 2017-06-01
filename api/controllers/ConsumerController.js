module.exports = {

  schemaform: function (req, res) {
    return res.send(200, {
      'formId': 'com.cemaritan.app.consumer.create',
      'version': 1,
      'action': [
        {
          'category': 'consumer',
          'name': 'createconsumer',
          'readOnly': false,
          'title': 'Create'
        }
      ],
      'schema': {
        'type': 'object',
        'title': 'Find/Create Consumer',
        'required': [
          'firstName',
          'lastName',
          'ssn',
          'dateOfBirth'
        ],
        'properties': {
          'firstName': {
            'title': 'First Name',
            'type': 'string'
          },
          'lastName': {
            'title': 'Last Name',
            'type': 'string'
          },
          'ssn': {
            'title': 'Social Security Number',
            'type': 'string'
          },
          'dateOfBirth': {
            'title': 'Date Of Birth',
            'type': 'date'
          }
        }
      },
      'form': [
        'firstName',
        'lastName',
        'ssn',
        'dateOfBirth'
      ]
    });
  }

};
