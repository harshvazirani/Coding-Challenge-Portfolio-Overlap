const {calculateOverlap, addStock} = require('../logic') //Command handling logic

const assert = require('assert');
  describe('calculateOverlap', function() {
    it('should return 100% when same fund is passed', function() {
      const portfolio = ['MIRAE_ASSET_EMERGING_BLUECHIP']
      const fund = 'MIRAE_ASSET_EMERGING_BLUECHIP'
      assert.equal(calculateOverlap(portfolio, fund), 100);
    });

    it('should return FUND_NOT_FOUND when fund is not present', function() {
        const portfolio = ['MIRAE_ASSET_EMERGING_BLUECHIP']
        const fund = 'MIRAE_ASSET_NOTFOUND_BLUECHIP'
        assert.equal(calculateOverlap(portfolio, fund), "FUND_NOT_FOUND");
      });
  });


  
  describe('addStock', function() {
    it('returned array should contain stock', function() {
      const fund = 'MIRAE_ASSET_EMERGING_BLUECHIP'
      const stock = 'TCS INC'
      assert.equal(addStock(fund, stock).stocks.includes('TCS INC'), true);
    });

    it('should return FUND_NOT_FOUND when fund is not present', function() {
        const fund = 'MIRAE_ASSET_NOTFOUND_BLUECHIP'
        const stock = 'TCS INC'
        assert.equal(addStock(fund, stock), "FUND_NOT_FOUND");
      });
  });