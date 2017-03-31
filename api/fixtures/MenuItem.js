var createMenuItem = function (text, icon, link) {
  return {
    text: text,
    icon: icon,
    link: link
  };
};

var fixtures = [
  createMenuItem('Customers', '', '/customers'),
  createMenuItem('Employees', '', '/employees'),
  createMenuItem('Intakes', '', '/intakes'),
];

module.exports = {
  fixtures: fixtures
};
