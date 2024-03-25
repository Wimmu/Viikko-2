function calculateDistance() {
  const point1Input = document.getElementById('point1').value.trim();
  const point2Input = document.getElementById('point2').value.trim();

  const point1 = point1Input.split(',');
  const point2 = point2Input.split(',');

  const x1 = parseFloat(point1[0]);
  const y1 = parseFloat(point1[1]);
  const x2 = parseFloat(point2[0]);
  const y2 = parseFloat(point2[1]);

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  document.getElementById('result').innerHTML = 'The distance between the ' +
    'two points is: ' + distance.toFixed(2);
}
