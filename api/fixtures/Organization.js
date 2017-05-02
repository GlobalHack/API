var createOrganization = function (name, address) {
  return {
    name   : name ? name : faker.random.words(),
    address: address ? address : faker.address.streetAddress()
  };
};

var fixtures = [
  createOrganization("Karen House", "1840 Hogan St. ● Saint Louis, MO 63106"),
  createOrganization("Missionaries of Charity", "3629 Cottage Avenue ● Saint Louis, MO 63113"),
  createOrganization("New Life Evangelistic Center", "1411 Locust St ● St. Louis, MO 63103"),
  createOrganization("Sunshine Ministries Homeless Shelter", "1520 N. 13th St. ● St. Louis, MO 63106"),
  createOrganization("The Bridge – Centenary Church", "1610 Olive St. ● St. Louis, MO 63103"),
  createOrganization("Horizon Club", "202 N. 23rd St. ● St. Louis, MO 63103"),
  createOrganization("St. Patrick Center", "800 N. Tucker Blvd. ● St. Louis, MO 63101"),
  createOrganization("The SPOT", "4169 Laclede Ave., 1st floor ● St. Louis, MO 63108"),
  createOrganization("Gateway 180", "1000 19th St ● St. Louis, MO 63106")
];

module.exports = {
  fixtures: fixtures
};
