const { sumar, restar, multiplicar } = require('./calculator');

describe('Pruebas de Calculadora', () => {
  test('Suma correcta de dos números', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('Resta correcta de dos números', () => {
    expect(restar(5, 2)).toBe(3);
  });

  test('Multiplicación correcta de dos números', () => {
    expect(multiplicar(4, 3)).toBe(12);
  });
});