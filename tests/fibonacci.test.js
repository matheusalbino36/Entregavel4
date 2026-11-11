const fibonacci = require('../funcoes/fibonacci');

test('gera os primeiros termos da sequência', () => {
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});

test('retorna uma lista vazia quando zero termos são solicitados', () => {
    expect(fibonacci(0)).toEqual([]);
});

test('rejeita quantidade fracionária ou negativa', () => {
    expect(() => fibonacci(2.5)).toThrow(TypeError);
    expect(() => fibonacci(-1)).toThrow(TypeError);
});
