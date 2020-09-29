const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let strArg = '' + str;
    let addition = '' + options.addition;
    let separator = options.separator === undefined ? '+' : options.separator;
    let additionalSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
    let additionRepeatTimes = options.additionRepeatTimes === undefined ? 0 : options.additionRepeatTimes;
    let repeatTimes = options.repeatTimes === undefined ? 0 : options.repeatTimes;

    let additionResult = '';
    if (additionRepeatTimes === 0 && addition !=='undefined') {
        additionResult = additionResult + addition;
    } else {
        for (let j = 0; j < additionRepeatTimes; j++) {
            if (j === additionRepeatTimes - 1) {
                additionResult = additionResult + addition;
            } else {
                additionResult = additionResult + addition + additionalSeparator;
            }
        }
    }

    let result = '';
    if (repeatTimes === 0) {
        result=strArg + additionResult;
    } else {
        for (let i = 0; i < repeatTimes; i++) {
            if (i === repeatTimes - 1) {
                result = result + strArg + additionResult;
            } else {
                result = result + strArg + additionResult + separator;
            }
        }
    }
    return result;


};

