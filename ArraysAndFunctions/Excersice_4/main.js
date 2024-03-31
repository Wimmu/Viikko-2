function sortArray(numbers) {
  const sortedArray = numbers.slice().sort(function(a, b) {
    return a - b;
  });
  return sortedArray;
}

const numbersArray = [5, 12, 8, 3, 10];

console.log('Original Array:', numbersArray);

const sortedNumbers = sortArray(numbersArray);
console.log('Sorted Array:', sortedNumbers);
