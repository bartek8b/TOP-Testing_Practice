export function reverseString(word) {
  let array = word.split('');
  let output = '';

  for (let i = array.length - 1; i >= 0; i--) {
    output += array[i];
  }

  return output;
}
