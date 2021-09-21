const ObjectsToCsv = require('objects-to-csv');

const convertToCsv = async (data) => {
  const csv = new ObjectsToCsv(data);
  //   console.log(csv);
  const stringCsv = await csv.toString();
  return stringCsv;
};

module.exports = convertToCsv;
