(function () {
  const tabsEl = document.getElementById('tabs');
  const panelsEl = document.getElementById('panels');
  if (!tabsEl || !panelsEl) return;

  const STORAGE_PREFIX = 'hellfest2027-packing-';

  function storageKey(person) {
    return STORAGE_PREFIX + person;
  }

  function loadChecked(person) {
    try {
      return JSON.parse(localStorage.getItem(storageKey(person))) || {};
    } catch (e) {
      return {};
    }
  }

  function saveChecked(person, checked) {
    localStorage.setItem(storageKey(person), JSON.stringify(checked));
  }

  function updateProgress(person) {
    const items = PACKING_LISTS[person] || [];
    const checked = loadChecked(person);
    const done = items.filter((_, i) => checked[i]).length;
    const progressEl = document.getElementById('progress-' + person);
    if (progressEl) progressEl.textContent = `${done}/${items.length} completed`;
  }

  function renderPanel(person) {
    const items = PACKING_LISTS[person] || [];
    const checked = loadChecked(person);

    const panel = document.createElement('div');
    panel.className = 'tab-panel';
    panel.id = 'panel-' + person;

    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.id = 'progress-' + person;
    panel.appendChild(progress);

    if (items.length === 0) {
      const note = document.createElement('div');
      note.className = 'empty-note';
      note.textContent = `${person} hasn't sent a packing list yet — ask Miki to add it.`;
      panel.appendChild(note);
    } else {
      const cols = document.createElement('div');
      cols.className = 'checklist-cols';
      const mid = Math.ceil(items.length / 2);
      [items.slice(0, mid), items.slice(mid)].forEach((colItems, colIndex) => {
        const ul = document.createElement('ul');
        ul.className = 'checklist';
        colItems.forEach((item, idxInCol) => {
          const i = colIndex === 0 ? idxInCol : mid + idxInCol;
          const li = document.createElement('li');
          const label = document.createElement('label');
          const input = document.createElement('input');
          input.type = 'checkbox';
          input.checked = !!checked[i];
          const span = document.createElement('span');
          span.textContent = item;
          if (input.checked) span.classList.add('done');

          input.addEventListener('change', () => {
            const c = loadChecked(person);
            c[i] = input.checked;
            saveChecked(person, c);
            span.classList.toggle('done', input.checked);
            updateProgress(person);
          });

          label.appendChild(input);
          label.appendChild(span);
          li.appendChild(label);
          ul.appendChild(li);
        });
        cols.appendChild(ul);
      });
      panel.appendChild(cols);
    }

    panelsEl.appendChild(panel);
    updateProgress(person);
  }

  function activate(person) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.person === person));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + person));
    location.hash = person;
  }

  CREW.forEach((person, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.type = 'button';
    btn.textContent = person;
    btn.dataset.person = person;
    btn.addEventListener('click', () => activate(person));
    tabsEl.appendChild(btn);
    renderPanel(person);
  });

  const initial = CREW.includes(location.hash.slice(1)) ? location.hash.slice(1) : CREW[0];
  activate(initial);
})();
