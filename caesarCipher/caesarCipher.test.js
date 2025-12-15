import { caesarCipher } from './caesarCipher';

test('HeLLo, 3 to KhOOr', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('xyz, 3 to abc', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Hello, World!, 4 to Khoor, Zruog!', () => {
  expect(caesarCipher('Hello, World!', 4)).toBe('Lipps, Asvph!');
});

test('Complex string with digits and special characters', () => {
  expect(caesarCipher('Hello, World! 123', 5)).toBe('Mjqqt, Btwqi! 123');
});

test('String with mixed case, spaces, and punctuation', () => {
  expect(caesarCipher('Secret code: xyz XYZ!', 2)).toBe(
    'Ugetgv eqfg: zab ZAB!',
  );
});
