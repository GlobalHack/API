var actionUtil = require('../services/actionService');
var schemaFormService = require('../services/SchemaFormService');

module.exports = {

  schemaform: function (req, res) {
    QuestionSetQuestion.query('SELECT key, title, help, type, required, widget FROM coordinated_entry_system.question INNER JOIN organization_information.questionsetquestion ON coordinated_entry_system.question.id = organization_information.questionsetquestion.question WHERE organization_information.questionsetquestion.questionset = $1',
      [actionUtil.parsePk(req)],
      function (err, ans) {
        return res.send(err?err:schemaFormService.getSchemaForm(ans.rows));
      }
    );
  }

};
