const readline = require('readline');
const { converterListaNumerica } = require('./entradaNumerica');
const quicksort = require('../../funcoes/quicksort');

function main() {
    const interfaceLeitura = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    interfaceLeitura.question('Digite os números do array separados por vírgula (ex: 34, 7, 23, 32, 5, 62): ', (entrada) => {
        try {
            const numeros = converterListaNumerica(entrada);
            console.log(`\nArray original: [${numeros.join(', ')}]`);
            console.log(`Array ordenado: [${quicksort(numeros).join(', ')}]`);
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

module.exports = quicksort;
