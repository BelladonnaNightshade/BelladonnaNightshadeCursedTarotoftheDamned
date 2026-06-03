const spreads = [
  { id:'mirror', title:'The Crimson Mirror', action:'Look Into the Mirror', purpose:'Self-deception, secrets, hidden motives.', slots:['What you believe','What you refuse to see','What is actually true'] },
  { id:'coffin', title:'The Coffin Spread', action:'Open the Coffin', purpose:'Endings, transformation, toxic attachments.', slots:['What must die','What refuses to stay buried','What rises next'] },
  { id:'judgment', title:'The Vampire Queen’s Judgement', action:'Receive Judgement', purpose:'Conflict, betrayal, moral clarity, power struggles.', slots:['The accusation','The hidden motive','The blood price','The verdict'] },
  { id:'rose', title:'The Black Rose Spread', action:'Pluck the Rose', purpose:'Romance, obsession, attraction, and desire.', slots:['The desire','The thorn','The blood','The bloom'] },
  { id:'bargain', title:'The Midnight Bargain', action:'Make the Bargain', purpose:'Choices, consequences, ambition, temptation.', slots:['What you want','What it will cost','Who benefits','What you become if you accept'] },
  { id:'enemy', title:'The Enemy at the Door', action:'Name the Enemy', purpose:'Rivalry, manipulation, hidden opposition, survival.', slots:['The face they show','The weapon they hide','The weakness they fear','How to survive them'] }
];

const $ = (id) => document.getElementById(id);
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
const orientation = () => Math.random() > 0.5 ? 'upright' : 'reversed';

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
              <img class="card-back-full" src="assets/card-back.png" alt="Belladonna tarot card back">
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
  const card = cards[Math.floor(Math.random() * cards.length)];
  const orient = orientation();
  renderReading($('oneCardResult'), [{card, orient, slot:'Belladonna’s Verdict'}], { concealed:false });
}

function dailyCard() {
  const card = cards[Math.floor(Math.random() * cards.length)];
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
  const deck = shuffle(cards).slice(0, spread.slots.length);
  const pulls = deck.map((card, i) => ({card, slot: spread.slots[i], orient: orientation()}));
  $('spreadMeta').innerHTML = `${spread.title} · ${spread.slots.length} cards`;
  $('spreadRevealNote').innerHTML = `Each position has been laid upon Belladonna’s table. Click the cards to reveal the spread.`;
  renderReading($('spreadResult'), pulls, { concealed:true, showRevealNote:true });
}

function renderLibrary() {
  $('libraryGrid').innerHTML = cards.map(card => `<button class="library-card" data-card="${card.number}">
    <img src="${card.image}" alt="${card.name}">
    <strong>${card.name}</strong>
    <span>${card.roman}</span>
  </button>`).join('');
  document.querySelectorAll('[data-card]').forEach(btn => btn.addEventListener('click', () => openCard(Number(btn.dataset.card))));
}

function openCard(number) {
  const card = cards.find(c => c.number === number);
  $('dialogContent').innerHTML = `<div class="dialog-grid">
    <img src="${card.image}" alt="${card.name}">
    <div class="dialog-copy">
      <p class="eyebrow">Major Arcana ${card.roman}</p>
      <h2>${card.name}</h2>
      <div class="pill-row">${card.keywords.map(k => `<span class="pill">${k}</span>`).join('')}</div>
      <div class="section-title">Upright</div>
      <p>${card.upright}</p>
      <p><strong>Belladonna’s Verdict:</strong> ${card.verdict}</p>
      <div class="section-title">Reversed</div>
      <p>${card.reversed}</p>
      <p><strong>Reversed Verdict:</strong> ${card.reversedVerdict}</p>
    </div>
  </div>`;
  $('cardDialog').showModal();
}

$('drawBtn').addEventListener('click', drawOne);
$('dailyBtn').addEventListener('click', dailyCard);
$('closeDialog').addEventListener('click', () => $('cardDialog').close());
renderSpreads();
renderLibrary();
