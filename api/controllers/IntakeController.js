var actionUtil                = require('../services/actionService');
var intakeAnswerFormatService = require('../services/IntakeAnswerFormatService');
var json2csv                  = require('json2csv');
var moment                    = require('moment');

var flatten = function (data) {
  var result = {};

  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++)
        recurse(cur[i], prop + '[' + i + ']');
      if (l == 0)
        result[prop] = [];
    } else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + '.' + p : p);
      }
      if (isEmpty && prop)
        result[prop] = {};
    }
  }

  recurse(data, '');
  return result;
};

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

      for (var i = 0; i < list.length; i++) {
        list[i] = flatten(list[i]);
      }

      var config = {
        data: list
      };
      json2csv(config, function (err, csv) {
        if (err) console.log(err);
        var filename = 'report-' + moment().format('YYYY-MM-DD') + '.csv';
        res.attachment(filename);
        res.end(csv, 'UTF-8');
      });
    });
  }

};
