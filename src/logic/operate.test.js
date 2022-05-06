import operate from './operate';

describe('operate tests', () => {
  test('should add 10 + 10', () => {
    const result = operate(10, 10, '+');
    expect(result).toBe('20');
  });
  test('should multiply 10 x 10', () => {
    const result = operate(10, 10, 'x');
    expect(result).toBe('100');
  });
  test('should divide 10 / 10', () => {
    const result = operate(20, 10, '÷');
    expect(result).toBe('2');
  });
  test('should mode 10 % 5 return 0', () => {
    const result = operate(10, 5, '%');
    expect(result).toBe('0');
  });

  test('should substract 70 - 20', () => {
    const result = operate(70, 20, '-');
    expect(result).toBe('50');
  });
  test('should divide 9 by 3', () => {
    const result = operate(9, 3, '÷');
    expect(result).toBe('3');
  });
});
