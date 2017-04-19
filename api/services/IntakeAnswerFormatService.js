var _ = require('lodash');
var keyBy = require('lodash.keyby');

function cleanAnswer(answer) {
  return {
    'key'    : answer.question.key,
    'value'  : answer.answer
  };
}

module.exports = {

  format: function (answers) {
    return keyBy(_.map(answers, cleanAnswer), 'key');
  }

};
