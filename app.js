const spreads = [
  { id:'mirror', title:'The Crimson Mirror', action:'Look Into the Mirror', purpose:'Self-deception, secrets, hidden motives.', slots:['What you believe','What you refuse to see','What is actually true'] },
  { id:'coffin', title:'The Coffin Spread', action:'Open the Coffin', purpose:'Endings, transformation, toxic attachments.', slots:['What must die','What refuses to stay buried','What rises next'] },
  { id:'judgment', title:'The Vampire Queen’s Judgement', action:'Receive Judgement', purpose:'Conflict, betrayal, moral clarity, power struggles.', slots:['The accusation','The hidden motive','The blood price','The verdict'] },
  { id:'rose', title:'The Black Rose Spread', action:'Pluck the Rose', purpose:'Romance, obsession, attraction, and desire.', slots:['The desire','The thorn','The blood','The bloom'] },
  { id:'bargain', title:'The Midnight Bargain', action:'Make the Bargain', purpose:'Choices, consequences, ambition, temptation.', slots:['What you want','What it will cost','Who benefits','What you become if you accept'] },
  { id:'enemy', title:'The Enemy at the Door', action:'Name the Enemy', purpose:'Rivalry, manipulation, hidden opposition, survival.', slots:['The face they show','The weapon they hide','The weakness they fear','How to survive them'] }
];

