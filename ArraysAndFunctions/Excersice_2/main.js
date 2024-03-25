const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = parseInt(prompt('Enter Number ' + (i + 1) + ':'));
  numbers.push(num);
}

console.log('Numbers:', numbers);

const searchNum = parseInt(prompt('Enter a Number to Search:'));
if (numbers.includes(searchNum)) {
  console.log('Number', searchNum, 'is found in the array.');
} else {
  console.log('Number', searchNum, 'is not found in the array.');
}

numbers.pop();

console.log('Updated Numbers:', numbers);

numbers.sort(function(a, b) {
  return a - b;
});

console.log('Sorted Numbers:', numbers);
