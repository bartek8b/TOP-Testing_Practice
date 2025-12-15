export function analyzeArray(array) {
  const length = array.length;
  // Average rounded to 2 decimal places
  const average = Number(
    (array.reduce((a, b) => a + b, 0) / array.length).toFixed(2),
  );

  const min = Math.min(...array);
  const max = Math.max(...array);

  return { average, min, max, length };
}
