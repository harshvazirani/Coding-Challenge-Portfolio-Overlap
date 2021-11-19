const {Investor} = require('../logic') 
const investor = new Investor(['SBI_LARGE_&_MIDCAP'])

const assert = require('assert');
  describe('calculateOverlap', function() {
    it('should return 100% when same fund is passed', function() {
      const fund = 'SBI_LARGE_&_MIDCAP'
      assert.equal(investor.calculateOverlap(fund), 100);
    });

    it('should return 0%', function() {
      const fund = 'ICICI_PRU_BLUECHIP'
      assert.equal(investor.calculateOverlap(fund), 0);
    });

    it('should return null when fund is not present', function() {
        const fund = 'MIRAE_ASSET_NOTFOUND_BLUECHIP'
        assert.equal(investor.calculateOverlap(fund), null);
      });
  });


  
  describe('addStock', function() {
    it('should return true when everything goes well', function() {
      const fund = 'MIRAE_ASSET_EMERGING_BLUECHIP'
      const stock = 'TCS INC'
      assert.equal(investor.data.addStock(fund, stock), true);
    });

    it('should return false when fund is not present', function() {
        const fund = 'MIRAE_ASSET_NOTFOUND_BLUECHIP'
        const stock = 'TCS INC'
        assert.equal(investor.data.addStock(fund, stock), false);
      });
  });