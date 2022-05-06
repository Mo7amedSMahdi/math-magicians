import calculate from './calculate';

describe('calculate tests', () => {
  test('should return an object with result of  3 + 3 = 6', () => {
    let result = calculate({}, '3');
    result = calculate(result, '+');
    result = calculate(result, '3');
    result = calculate(result, '=');
    expect(result.total).toBe('6');
  });

  test('should return an object with result of  3 x 3 = 9', () => {
    let result = calculate({}, '3');
    result = calculate(result, 'x');
    result = calculate(result, '3');
    result = calculate(result, '=');
    expect(result.total).toBe('9');
  });

  test('should return an object with result of  1 - 5 = -4', () => {
    let result = calculate({}, '1');
    result = calculate(result, '-');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('-4');
  });

  test('should return negative number -1 - 2 = -3', () => {
    let result = calculate({}, '1');
    result = calculate(result, '+/-');
    result = calculate(result, '-');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(result.total).toBe('-3');
  });
  test('should return 3', () => {
    let result = calculate({}, '6');
    result = calculate(result, '÷');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(result.total).toBe('3');
  });
});
