// @ts-check


/**
 * Algoritmo de conversão de decimal para qualquer base entre 2 e 36;
 * @param {number} decimalNum Número a ser convertido;
 * @param {number} base Base numérica para a conversão;
 * @returns {string} string contendo o valor em binário;
 */

function baseConverter(decimalNum, base) {
    const Stack = require('../data-structures/stack');
    const remStack = new Stack();
    let number = decimalNum
    let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let baseString = '';

    if (base < 2 || base > 36) {
        return '';
    }

    while (number > 0) {
        let rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

module.exports = baseConverter;