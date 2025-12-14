export function caesarCipher(word, factor) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let output = '';

  // Safeguard if factor is higher than apha length
  factor = factor % alpha.length;

  const array = word.split('');

  for (let char of array) {
    //Check if char is not a letter
    if (alpha.indexOf(char.toLowerCase()) === -1) {
      output += char;
      continue;
    }
  }

  function isLowerCase(char) {
    return char === char.toLowerCase() && char !== char.toUpperCase();
  }

  function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
  }

  return output;
}
