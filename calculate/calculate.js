export function sum(a, b) {
  return a + b;
}

export function substract(a, b) {
  return a - b;
}

export function divide(a, b) {
  if (b === 0) return NaN;
  return a / b;
}

export function multiply(a, b) {
  if (b === 0) return NaN;
  return a * b;
}