function sortArray(numbers, order) {
  if (order === 'asc') {
    return numbers.slice().sort(function(a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    return numbers.slice().sort(function(a, b) {
      return b - a;
    });
  } else {
    return numbers.slice();
  }
}

const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
