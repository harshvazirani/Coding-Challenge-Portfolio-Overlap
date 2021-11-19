const { funds } = require("./data/stock_data.json"); //import fund data from json file. funds is an array.

//To map fund name with it's index in the funds array
const fund_map = new Map();
for (let i = 0; i < funds.length; i++) {
  fund_map.set(funds[i].name, i);
}

//for commands of type "CALCULATE_OVERLAP"
function calculateOverlap(portfolio, fund2) {
  if (fund_map.get(fund2) === undefined) {
    console.log("FUND_NOT_FOUND");
    return "FUND_NOT_FOUND";
  }

  const values = [];
  for (let fund1 of portfolio) {
    const stocks1 = funds[fund_map.get(fund1)].stocks;
    const stocks2 = funds[fund_map.get(fund2)].stocks;
    const total = stocks1.length + stocks2.length;
    let common = 0;
    for (let stock of stocks1) if (stocks2.includes(stock)) common += 2;

    const overlap = ((common / total) * 100).toFixed(2);
    console.log(fund2, fund1, overlap + "%");
    values.push(overlap); //For testing
  }
  return values;
}

//for commands of type "ADD_STOCK"
function addStock(fund, stock) {
  if (fund_map.get(fund) === undefined) {
    console.log("FUND_NOT_FOUND");
    return "FUND_NOT_FOUND";
  }

  funds[fund_map.get(fund)].stocks.push(stock);
  return funds[fund_map.get(fund)]; //for testing
}

module.exports = { calculateOverlap, addStock };