const $ = (id) => document.getElementById(id);
function randomFloat() {
  if (window.crypto && window.crypto.getRandomValues) {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    return values[0] / 4294967296;
  }
  return Math.random();
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(randomFloat() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getReadingDeck() {
  const scope = $('deckScope') ? $('deckScope').value : 'full';
  const fullDeck = typeof libraryCards !== 'undefined' ? libraryCards : cards;
  if (scope === 'major') return cards;
  return fullDeck;
}

function reversalsEnabled() {
  const toggle = $('reversalsToggle');
  return !toggle || toggle.checked;
}

function orientation() {
  if (!reversalsEnabled()) return 'upright';
  return randomFloat() > 0.5 ? 'upright' : 'reversed';
}

function randomCard(deck) {
  return deck[Math.floor(randomFloat() * deck.length)];
}

function renderReading(target, pulls, options = {}) {
  const concealed = !!options.concealed;
  const showRevealNote = !!options.showRevealNote;
  target.innerHTML = pulls.map(({card, slot, orient}, i) => {
    const isRev = orient === 'reversed';
    const orientationText = isRev ? 'Reversed' : 'Upright';
    return `<article class="reading-card" style="animation-delay:${i * 70}ms">
      ${slot ? `<div class="slot-banner">${slot}</div>` : ''}
      <div class="card-shell">
        <button class="flip-card ${concealed ? '' : 'revealed'}" ${concealed ? '' : 'data-static="true"'}>
          <div class="flip-inner">
            <div class="flip-face flip-back">
              <img class="card-back-full" src="assets/card-back.webp" alt="Belladonna tarot card back">
              <span class="card-back-reveal">Click to reveal</span>
            </div>
            <div class="flip-face flip-front ${isRev ? 'reversed' : ''}">
              <img src="${card.image}" alt="${card.name}">
              <div class="card-text">
                <div class="orientation-chip">${orientationText}</div>
                <h3>${card.roman} — ${card.name}${isRev ? ' Reversed' : ''}</h3>
                <p class="meaning">${isRev ? card.reversed : card.upright}</p>
                <p class="verdict">${isRev ? card.reversedVerdict : card.verdict}</p>
              </div>
            </div>
          </div>
        </button>
      </div>
      ${concealed && showRevealNote ? '<div class="reveal-hint">Reveal Belladonna’s verdict</div>' : ''}
    </article>`;
  }).join('');

  if (concealed) {
    target.querySelectorAll('.flip-card').forEach(cardEl => {
      cardEl.addEventListener('click', () => {
        cardEl.classList.add('revealed');
      }, { once: true });
    });
  }
}

function drawOne() {
  const deck = getReadingDeck();
  const card = randomCard(deck);
  const orient = orientation();
  renderReading($('oneCardResult'), [{card, orient, slot:'Belladonna’s Verdict'}], { concealed:false });
}

function dailyCard() {
  const deck = getReadingDeck();
  const card = randomCard(deck);
  const orient = orientation();
  renderReading($('dailyResult'), [{card, orient, slot:'Today’s Curse'}], { concealed:false });
}

function renderSpreads() {
  $('spreadList').innerHTML = spreads.map(s => `<button class="spread-card" data-spread="${s.id}">
    <p class="eyebrow">${s.action}</p>
    <h3>${s.title}</h3>
    <p>${s.purpose}</p>
  </button>`).join('');
  document.querySelectorAll('[data-spread]').forEach(btn => btn.addEventListener('click', () => doSpread(btn.dataset.spread)));
}

function doSpread(id) {
  const spread = spreads.find(s => s.id === id);
  const deck = shuffle(getReadingDeck()).slice(0, spread.slots.length);
  const pulls = deck.map((card, i) => ({card, slot: spread.slots[i], orient: orientation()}));
  $('spreadMeta').innerHTML = `${spread.title} · ${spread.slots.length} cards`;
  $('spreadRevealNote').innerHTML = `Each position has been laid upon Belladonna’s table. Click the cards to reveal the spread.`;
  renderReading($('spreadResult'), pulls, { concealed:true, showRevealNote:true });
}


function cardKey(card) {
  return card.id || String(card.number);
}

function renderLibrary() {
  const suits = typeof librarySuitSections !== 'undefined' ? librarySuitSections : [];

  const majorHtml = `<section class="library-section">
    <div class="library-section-head">
      <p class="eyebrow">Major Arcana</p>
      <h3>The Twenty-Two Greater Curses</h3>
      <p>The original Major Arcana library remains intact for readings and card reference.</p>
    </div>
    <div class="library-grid">
      ${cards.map(card => `<button class="library-card" data-card="${cardKey(card)}">
        <img src="${card.image}" alt="${card.name}">
        <strong>${card.name}</strong>
        <span>${card.roman}</span>
      </button>`).join('')}
    </div>
  </section>`;

  const minorHtml = `<section class="library-section minor-arcana-section">
    <div class="library-section-head ornate-section-head">
      <p class="eyebrow">Minor Arcana</p>
      <h3>Minor Arcana Suites</h3>
      <p>The four lesser houses of Belladonna’s tarot: each suite carries its own appetite, curse, and verdict.</p>
    </div>
    ${suits.map(({key, cards: suitCards}) => {
      const info = librarySuitInfo[key];
      return `<div class="suite-block suite-${key}">
        <div class="library-section-head suite-head">
          <p class="eyebrow">${info.subtitle}</p>
          <h3>${info.title}</h3>
          <p class="suit-motto">“${info.motto}”</p>
          <p>${info.description}</p>
        </div>
        <div class="library-grid">
          ${suitCards.map(card => `<button class="library-card minor-card" data-card="${cardKey(card)}">
            <img src="${card.image}" alt="${card.name}">
            <strong>${card.name}</strong>
            <span>${card.roman} · ${info.label}</span>
          </button>`).join('')}
        </div>
      </div>`;
    }).join('')}
  </section>`;

  $('libraryGrid').innerHTML = majorHtml + minorHtml;
  document.querySelectorAll('[data-card]').forEach(btn => btn.addEventListener('click', () => openCard(btn.dataset.card)));
}

function suitLabelForCard(card) {
  if (!card.id) return '';
  if (card.id.startsWith('blood-')) return 'Blood Chalices';
  if (card.id.startsWith('wands-')) return 'Cursed Wands';
  if (card.id.startsWith('blades-')) return 'Silver Blades';
  if (card.id.startsWith('pentacles-')) return 'Pentacles of the Grave';
  return 'Minor Arcana';
}

function openCard(key) {
  const source = typeof libraryCards !== 'undefined' ? libraryCards : cards;
  const card = source.find(c => cardKey(c) === key || String(c.number) === key);
  if (!card) return;
  const isMinor = !!card.id;
  const suitLabel = suitLabelForCard(card);
  const reversedKeywords = card.reversedKeywords || [];
  $('dialogContent').innerHTML = `<div class="dialog-grid ${isMinor ? 'minor-dialog' : ''}">
    <img src="${card.image}" alt="${card.name}">
    <div class="dialog-copy">
      <p class="eyebrow">${isMinor ? `Minor Arcana · ${suitLabel}` : `Major Arcana ${card.roman}`}</p>
      <h2>${card.name}</h2>
      ${card.core ? `<p class="core-root"><strong>Core Root:</strong> ${card.core}</p>` : ''}
      ${card.visual ? `<p class="visual-concept"><strong>Visual Concept:</strong> ${card.visual}</p>` : ''}
      <div class="section-title">Upright</div>
      <div class="pill-row">${(card.keywords || []).map(k => `<span class="pill">${k}</span>`).join('')}</div>
      <p>${card.upright}</p>
      <p><strong>Belladonna’s Verdict:</strong> ${card.verdict}</p>
      <div class="section-title">Reversed</div>
      ${reversedKeywords.length ? `<div class="pill-row reversed-pills">${reversedKeywords.map(k => `<span class="pill">${k}</span>`).join('')}</div>` : ''}
      <p>${card.reversed}</p>
      <p><strong>Reversed Verdict:</strong> ${card.reversedVerdict}</p>
    </div>
  </div>`;
  $('cardDialog').showModal();
}

$('drawBtn').addEventListener('click', drawOne);
$('dailyBtn').addEventListener('click', dailyCard);
$('closeDialog').addEventListener('click', () => $('cardDialog').close());

function updateReadingSettingsNote() {
  const note = $('readingSettingsNote');
  if (!note) return;
  const deckText = $('deckScope') && $('deckScope').value === 'major' ? 'Major Arcana only' : 'Full 78-card deck';
  const reversalText = reversalsEnabled() ? 'reversals on' : 'reversals off';
  note.textContent = `${deckText}, ${reversalText}.`;
}

['deckScope','reversalsToggle'].forEach(id => {
  const control = $(id);
  if (control) control.addEventListener('change', updateReadingSettingsNote);
});
updateReadingSettingsNote();
renderSpreads();
renderLibrary();


/* Tarot background music gate
   Uses a two-song playlist:
   assets/audio/moonlit-chapel.mp3
   assets/audio/moonlit-chapel-2.mp3
*/
const tarotMusicTracks = [
  'assets/audio/moonlit-chapel.mp3',
  'assets/audio/moonlit-chapel-2.mp3'
];

let tarotMusicIndex = 0;
let tarotMusicAudio = null;
let tarotMusicEnabled = false;

function setupTarotMusic() {
  const gate = document.getElementById('tarotSoundGate');
  const enterWithMusic = document.getElementById('enterWithMusic');
  const enterSilent = document.getElementById('enterSilent');
  const toggle = document.getElementById('tarotSoundToggle');

  if (!gate || !enterWithMusic || !enterSilent || !toggle) return;

  tarotMusicAudio = new Audio(tarotMusicTracks[tarotMusicIndex]);
  tarotMusicAudio.preload = 'auto';
  tarotMusicAudio.volume = 0.22;

  tarotMusicAudio.addEventListener('ended', () => {
    if (!tarotMusicEnabled) return;
    tarotMusicIndex = (tarotMusicIndex + 1) % tarotMusicTracks.length;
    tarotMusicAudio.src = tarotMusicTracks[tarotMusicIndex];
    tarotMusicAudio.play().catch(() => {
      tarotMusicEnabled = false;
      toggle.textContent = 'Music Off';
      toggle.setAttribute('aria-pressed', 'false');
    });
  });

  function closeGate() {
    gate.hidden = true;
    toggle.hidden = false;
  }

  function setMusicState(enabled) {
    tarotMusicEnabled = enabled;
    toggle.textContent = enabled ? 'Music On' : 'Music Off';
    toggle.setAttribute('aria-pressed', enabled ? 'true' : 'false');

    if (enabled) {
      tarotMusicAudio.play().catch(() => {
        tarotMusicEnabled = false;
        toggle.textContent = 'Music Off';
        toggle.setAttribute('aria-pressed', 'false');
      });
    } else if (tarotMusicAudio) {
      tarotMusicAudio.pause();
    }
  }

  enterWithMusic.addEventListener('click', () => {
    closeGate();
    setMusicState(true);
  });

  enterSilent.addEventListener('click', () => {
    closeGate();
    setMusicState(false);
  });

  toggle.addEventListener('click', () => {
    setMusicState(!tarotMusicEnabled);
  });
}

document.addEventListener('DOMContentLoaded', setupTarotMusic);

