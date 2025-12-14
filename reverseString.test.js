import { reverseString } from './reverseString';

test('odin to nido', () => {
  expect(reverseString('odin')).toBe('nido');
});

test('o to o', () => {
  expect(reverseString('o')).toBe('o');
});

test('emptyStr to emptyStr', () => {
  expect(reverseString('')).toBe('');
});
