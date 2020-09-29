const CustomError = require("../extensions/custom-error");

const chainMaker = {
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (this.chain === undefined) {
            this.chain = [];
        }
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if (this.chain[position] === undefined) {
            this.chain=[];
            throw Error;
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        if (this.chain === undefined) {
            this.chain = [];
        }
        this.chain = this.chain.reverse();
        return this;
    },
    finishChain() {
        let result = '';
        if (this.getLength() === 1) {
            result= '( ' + this.chain[0] + ' )'
        } else {
            let first = '( ' + this.chain[0] + ' )~';
            let last = '~( ' + this.chain[this.getLength() - 1] + ' )';

            if (this.getLength() === 2) {
                result= first + last;
            } else {
                result= first + this.chain.slice(1, -1).map(x => '~( ' + x + ' )~').join('') + last;
            }

        }
        this.chain=[];
        return result;
    }
};

module.exports = chainMaker;
