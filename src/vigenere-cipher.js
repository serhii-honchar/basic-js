const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw Error;
        }
        let m = message.toUpperCase();
        let k = key.toUpperCase();
        let result = '';
        let base = 'A'.charCodeAt(0);
        let j=0;
        if (this.type) {
            for (let i = 0; i < message.length; i++) {
                if (m[i].toUpperCase().match(RegExp('[A-Z]'))) {
                    let s = m[i].charCodeAt(0);
                    let kc = k[j%k.length].charCodeAt(0);
                    let cifr = ((s + kc) % 26) + base;
                    result = result + String.fromCharCode(cifr);
                    j++;
                } else {
                    result = result + m[i];
                }
            }
        } else {
            for (let i = message.length - 1; i >= 0; i--) {
                if (m[i].toUpperCase().match(RegExp('[A-Z]'))) {
                    let s = m[i].charCodeAt(0);
                    let kc = k[j%k.length].charCodeAt(0);
                    let cifr = ((s + kc) % 26) + base;
                    result = result + String.fromCharCode(cifr);
                    j++;
                } else {
                    result = result + m[i];
                }
            }
        }
        return result;
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw Error;
        }
        let m = message.toUpperCase();
        let k = key.toUpperCase();
        let result = '';
        let base = 'A'.charCodeAt(0);
        let j=0;

        if (this.type) {
            for (let i = 0; i < m.length; i++) {
                if (m[i].toUpperCase().match(RegExp('[A-Z]'))) {
                    let s = m[i].charCodeAt(0);
                    let kc = k[j%k.length].charCodeAt(0);
                    let decr = ((s - kc+26) % 26) + base;
                    result = result + String.fromCharCode(decr);
                    j++;
                } else {
                    result = result + m[i];
                }
            }
        } else {
            for (let i = message.length - 1; i >= 0; i--) {
                if (m[i].toUpperCase().match(RegExp('[A-Z]'))) {
                    let s = m[i].charCodeAt(0);
                    let kc = k[j%k.length].charCodeAt(0);
                    let cifr = ((s - kc+26) % 26) + base;
                    result = result + String.fromCharCode(cifr);
                    j++;
                } else {
                    result = result + m[i];
                }
            }
        }
        return result;
    }

    constructor(type) {
        if (type === false) {
            this.type = type;
        } else {
            this.type = true;
        }
    }
}

module.exports = VigenereCipheringMachine;
