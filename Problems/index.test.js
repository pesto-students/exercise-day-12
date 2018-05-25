const {
  braces,
  duplicate,
  doesEndWith,
  isEmpty,
  isomorphic,
} = require('./');

describe('1 Braces / Brackets / Parentheses', () => {
  test('should tell correctly whether braces opened and closed properly', () => {
    expect(braces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(true);
    expect(braces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}')).toBe(false);
    expect(braces('for(i=0;i<x[[i];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(false);
    expect(braces('for(i=0;i<x[i];i++){if(x[i]<10{b++;}else{b+=10;}}')).toBe(false);
    expect(braces('for[(i=0;i<xi];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(false);
    expect(braces('for(i=0;i<x[i];i++)({ifx[i]<10){b++;}else{b+=10;}}')).toBe(false);
  });
});

describe('2 Largest duplicate count', () => {
  test('should get the correct number of duplicates', () => {
    expect(duplicate('qwertyuiopasdfghjkl')).toBe(false);
    expect(duplicate('asdfghjklqwerftyuiop')).toBe(2);
    expect(duplicate('asyfghjklqyerftyuiop')).toBe(3);
    expect(duplicate('psyfpghjklqerftyupiop')).toBe(4);
  });
});

describe('2 doesEndWith', () => {
  it('should return true when a string ends with the provided value', () => {
    expect(doesEndWith('c', 'abc')).toBe(true);
  });

  it('should return true when a long string ends with the provided value', () => {
    expect(doesEndWith('ology', 'astrology')).toBe(true);
  });

  it('should return false when a string does not end with the provided value', () => {
    expect(doesEndWith('b', 'abc')).toBe(false);
  });

  it('should return false when a long string does not end with the provided value', () => {
    expect(doesEndWith('olog', 'astrology')).toBe(false);
  });

  it('should return true when an array ends with the provided value', () => {
    expect(doesEndWith(['c'], ['a', 'b', 'c'])).toBe(true);
  });

  it('should return true when an array ends with the provided values', () => {
    expect(doesEndWith(['b', 'c'], ['a', 'b', 'c'])).toBe(true);
  });

  it('should return false when an array does not end with the provided value', () => {
    expect(doesEndWith(['b'], ['a', 'b', 'c'])).toBe(false);
  });

  it('should return false when an array does not end with the provided values', () => {
    expect(doesEndWith(['a', 'b'], ['a', 'b', 'c'])).toBe(false);
  });
});

describe('4 isEmpty', () => {
  it('returns false for null', () => {
    expect(isEmpty(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isEmpty(undefined)).toBe(false);
  });

  it('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(' ')).toBe(false);
  });

  it('returns true for empty array', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([[]])).toBe(false);
  });

  it('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ x: 0 })).toBe(false);
  });

  it('returns true for empty arguments object', () => {
    expect(isEmpty(((...args) => args)()), true);
    expect(isEmpty(((...args) => args)(0)), false);
  });

  it('returns false for every other value', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(NaN)).toBe(false);
    expect(isEmpty([''])).toBe(false);
  });
});

describe('5 Isomorphic Strings', () => {
  test('should correctly check for isomorphic strings', () => {
    expect(isomorphic(['egg', 'add'])).toBe(true);
    expect(isomorphic(['foo', 'bar'])).toBe(false);
    expect(isomorphic(['asdfghjkl', 'qwertyuio'])).toBe(true);
    expect(isomorphic(['asdfgsjkl', 'qwertyuio'])).toBe(false);
    expect(isomorphic(['better', 'fetter'])).toBe(true);
    expect(isomorphic(['less', 'fast'])).toBe(false);
    expect(isomorphic(['it', 'odd'])).toBe(false);
  });
});
