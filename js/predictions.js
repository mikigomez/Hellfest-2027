(function () {
  const tbody = document.getElementById('predictions-body');
  if (!tbody) return;

  const order = ["Javi", "Rafel", "Miquel", "Julián", "Rudy"];

  PREDICTIONS.forEach((row, i) => {
    const tr = document.createElement('tr');

    const numTd = document.createElement('td');
    numTd.className = 'num';
    numTd.textContent = i + 1;
    tr.appendChild(numTd);

    order.forEach((person) => {
      const td = document.createElement('td');
      const pick = row[person];
      if (pick && pick.trim() !== '') {
        td.textContent = pick;
      } else {
        td.textContent = 'Pending...';
        td.classList.add('pending');
      }
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
})();
