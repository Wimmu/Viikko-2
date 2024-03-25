function convertTemperature() {
  const celsius = parseFloat(document.getElementById('celsiusInput').value);

  const fahrenheit = (celsius * 9/5) + 32;

  const kelvin = celsius + 273.15;

  let output = 'Temperature in Fahrenheit: ' + fahrenheit.toFixed(2) + '°F<br>';
  output += 'Temperature in Kelvin: ' + kelvin.toFixed(2) + ' K';

  document.getElementById('output').innerHTML = output;
}
