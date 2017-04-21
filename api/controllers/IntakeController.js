var actionUtil = require('../services/actionService');
var intakeAnswerFormatService = require('../services/IntakeAnswerFormatService');

module.exports = {

  get: function (req, res) {
    Answer.find({intake: actionUtil.parsePk(req)}).populate('question').exec(
      function (err, answers) {
        return res.send(err ? err : intakeAnswerFormatService.format(answers));
      }
    );
  }

};
