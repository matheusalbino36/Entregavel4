const mdc = require('../funcoes/mdc');

test('calcula o máximo divisor comum de números positivos', () => {
    expect(mdc(48, 18)).toBe(6);
});

test('considera o valor absoluto e trata zero', () => {
    expect(mdc(-21, 0)).toBe(21);
});

test('rejeita entradas que não sejam inteiros seguros', () => {
    expect(() => mdc(4, 2.5)).toThrow(TypeError);
});
