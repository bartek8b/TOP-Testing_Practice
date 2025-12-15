export function caesarCipher(word, factor) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let output = '';

  // Safeguard if factor is higher than apha length
  factor = factor % alpha.length;

  const array = word.split('');

  for (let char of array) {
    output += encrypt(char);
  }

  return output;

  function isLowerCase(char) {
    return char === char.toLowerCase() && char !== char.toUpperCase();
  }

  function encrypt(char) {
    //Check if char is not a letter
    if (alpha.indexOf(char.toLowerCase()) === -1) {
      return char;
    }

    let encrIdx = alpha.indexOf(char.toLowerCase()) + factor;

    //Check if encrypted index wraps alphabet
    if (encrIdx >= alpha.length) encrIdx = encrIdx - alpha.length;

    return isLowerCase(char) ? alpha[encrIdx] : alpha[encrIdx].toUpperCase();
  }
}
