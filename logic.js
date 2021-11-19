const { funds } = require("./data/stock_data.json");

class Data {
  constructor(funds) {
    this.funds = funds;
    this.map = new Map();
    for (let i = 0; i < funds.length; i++) {
      this.map.set(funds[i].name, i);
    }
  }

  getFund(fund) {
    if (this.map.get(fund) === undefined) {
      return null;
    }
    return this.funds[this.map.get(fund)];
  }

  getStocks(fund) {
    if (this.getFund(fund)) return this.getFund(fund).stocks;
    else return null;
  }

  addStock(fund, stock) {
    if (this.getStocks(fund)) {
      this.getStocks(fund).push(stock);
      return true;
    } else {
      console.log("FUND_NOT_FOUND")
      return false;}
  }
}

class Investor {
  constructor(portfolio) {
    this.data = new Data(funds);
    this.portfolio = portfolio;
  }

  calculateOverlap(newfund) {
    const new_stocks = this.data.getStocks(newfund);
    if(new_stocks === null) {
      console.log("FUND_NOT_FOUND")
      return null
    }
    const overlaps = [];
    for (let fund of this.portfolio) {
      const current_stocks = this.data.getStocks(fund);

      let common = 0;
      let total = current_stocks.length + new_stocks.length;
      for (let stock of current_stocks)
        if (new_stocks.includes(stock)) common++;

      const overlap = (((2 * common) / total) * 100).toFixed(2);
      if (overlap > 0) console.log(newfund, fund, overlap + "%");
      overlaps.push(overlap);
       
    }
    return overlaps;
  }
}

module.exports = { Investor };
