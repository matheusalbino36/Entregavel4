function converterListaNumerica(entrada) {
    const partes = entrada.split(',');
    if (partes.some((parte) => parte.trim() === '')) {
        throw new TypeError('Informe números separados por vírgula, sem itens vazios.');
    }

    const numeros = partes.map((parte) => Number(parte.trim()));
    if (!numeros.every((numero) => Number.isFinite(numero))) {
        throw new TypeError('Todos os valores informados devem ser números finitos.');
    }

    return numeros;
}

module.exports = { converterListaNumerica };
