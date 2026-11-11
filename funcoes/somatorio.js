function somatorio(numeros) {
    if (!Array.isArray(numeros)) {
        throw new TypeError('A entrada deve ser uma lista de números.');
    }

    if (!numeros.every((numero) => Number.isFinite(numero))) {
        throw new TypeError('Todos os elementos devem ser números finitos.');
    }

    return numeros.reduce((total, numero) => total + numero, 0);
}

module.exports = somatorio;
