const CustomError = require("../extensions/custom-error");

module.exports = function countCats(...matrix) {
    let count = 0;
    matrix=matrix[0];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '^^'){
                count += 1;
            }
        }
    }
    return count;
};
