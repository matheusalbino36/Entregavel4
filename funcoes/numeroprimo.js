function ehPrimo(numero) {
    if (!Number.isSafeInteger(numero)) {
        throw new TypeError('O número deve ser um inteiro seguro.');
    }

    if (numero <= 1) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }

    return true;
}

module.exports = ehPrimo;
