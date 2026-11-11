const readline = require('readline');
const fibonacci = require('../../funcoes/fibonacci');

function main() {
    const interfaceLeitura = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    interfaceLeitura.question('Digite a quantidade de termos N para a sequência de Fibonacci (N >= 0): ', (entrada) => {
        try {
            if (entrada.trim() === '') {
                throw new TypeError('Informe uma quantidade inteira não negativa.');
            }

            const quantidadeTermos = Number(entrada);
            const termos = fibonacci(quantidadeTermos);
            console.log(`Os primeiros ${quantidadeTermos} termos da sequência de Fibonacci são: ${termos.join(', ')}`);
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

module.exports = fibonacci;
