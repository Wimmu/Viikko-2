function generateTable() {
  const number = parseInt(document.getElementById('number').value);
  const table = document.getElementById('multiplicationTable');

  table.innerHTML = '';

  for (let i = 1; i <= number; i++) {
    const row = table.insertRow();
    for (let j = 1; j <= number; j++) {
      const cell = row.insertCell();
      cell.textContent = i + ' x ' + j + ' = ' + (i * j);
    }
  }
}
