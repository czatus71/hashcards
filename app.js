const state = { cards: [], filtered: [], index: 0, revealed: false, history: [] };
const DATA_VERSION = 'official-ui-stat-111';
const $ = (id) => document.getElementById(id);

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function normalize(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}
function splitMath(text) {
  const out = [];
  let i = 0;
  while (i < text.length) {
    if (text.startsWith('$$', i)) {
      const j = text.indexOf('$$', i + 2);
      if (j >= 0) { out.push({math: text.slice(i + 2, j), display: true}); i = j + 2; continue; }
    }
    if (text[i] === '$') {
      const j = text.indexOf('$', i + 1);
      if (j >= 0) { out.push({math: text.slice(i + 1, j), display: false}); i = j + 1; continue; }
    }
    const nextDollar = text.indexOf('$', i);
    const j = nextDollar >= 0 ? nextDollar : text.length;
    out.push({text: text.slice(i, j)});
    i = j;
  }
  return out;
}
function markdownLite(text) {
  return text.split(/\n{2,}/).map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (/^\d+\.\s/m.test(trimmed)) {
      return '<ol>' + trimmed.split('\n').filter(Boolean).map(line => '<li>' + inline(line.replace(/^\d+\.\s*/, '')) + '</li>').join('') + '</ol>';
    }
    if (/^-\s/m.test(trimmed)) {
      return '<ul>' + trimmed.split('\n').filter(Boolean).map(line => '<li>' + inline(line.replace(/^-\s*/, '')) + '</li>').join('') + '</ul>';
    }
    return '<p>' + inline(trimmed).replace(/\n/g, '<br>') + '</p>';
  }).join('');
}
function inline(text) {
  return splitMath(text).map(part => {
    if (part.text !== undefined) return escapeHTML(part.text);
    return `<span class="${part.display ? 'math-display' : 'math-inline'}">${escapeHTML(part.math)}</span>`;
  }).join('');
}
function renderMathAndHighlight() {
  document.querySelectorAll('.math-inline').forEach(el => katex.render(el.textContent, el, {displayMode:false, throwOnError:false, macros: MACROS}));
  document.querySelectorAll('.math-display').forEach(el => katex.render(el.textContent, el, {displayMode:true, throwOnError:false, macros: MACROS}));
  if (typeof hljs !== 'undefined') hljs.highlightAll();
  $('cardContent').style.opacity = '1';
}
function current() { return state.filtered[state.index]; }
function render() {
  if (!state.filtered.length) {
    $('deckName').textContent = 'Brak kart';
    $('question').innerHTML = '<p>Brak wyników.</p>';
    $('answer').innerHTML = '';
    $('progressFill').style.width = '0%';
    return;
  }
  const card = current();
  $('deckName').textContent = card.deck || card.topic;
  $('question').innerHTML = markdownLite(card.question);
  $('answer').innerHTML = state.revealed ? markdownLite(card.answer) : '';
  $('reveal').hidden = state.revealed;
  document.querySelector('.grades').hidden = !state.revealed;
  $('undo').disabled = state.history.length === 0;
  $('progressFill').style.width = `${Math.round((state.index / Math.max(1, state.filtered.length)) * 100)}%`;
  renderMathAndHighlight();
}
function applyFilters() {
  const q = normalize($('search').value);
  const deck = $('deckFilter').value;
  state.filtered = state.cards.filter(c => {
    if (deck && c.deck !== deck && c.topic !== deck) return false;
    if (!q) return true;
    return normalize([c.question, c.answer, c.deck, c.topic].join(' ')).includes(q);
  });
  state.index = 0; state.revealed = false; render();
}
function advance(grade) {
  state.history.push({index: state.index, revealed: state.revealed});
  state.index = (state.index + 1) % Math.max(1, state.filtered.length);
  state.revealed = false;
  render();
}
async function init() {
  state.cards = await fetch(`cards.json?v=${DATA_VERSION}`, {cache:'no-cache'}).then(r => r.json());
  const decks = [...new Set(state.cards.map(c => c.topic)), ...new Set(state.cards.map(c => c.deck))];
  $('deckFilter').innerHTML = '<option value="">All Decks</option>' + decks.map(d => `<option value="${escapeHTML(d)}">${escapeHTML(d)}</option>`).join('');
  state.filtered = [...state.cards];
  render();
}
$('controls').addEventListener('submit', e => {
  e.preventDefault();
  const action = e.submitter?.value;
  if (action === 'Reveal') { state.revealed = true; render(); }
  else if (['Forgot','Hard','Good','Easy'].includes(action)) advance(action);
  else if (action === 'Undo' && state.history.length) { Object.assign(state, state.history.pop()); render(); }
  else if (action === 'End') { state.index = 0; state.revealed = false; render(); }
});
$('search').addEventListener('input', applyFilters);
$('deckFilter').addEventListener('change', applyFilters);
init().catch(err => { $('question').textContent = String(err); console.error(err); });
