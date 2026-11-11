function quicksort(numeros) {
    if (!Array.isArray(numeros)) {
        throw new TypeError('A entrada deve ser uma lista de números.');
    }

    if (!numeros.every((numero) => Number.isFinite(numero))) {
        throw new TypeError('Todos os elementos devem ser números finitos.');
    }

    const ordenados = [...numeros];
    const pilha = [];

    if (ordenados.length > 1) {
        pilha.push([0, ordenados.length - 1]);
    }

    while (pilha.length > 0) {
        const [inicio, fim] = pilha.pop();
        const pivo = ordenados[Math.floor((inicio + fim) / 2)];
        let esquerda = inicio;
        let direita = fim;

        while (esquerda <= direita) {
            while (ordenados[esquerda] < pivo) {
                esquerda++;
            }
            while (ordenados[direita] > pivo) {
                direita--;
            }

            if (esquerda <= direita) {
                [ordenados[esquerda], ordenados[direita]] = [ordenados[direita], ordenados[esquerda]];
                esquerda++;
                direita--;
            }
        }

        if (inicio < direita) {
            pilha.push([inicio, direita]);
        }
        if (esquerda < fim) {
            pilha.push([esquerda, fim]);
        }
    }

    return ordenados;
}

module.exports = quicksort;
