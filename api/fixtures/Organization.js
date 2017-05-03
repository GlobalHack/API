var createOrganization = function (id, name, address) {
  return {
    id: id,
    name   : name ? name : faker.random.words(),
    address: address ? address : faker.address.streetAddress()
  };
};

var fixtures = [
  createOrganization(1, "Karen House", "1840 Hogan St. ● Saint Louis, MO 63106"),
  createOrganization(2, "Missionaries of Charity", "3629 Cottage Avenue ● Saint Louis, MO 63113"),
  createOrganization(3, "New Life Evangelistic Center", "1411 Locust St ● St. Louis, MO 63103"),
  createOrganization(4, "Sunshine Ministries Homeless Shelter", "1520 N. 13th St. ● St. Louis, MO 63106"),
  createOrganization(5, "The Bridge – Centenary Church", "1610 Olive St. ● St. Louis, MO 63103"),
  createOrganization(6, "Horizon Club", "202 N. 23rd St. ● St. Louis, MO 63103"),
  createOrganization(7, "St. Patrick Center", "800 N. Tucker Blvd. ● St. Louis, MO 63101"),
  createOrganization(8, "The SPOT", "4169 Laclede Ave., 1st floor ● St. Louis, MO 63108"),
  createOrganization(9, "Gateway 180", "1000 19th St ● St. Louis, MO 63106")
];

module.exports = {
  fixtures: fixtures
};
