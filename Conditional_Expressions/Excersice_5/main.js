function calculateSum() {
  const number = parseInt(document.getElementById('number').value);
  let sum = 0;

  if (number > 0 && Number.isInteger(number)) {
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    document.getElementById('result').innerHTML = 'The sum of natural ' +
      'numbers up to ' + number + ' is: ' + sum;
  } else {
    document.getElementById('result').innerHTML = 'Please enter ' +
      'a positive integer.';
  }
}
