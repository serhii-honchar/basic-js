const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let result = {};
    let turns = (Math.pow(2, disksNumber) - 1);
    let seconds = turns*3600 /(turnsSpeed);
    result.turns = turns;
    result.seconds = Math.floor(seconds);
    return result;
};
