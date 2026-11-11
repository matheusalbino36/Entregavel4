const readline = require('readline');
const ehPrimo = require('../../funcoes/numeroprimo');

function main() {
    const interfaceLeitura = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    interfaceLeitura.question('Digite um numero inteiro positivo para verificar se e primo: ', (entrada) => {
        try {
            if (entrada.trim() === '') {
                throw new TypeError('Informe um número inteiro.');
            }

            const numero = Number(entrada);
            console.log(ehPrimo(numero)
                ? `${numero} é um número primo!`
                : `${numero} não é um número primo.`);
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

module.exports = ehPrimo;
