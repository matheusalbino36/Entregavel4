const readline = require('readline');
const mdc = require('../../funcoes/mdc');

function main() {
    const interfaceLeitura = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    interfaceLeitura.question('Digite o primeiro número inteiro (a): ', (entradaA) => {
        interfaceLeitura.question('Digite o segundo número inteiro (b): ', (entradaB) => {
            try {
                if (entradaA.trim() === '' || entradaB.trim() === '') {
                    throw new TypeError('Informe dois números inteiros.');
                }

                const numeroA = Number(entradaA);
                const numeroB = Number(entradaB);
                console.log(`O Máximo Divisor Comum (MDC) entre ${numeroA} e ${numeroB} é: ${mdc(numeroA, numeroB)}`);
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

module.exports = mdc;
