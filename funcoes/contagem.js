function contarInteirosNoIntervalo(dados, limite) {
    if (!Array.isArray(dados) || dados.length === 0) {
        throw new TypeError('A lista de dados deve conter pelo menos um número.');
    }

    if (!dados.every((valor) => Number.isFinite(valor))) {
        throw new TypeError('Todos os elementos da lista devem ser números finitos.');
    }

    if (!Number.isFinite(limite)) {
        throw new TypeError('O limite deve ser um número finito.');
    }

    const primeiroValor = dados[0];
    const inicio = Math.min(primeiroValor, limite);
    const fim = Math.max(primeiroValor, limite);

    return dados.filter((valor) => (
        Number.isInteger(valor) && valor >= inicio && valor <= fim
    )).length;
}

module.exports = contarInteirosNoIntervalo;
