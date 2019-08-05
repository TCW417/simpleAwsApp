const isEven = (val) => {
  return !(val % 2);
};

describe('test for even number', () => {
  it('24 is an even number', () => {
    expect(isEven(24)).toBe(true);
  });
});
