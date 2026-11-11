const somatorio = require('../funcoes/somatorio');

test('soma valores inteiros e decimais', () => {
    expect(somatorio([1, 2.5, 3])).toBe(6.5);
});

test('retorna zero para uma lista vazia', () => {
    expect(somatorio([])).toBe(0);
});

test('rejeita valores não finitos', () => {
    expect(() => somatorio([1, Number.NaN])).toThrow(TypeError);
});
