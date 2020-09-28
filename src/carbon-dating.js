const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity===undefined || isNaN(sampleActivity) || !(sampleActivity instanceof String) || parseFloat(sampleActivity)<0){
    return false;
  }
  return Math.ceil(HALF_LIFE_PERIOD / (0.693 / Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))));
}