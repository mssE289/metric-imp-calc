function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.match(/[.\d\/]+/g) || ["1"];
    result = result[0];

    // Check for fractions
    if (result.includes('/')) {
      let nums = result.split('/');
      if (nums.length !== 2) {
        return null;
      }
      result = parseFloat(nums[0]) / parseFloat(nums[1]);
    }

    return parseFloat(result);
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[a-zA-Z]+/g);
    if (result) {
      result = result[0].toLowerCase();
      const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      if (validUnits.includes(result)) {
        return result === 'l' ? 'L' : result;
      }
    }
    return null;
  };
  
  this.getReturnUnit = function(initUnit) {
    const units = {
      'gal': 'L',
      'L': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs'
    };
    return units[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const units = {
      'gal': 'gallons',
      'L': 'liters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms'
    };
    return units[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }
    
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
