import { capitalize } from './capitalize';

test('odin to Odin', () => {
  expect(capitalize('odin')).toBe('Odin');
});

test('o to O', () => {
  expect(capitalize('odin')).toBe('Odin');
});
