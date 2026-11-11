const contarInteirosNoIntervalo = require('../funcoes/contagem');

test('conta os valores inteiros no intervalo inclusivo entre primeiro valor e limite', () => {
    expect(contarInteirosNoIntervalo([2, 5, 7.5, 3, 10, 1, 4], 6)).toBe(4);
});

test('conta corretamente quando o limite é menor que o primeiro valor', () => {
    expect(contarInteirosNoIntervalo([8, 6, 4, 7.5, 3], 5)).toBe(2);
});

test('rejeita lista vazia e limite não finito', () => {
    expect(() => contarInteirosNoIntervalo([], 5)).toThrow(TypeError);
    expect(() => contarInteirosNoIntervalo([1], Number.NaN)).toThrow(TypeError);
});
