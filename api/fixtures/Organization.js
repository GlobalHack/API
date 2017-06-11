var createOrganization = function (id, name, address, zip, phone, type, restrictions, notes) {
  return {
    id: id,
    name: name,
    address: address,
    zip: zip,
    phone: phone,
    type: type,
    restrictions: restrictions,
    notes: notes
  };
};

var fixtures = [
  createOrganization(1, 'Biddle House Opportunities Center', '1212 N 13th St.', '63101', '314-802-0700', 'Shelter+', 'Men only', 'Overnight shelter, men only. Meals daily, showers, laundry, mail.'),
  createOrganization(2, 'Covenant House', '2727 North Kingshighway', '63113', '314-533-2241', 'Shelter+', 'Men only', 'Overnight shelter, youth only. Foold clothing blankets, showers, laundry.'),
  createOrganization(3, 'Peter & Paul Community Services', '1919 S 7th St.', '63104', '314-588-7111', 'Shelter+', 'Youth', 'Overnight shelter, men only. Meals daily, showers, laundry, mail.'),
  createOrganization(4, 'Salvation Army Adult Rehab Center', '3949 Forest Park Ave', '63108', '314-678-5500', 'Addiction Services', '', 'Residential addiction treatment'),
  createOrganization(5, 'Stepping Into the Light', '1402 Herbert', '63107', '314-231-5175', 'Addiction Services', '', '90 day resident treament program for drug and alcohol abuse'),
  createOrganization(6, 'Sunshine Ministries', '1315 Howard St.', '63106', '314-231-8209', 'Shelter', '', 'Overnight Shelter'),
  createOrganization(7, 'Haven of Grace', '1225 Warren St.', '63106', '314-621-6507', 'Shelter+', 'Pregnant Women', 'Overnight Shelter'),
  createOrganization(8, 'Karen House', '1840 Hogan St.', '63106', '314-621-4502', 'Shelter', 'Women and Children', 'Overnight Shelter'),
  createOrganization(9, 'Kathy Weinman Center', 'P.O.Box 31171', '63131', '314-423-1117', 'Shelter', 'DV Women and Children', 'Shelter for abused women and children, no address listed for security reasons.'),
  createOrganization(10, 'Loaves and Fishes', '2750 McKelvey Rd.', '63043', '314-291-3857', 'Shelter+', 'Women and Children', '30 day shelter for women and children plus other services'),
  createOrganization(11, 'Lydia\'s House', 'P.O. Box 2722', '63116', '314-771-4411', 'Shelter', 'DV Women and Children', 'Shelter for abused women and children, no address listed for security reasons.'),
  createOrganization(12, 'Missionaries of Charity', '3629 Cottage Ave.', '63113', '314-533-2777', 'Shelter', 'Women and Children', 'Overnight Shelter'),
  createOrganization(13, 'Opal\'s House', 'P.O. Box 2316', '62202', '877-6725482', 'Shelter', 'DV Women and Children', 'Shelter for abused women and children, no address listed for security reasons.'),
  createOrganization(14, 'Out Lady\'s Inn', '4223 S. Compton', '63111', '314-351-4590', 'Shelter+', 'Pregnant Women'),
  createOrganization(15, 'Places for People', '4130 Lindell Blvd.', '63108', '314-535-5600', 'Shelter', 'Mentally ill adults'),
  createOrganization(16, 'Queen of Peace Cathedral Tower', '325 N. Newstead', '63108', '314-531-0511', 'Addiction Services', 'Women only'),
  createOrganization(17, 'Room at the Inn', '3415 Bridgeland Dr.', '63044', '314-209-9198', 'Shelter', 'Women and children'),
  createOrganization(18, 'Salvation Army Family Haven', '10740 West Page Ave.', '63132', '314-423-7770', 'Shelter', 'Families only'),
  createOrganization(19, 'St. Martha\'s Hall', 'P.O. Box 4950', '63108', '314-533-1313', 'DV Women and Children', 'Shelter for abused women and children, no address listed for security reasons.'),
  createOrganization(20, 'St. Patrick Partnership Center', '800 N Tucker', '63101', '314-802-0700', 'Shelter+', '', 'Beds only for mentally ill women'),
  createOrganization(21, 'St. Phillipine Emergency Shelter', '1015 Goodfellow', '63112', '314-454-1012', 'Shelter', 'Former addicts', 'Only those who have goe through Queen of Peace drug rehab'),
  createOrganization(22, 'Weinman Center', 'P.O.Box 31171', '63131', '314-423-1117', 'Shelter+', 'Women and Children', 'Emergency Shelter, court advocacy, professional therapy, support groups.'),
  createOrganization(23, 'Women\'s Safe House', 'P.O. Box 63010', '63163', '314-772-4535', 'Shelter', 'DV Women and Children', 'Shelter for abused women and children, no address listed for security reasons.'),
];

module.exports = {
  fixtures: fixtures
};
