module.exports = {

  format: function (answers) {
    var questionnaireState = {};
    for (var key in answers) {
      questionnaireState[answers[key].question.key] = answers[key].answer;
    }
    return questionnaireState;
  }

};
