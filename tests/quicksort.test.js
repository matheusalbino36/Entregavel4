const quicksort = require('../funcoes/quicksort');

test('ordena valores e mantém a lista original', () => {
    const entrada = [5, -2, 5, 1, 0];

    expect(quicksort(entrada)).toEqual([-2, 0, 1, 5, 5]);
    expect(entrada).toEqual([5, -2, 5, 1, 0]);
});

test('ordena corretamente uma lista já ordenada', () => {
    expect(quicksort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test('rejeita valores que não sejam números finitos', () => {
    expect(() => quicksort([1, Number.POSITIVE_INFINITY])).toThrow(TypeError);
});
