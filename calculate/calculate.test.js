import { sum } from './calculate';
import { substract } from './calculate';
import { divide } from './calculate';
import { multiply } from './calculate';

// Sum

test('1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('-1 + -2 to equal -3', () => {
  expect(sum(-1, -2)).toBe(-3);
});

test('1 + -2 to equal -1', () => {
  expect(sum(1, -2)).toBe(-1);
});

// Substract

test('1 - 2 to equal -1', () => {
  expect(substract(1, 2)).toBe(-1);
});

test('0 - 0 to equal 0', () => {
  expect(substract(0, 0)).toBe(0);
});

test('-1 - (-2) to equal 1', () => {
  expect(substract(-1, -2)).toBe(1);
});

test('1 - (-2) to equal 3', () => {
  expect(substract(1, -2)).toBe(3);
});

// Divide

test('1 / 0 to be NaN', () => {
  expect(divide(1, 0)).toBe(NaN);
});

test('1 / 2 to equal 0.5', () => {
  expect(divide(1, 2)).toBe(0.5);
});

test('1 / 2 to equal 0.5', () => {
  expect(divide(1, 2)).toBe(0.5);
});

test('6 / -2 to equal -3', () => {
  expect(divide(6, -2)).toBe(-3);
});

// Multiply

test('1 * 0 to be NaN', () => {
  expect(multiply(1, 0)).toBe(NaN);
});

test('0.5 * 7 to equal 3.5', () => {
  expect(multiply(0.5, 7)).toBe(3.5);
});

test('-3 * 5 to equal -15', () => {
  expect(multiply(-3, 5)).toBe(-15);
});

test('-3 * -2 to equal 6', () => {
  expect(multiply(-3, -2)).toBe(6);
});
