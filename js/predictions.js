(function () {
  const tabsEl = document.getElementById('pred-tabs');
  const panelsEl = document.getElementById('pred-panels');
  if (!tabsEl || !panelsEl) return;

  function renderPanel(person) {
    const panel = document.createElement('div');
    panel.className = 'tab-panel';
    panel.id = 'pred-panel-' + person;

    const picks = PREDICTIONS.map(row => row[person]);
    const hasAny = picks.some(p => p && p.trim() !== '');

    if (!hasAny) {
      const note = document.createElement('div');
      note.className = 'empty-note';
      note.textContent = `${person} hasn't sent their predictions yet.`;
      panel.appendChild(note);
    } else {
      const ol = document.createElement('ol');
      ol.className = 'pred-list';
      picks.forEach((pick) => {
        const li = document.createElement('li');
        if (pick && pick.trim() !== '') {
          li.textContent = pick;
        } else {
          li.textContent = 'Pending...';
          li.classList.add('pending');
        }
        ol.appendChild(li);
      });
      panel.appendChild(ol);
    }

    panelsEl.appendChild(panel);
  }

  function activate(person) {
    document.querySelectorAll('#pred-tabs .tab-btn').forEach(b => b.classList.toggle('active', b.dataset.person === person));
    document.querySelectorAll('#pred-panels .tab-panel').forEach(p => p.classList.toggle('active', p.id === 'pred-panel-' + person));
  }

  CREW.forEach((person) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.type = 'button';
    btn.textContent = person;
    btn.dataset.person = person;
    btn.addEventListener('click', () => activate(person));
    tabsEl.appendChild(btn);
    renderPanel(person);
  });

  activate(CREW[0]);
})();
