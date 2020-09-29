const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members===null || members === undefined) {
    return false;
  }

  let firstLetters = '';
  for (let i = 0; i<members.length; i++){
      let arg = members[i];
      if(typeof(arg) === 'string' && arg.trim()!==''){
        firstLetters+=arg.trim().slice(0,1).toLocaleUpperCase();
      }
  }

  return firstLetters
      .split('')
      .sort()
      .join('');
}