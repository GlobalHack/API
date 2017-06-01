var _ = require('lodash');
var keyBy = require('lodash.keyby');

function cleanAnswer(answer) {
  return {
    'key'    : answer.question.key,
    'value'  : answer.answer
  };
}

function flatten(answer) {
  return answer.value;
}

module.exports = {

  format: function (answers) {
    var questionnaireState = {};
    for (var key in answers) {
      questionnaireState[answers[key].question.key] = answers[key].answer;
    }
    return questionnaireState
  }

};
