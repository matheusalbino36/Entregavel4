function fibonacci(quantidadeTermos) {
    if (!Number.isSafeInteger(quantidadeTermos) || quantidadeTermos < 0) {
        throw new TypeError('A quantidade de termos deve ser um inteiro seguro não negativo.');
    }

    const termos = [];
    let anterior = 0;
    let atual = 1;

    for (let indice = 0; indice < quantidadeTermos; indice++) {
        termos.push(anterior);
        [anterior, atual] = [atual, anterior + atual];
    }

    return termos;
}

module.exports = fibonacci;
