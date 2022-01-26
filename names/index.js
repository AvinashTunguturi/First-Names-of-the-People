const list_of_names = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (list_of_names) => {
  const firstNames = getFirstNames(list_of_names);
  return firstNames;
};
module.exports = getPeopleInCity;
