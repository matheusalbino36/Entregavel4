const readline = require('readline');
const { converterListaNumerica } = require('./entradaNumerica');
const contarInteirosNoIntervalo = require('../../funcoes/contagem');

function main() {
    const interfaceLeitura = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    interfaceLeitura.question('Digite o conjunto de dados (números separados por vírgula, ex: 2, 5, 7.5, 3, 10, 1, 4): ', (entradaDados) => {
        interfaceLeitura.question('Digite o valor limite N: ', (entradaLimite) => {
            try {
                if (entradaDados.trim() === '' || entradaLimite.trim() === '') {
                    throw new TypeError('Informe a lista de dados e o limite N.');
                }

                const dados = converterListaNumerica(entradaDados);
                const limite = Number(entradaLimite);
                const total = contarInteirosNoIntervalo(dados, limite);

                console.log(`\nNo conjunto [${dados.join(', ')}], há ${total} valor(es) inteiro(s) entre o 1º elemento (${dados[0]}) e N (${limite}).`);
            } catch (erro) {
                console.log(`Entrada inválida: ${erro.message}`);
            } finally {
                interfaceLeitura.close();
            }
        });
    });
}

if (require.main === module) {
    main();
}

module.exports = contarInteirosNoIntervalo;
