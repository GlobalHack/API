var createPrefix = function (prefix, key) {
  return {
    prefix: prefix
  };
};

var fixtures = [
  createPrefix('Do you have now, have you ever had, or has a healthcare provider ever told you that you have any of the following medical conditions:', 'Wellness')
];

module.exports = {
  fixtures: fixtures
};
