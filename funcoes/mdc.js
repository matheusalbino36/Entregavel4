function mdc(primeiroNumero, segundoNumero) {
    if (!Number.isSafeInteger(primeiroNumero) || !Number.isSafeInteger(segundoNumero)) {
        throw new TypeError('Os dois valores devem ser inteiros seguros.');
    }

    let dividendo = Math.abs(primeiroNumero);
    let divisor = Math.abs(segundoNumero);

    while (divisor !== 0) {
        const resto = dividendo % divisor;
        dividendo = divisor;
        divisor = resto;
    }

    return dividendo;
}

module.exports = mdc;
