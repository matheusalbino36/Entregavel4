const readline = require('readline');
const { converterListaNumerica } = require('./entradaNumerica');
const somatorio = require('../../funcoes/somatorio');

function main() {
    const interfaceLeitura = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    interfaceLeitura.question('Digite os números separados por vírgula (ex: 1, 2, 3.5, 4): ', (entrada) => {
        try {
            const numeros = converterListaNumerica(entrada);
            console.log(`O somatório dos números [${numeros.join(', ')}] é: ${somatorio(numeros)}`);
        } catch (erro) {
            console.log(`Entrada inválida: ${erro.message}`);
        } finally {
            interfaceLeitura.close();
        }
    });
}

if (require.main === module) {
    main();
}

module.exports = somatorio;
