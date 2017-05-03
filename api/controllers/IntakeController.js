var actionUtil = require('../services/actionService');
var intakeAnswerFormatService = require('../services/IntakeAnswerFormatService');
var json2csv = require('json2csv');
var moment = require('moment');

module.exports = {

  get: function (req, res) {
    Answer.find({intake: actionUtil.parsePk(req)}).populate('question').exec(
      function (err, answers) {
        return res.send(err ? err : intakeAnswerFormatService.format(answers));
      }
    );
  },

  csv: function (req, res) {
    Intake.find().populate('consumer').populate('employee').exec(function (err, list) {
      if (err) console.log(err);
      // Send a CSV response
      var config = {
        data: list
      };

      json2csv(config, function (err, csv) {
        if (err) console.log(err);
        var filename = "report-" + moment().format("YYYY-MM-DD") + ".csv";
        res.attachment(filename);
        res.end(csv, 'UTF-8');
      });
    });
  }

};
