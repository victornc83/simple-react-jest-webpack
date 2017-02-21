const sum = (a, b) => a + b;

describe('function sum', () => {
  test('Sum 1 + 2, should equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
