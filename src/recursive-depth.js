const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.length === 0) {
            return 1;
        }
        let maxDepth = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                let currentDepth = this.calculateDepth(arr[i]);
                if(currentDepth>maxDepth){
                  maxDepth=currentDepth;
                }
            }
        }
        return maxDepth+1;
    }
};