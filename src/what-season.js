const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if(date===undefined){
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date)==='[object Object]'){
    throw Error;
  }
  let n = (date.getMonth()+1)%12;
  if(n>=0 && n<3){
    return 'winter';
  } else if (n>=3 && n<6){
    return 'spring';
  }else if (n>=6 && n<9){
    return 'summer';
  }else {
    return 'autumn';
  }
}