var createMenuItem = function (text, icon, link) {
  return {
    text: text,
    icon: icon,
    link: link
  };
};

var fixtures = [
  createMenuItem('Consumers', 'Trending flat', '/consumers'),
  createMenuItem('Employees', 'Trending flat', '/employees'),
  createMenuItem('Intakes', 'Trending flat', '/intakes'),
];

module.exports = {
  fixtures: fixtures
};
