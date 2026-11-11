const ehPrimo = require('../funcoes/numeroprimo');

test('número primo deve retornar verdadeiro', () => {
    expect(ehPrimo(13)).toBe(true);
});

test('número composto deve retornar falso', () => {
    expect(ehPrimo(12)).toBe(false);
});

test('valores menores que 2 não são primos', () => {
    expect(ehPrimo(1)).toBe(false);
});

test('rejeita entrada que não seja um inteiro seguro', () => {
    expect(() => ehPrimo(2.5)).toThrow(TypeError);
});
