function classifyTriangle() {
  const side1 = parseFloat(document.getElementById('side1').value);
  const side2 = parseFloat(document.getElementById('side2').value);
  const side3 = parseFloat(document.getElementById('side3').value);

  if (side1 === side2 && side2 === side3) {
    document.getElementById('result').innerHTML = 'The triangle is ' +
      'Equilateral.';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    document.getElementById('result').innerHTML = 'The triangle is Isosceles.';
  } else {
    document.getElementById('result').innerHTML = 'The triangle is Scalene.';
  }
}
