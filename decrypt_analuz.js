function decrypt_analuz(leString) {
  let leEndIndex = leString.length - 9;
  let output = leString.split('');
  output = output.slice(0, leEndIndex).reverse().join('');
  return output;
}
