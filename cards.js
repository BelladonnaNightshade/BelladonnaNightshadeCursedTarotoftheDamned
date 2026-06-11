const cards = [
  {number:0,roman:'0',name:'The Fool',image:'cards/0 The Fool.webp',keywords:['beginnings','risk','innocence','abyss'],upright:'The first step into danger. A new path opens, but it will not flatter your intelligence. Sometimes only the reckless escape the prison built by the cautious.',reversed:'Stupidity wearing a flower crown: blind confidence, childish denial, gullibility, humiliation, and avoidable disaster.',verdict:'Step forward. But do not insult the abyss by pretending it is not there.',reversedVerdict:'The fall will not become wisdom simply because you smiled on the way down.'},
  {number:1,roman:'I',name:'The Magician',image:'cards/1 The magician.webp',keywords:['willpower','manifestation','skill','ritual'],upright:'Power made deliberate. The tools are already on the table; the question is whether you have the discipline and audacity to use them.',reversed:'Talent gone rotten: manipulation, fraud, wasted gifts, scattered will, cheap tricks, and false mastery.',verdict:'You have the knife, the chalice, the coin, and the wand. Stop admiring the altar and begin the spell.',reversedVerdict:'A trick is not a miracle simply because the victim applauds.'},
  {number:2,roman:'II',name:'The High Priestess',image:'cards/2 The High Priestess.webp',keywords:['mystery','intuition','secrets','silence'],upright:'Forbidden knowing. The visible world is only the surface, and secrets are a form of power.',reversed:'Corrupted secrecy: self-deception, hidden poison, ignored instinct, and secrets weaponized against you.',verdict:'The truth is already in the room. Become quiet enough to stop insulting it.',reversedVerdict:'You did not fail because the signs were absent. You failed because they were unpleasant.'},
  {number:3,roman:'III',name:'The Empress',image:'cards/3 The Empress.webp',keywords:['fertility','sexuality','abundance','dark feminine'],upright:'Dark feminine power in fertile, sensual, dangerous fullness. Beauty that creates, desire that commands, and abundance that knows its worth.',reversed:'Poisoned femininity: cruelty disguised as care, sexuality used as punishment, envy, withholding, and devouring control.',verdict:'Your body, your beauty, your hunger, your tenderness, and your power are not separate things.',reversedVerdict:'The garden is not dead. It is being starved by the one who claims to tend it.'},
  {number:4,roman:'IV',name:'The Emperor',image:'cards/4 The Emperor.webp',keywords:['authority','influence','structure','control'],upright:'The architecture of power. Visible and invisible authorities shape your life; learn where power sits, how it speaks, and what it wants.',reversed:'Destructive authority operating while you remain blind: manipulation, domination disguised as protection, corrupt systems, and hidden chains.',verdict:'Power is already touching your life. Ask who benefits, who commands, and how you can turn the machinery toward yourself.',reversedVerdict:'You are not free simply because no one has told you where the leash is tied.'},
  {number:5,roman:'V',name:'The Hierophant',image:'cards/5 The Hierophant.webp',keywords:['belief','doctrine','ritual','masks'],upright:'The theater of belief. Religion, tradition, titles, costumes, and sacred language shape behavior and can become leverage.',reversed:'False belief turned destructive: hypocrisy, spiritual fraud, moral theater, cultish obedience, and fake virtue used as a weapon.',verdict:'The robes matter because people obey them as if they are true.',reversedVerdict:'Beware the holy man who needs you kneeling before he can feel tall.'},
  {number:6,roman:'VI',name:'The Lovers',image:'cards/6 The Lovers.webp',keywords:['desire','choice','temptation','union'],upright:'The dangerous holiness of desire. Love reveals what you worship and what you may surrender for union.',reversed:'Desire turned diseased: obsession, betrayal, false soulmates, emotional addiction, and possession mistaken for love.',verdict:'Love is never harmless. It reveals what you would kneel for.',reversedVerdict:'Not every chain is ugly. Some are kissed onto the throat.'},
  {number:7,roman:'VII',name:'The Chariot',image:'cards/7 The Chariot.webp',keywords:['victory','discipline','conquest','control'],upright:'Domination through discipline. Opposing forces pull against each other; victory belongs to the one who can hold the reins.',reversed:'Loss of control: ambition becoming chaos, pride becoming collapse, emotional stampede, and movement without direction.',verdict:'Do not wait for your beasts to agree. Harness them and advance.',reversedVerdict:'You called yourself the driver because you were too frightened to admit you were cargo.'},
  {number:8,roman:'VIII',name:'Strength',image:'cards/8 Strength.webp',keywords:['courage','restraint','hunger','mastery'],upright:'The beast made to bow without being broken. Hunger mastered, rage trained, sexuality understood, and power made elegant.',reversed:'The beast loose in the house: cruelty, cowardice, sexual malice, brutality, and weakness disguised as domination.',verdict:'The beast is not your enemy. Your weakness is thinking it must either be killed or obeyed.',reversedVerdict:'Only the weak need to prove they have teeth every time they enter a room.'},
  {number:9,roman:'IX',name:'The Hermit',image:'cards/9 The Hermit.webp',keywords:['solitude','wisdom','study','exile'],upright:'Solitude chosen for power. Forbidden study, occult discipline, and distance from the shallow theater of other people.',reversed:'Isolation turned poisonous: bitterness, paranoia, loneliness, spiritual decay, and contempt mistaken for wisdom.',verdict:'Leave the crowd to its warmth. Some truths only approach when the room has gone cold.',reversedVerdict:'A locked door is not a monastery simply because you are alone behind it.'},
  {number:10,roman:'X',name:'Wheel of Fortune',image:'cards/10 Wheel of Fortune.webp',keywords:['fate','cycles','luck','timing'],upright:'The machinery of fate turning without asking who is ready. Luck is real, but so is timing.',reversed:'Fate curdled into misfortune: repeated ruin, bad timing, cursed patterns, and lessons returning because you refused to learn.',verdict:'The wheel does not care whether you deserve the height or the fall. Learn when to move.',reversedVerdict:'This is not fate persecuting you. This is the lesson returning with sharper teeth.'},
  {number:11,roman:'XI',name:'Justice',image:'cards/11 Justice.webp',keywords:['law','judgment','consequence','false fairness'],upright:'The lie society tells about itself so the powerful can sleep well. Recognize the game and learn how the scales are weighted.',reversed:'The full horror of corrupt mankind pretending to be righteous: false accusation, rigged systems, and laws used as weapons.',verdict:'Do not worship the scales. Learn who forged them, who holds them, and how much blood it takes to tip them.',reversedVerdict:'When wolves build the courthouse, do not be shocked when the sheep are found guilty.'},
  {number:12,roman:'XII',name:'The Hanged One',image:'cards/12 The Hanged One.webp',keywords:['surrender','sacrifice','reversal','perspective'],upright:'Power in suspension. Bondage can reveal what freedom hides, and punishment may become revelation.',reversed:'Meaningless suffering: martyrdom without wisdom, paralysis, humiliation, cowardly delay, and sacrifice to gods not listening.',verdict:'Stop struggling for one moment. The rope may be teaching you what the road refused to say.',reversedVerdict:'Not every crucifixion produces a saint. Some only produce a corpse with excuses.'},
  {number:13,roman:'XIII',name:'Death',image:'cards/13 Death.webp',keywords:['mortality','transformation','endings','truth'],upright:'The great honest card. Everything ends; to live with this knowledge is not weakness, but freedom.',reversed:'Mortal despair: decay, helplessness, clinging, dread, and the unbearable knowledge that change comes without your permission.',verdict:'You are dying. So is everyone who ever frightened you. Let that knowledge make you dangerous.',reversedVerdict:'The corpse you refuse to bury has begun to smell like your own future.'},
  {number:14,roman:'XIV',name:'Temperance',image:'cards/14 Temperance.webp',keywords:['balance','alchemy','restraint','mixture'],upright:'The dangerous craft of controlled mixture: blood and water, mercy and threat, hunger and restraint, poison and cure.',reversed:'Contamination: addiction, excess, instability, corrupted healing, and vile mixtures that should never have shared the cup.',verdict:'Even poison becomes medicine when measured by a steady hand.',reversedVerdict:'You did not create a potion. You made a wound drinkable.'},
  {number:15,roman:'XV',name:'The Devil',image:'cards/15 The Devil.webp',keywords:['temptation','bondage','appetite','shadow'],upright:'The chain you secretly enjoy. Name what owns you; once visible, a chain may be used, broken, tightened, or moved.',reversed:'Degradation without glamour: enslavement, addiction, corruption, humiliation, shame, and moral collapse.',verdict:'Do not be ashamed of the chain. Be ashamed that you called it freedom because it glittered.',reversedVerdict:'The leash is no longer decorative. It is all that remains of your will.'},
  {number:16,roman:'XVI',name:'The Tower',image:'cards/16 The Tower.webp',keywords:['collapse','revelation','disaster','exposure'],upright:'The mercy of catastrophe. What was false can no longer stand; what was arrogant can no longer pretend to be eternal.',reversed:'Disaster delayed or denied: smoke inside the building, slow ruin, suppressed crisis, and fear pretending to be stability.',verdict:'Do not mourn the tower too quickly. Ask what it was hiding from the sky.',reversedVerdict:'The tower has already fallen. You are merely living in the dust before it reaches your lungs.'},
  {number:17,roman:'XVII',name:'The Star',image:'cards/17 The Star.webp',keywords:['hope','renewal','healing','defiance'],upright:'Hope after devastation. Not naive optimism, but the luminous power of continuing after the world has shown its teeth.',reversed:'Hope curdled into mockery: despair, false inspiration, humiliation, spiritual exhaustion, and light that may not be salvation.',verdict:'Hope is most beautiful when it knows exactly how much blood has been spilled and still refuses to die.',reversedVerdict:'Not every light is a star. Some are only the eyes of things waiting in the dark.'},
  {number:18,roman:'XVIII',name:'The Moon',image:'cards/18 The Moon.webp',keywords:['illusion','dreams','fear','subconscious'],upright:'The kingdom of uncertainty. The Moon reveals through distortion: instinct, dream, fear, prophecy, and half-truth.',reversed:'Madness without poetry: delusion, paranoia, gaslighting, nightmare logic, and the collapse of trust in your own perception.',verdict:'The night is not empty. It is crowded with everything daylight taught you to ignore.',reversedVerdict:'When every shadow looks like a monster, ask which monster taught you to see that way.'},
  {number:19,roman:'XIX',name:'The Sun',image:'cards/19 The Sun.webp',keywords:['clarity','triumph','exposure','radiance'],upright:'Revelation without mercy. Triumph under light so bright that lies cannot survive, but visibility has a price.',reversed:'Light turned cruel: exposure, arrogance, humiliation, forced joy, burnout, and being seen without being understood.',verdict:'Shine if you must. But remember: every bright thing teaches the hunters where to aim.',reversedVerdict:'The same light that crowns you can also strip you bare.'},
  {number:20,roman:'XX',name:'Judgement',image:'cards/20 Judgement.webp',keywords:['reckoning','awakening','verdict','summons'],upright:'The summons you cannot ignore. The past rises and demands an answer; excuses rot away.',reversed:'Condemnation without redemption: guilt, denial, damnation, disgrace, and the past returning as punishment.',verdict:'The grave has opened. Decide whether you are rising as witness, judge, or evidence.',reversedVerdict:'The trumpet did not call you to rise. It called the witnesses to identify the body.'},
  {number:21,roman:'XXI',name:'The World',image:'cards/21 The World.webp',keywords:['completion','mastery','dominion','integration'],upright:'Completion as power integrated. The journey changed you; the crown belongs to the one who survived the circle.',reversed:'The unfinished soul: false closure, emptiness after success, fragmentation, and a victory that tastes like ash.',verdict:'You survived the circle. Now decide whether you will leave it healed, crowned, or hungry.',reversedVerdict:'You reached the final door and discovered you brought every prison with you.'}
];

const bloodChalicesCards = [
  {
    "id": "blood-ace",
    "sort": 1,
    "roman": "Ace",
    "name": "Ace of Blood Chalices",
    "image": "cards/blood-chalices/ace.webp",
    "keywords": [
      "new desire",
      "emotional awakening",
      "attraction",
      "intuition",
      "thirst",
      "romance",
      "sensual beginning",
      "spiritual hunger"
    ],
    "core": "New emotion, love, intuition, spiritual opening, emotional beginning.",
    "visual": "A single ornate chalice overflows with dark red blood. It may sit on black velvet, rise from a moonlit pool, or be held by a pale hand with black nails. A black rose blooms beside it. One drop falls, beginning a ripple.",
    "upright": "The first thirst. A new emotional current awakens: love, desire, intuition, obsession, creative feeling, or spiritual hunger. Something in you wants to drink deeply. This is not yet corruption. This is the birth of appetite. The heart has opened, but not innocently. A new desire has appeared, and it may become nourishment, temptation, art, romance, or ruin depending on how consciously you drink.",
    "verdict": "The chalice is full. Do not pretend you are not thirsty.",
    "reversed": "The thirst is poisoned before the first sip. Emotional blockage, numbness, false intimacy, manipulative seduction, or a desire that arrives already infected with neediness and shame. This may show love offered with a hidden hook, emotional exhaustion, or someone mistaking craving for devotion.",
    "reversedKeywords": [
      "emotional blockage",
      "poisoned desire",
      "false love",
      "manipulation",
      "numbness",
      "neediness",
      "corrupted intimacy"
    ],
    "reversedVerdict": "Not every cup is offered to nourish you. Some are held out to see how badly you need to drink."
  },
  {
    "id": "blood-two",
    "sort": 2,
    "roman": "Two",
    "name": "Two of Blood Chalices",
    "image": "cards/blood-chalices/two.webp",
    "keywords": [
      "union",
      "attraction",
      "mutual desire",
      "emotional exchange",
      "alliance",
      "romance",
      "bond",
      "shared thirst"
    ],
    "core": "Union, partnership, attraction, mutual feeling, emotional exchange.",
    "visual": "Two figures exchange blood-filled chalices beneath moonlight. Their hands touch around the cups. The scene should feel romantic but dangerous, like a vow that may become a chain.",
    "upright": "A bond forms through shared thirst. Desire recognizes itself in another. This may be love, alliance, attraction, reconciliation, or emotional reciprocity. The key is exchange: two cups, two hungers, two risks. It is not innocent romance. It asks whether both parties drink equally, or whether one is already becoming the meal.",
    "verdict": "To drink together is not the same as belonging to each other. Learn the difference before the vow is sealed.",
    "reversed": "The bond becomes unequal. One thirst consumes the other. This card may show obsession, emotional imbalance, betrayal, seduction without reciprocity, toxic romance, or a union formed around hunger rather than truth. It can also suggest a broken pact, a poisoned relationship, or someone using intimacy as a leash.",
    "reversedKeywords": [
      "toxic bond",
      "imbalance",
      "betrayal",
      "obsession",
      "emotional dependency",
      "false union",
      "seduction",
      "poisoned intimacy"
    ],
    "reversedVerdict": "A shared cup becomes a trap when only one of you is bleeding."
  },
  {
    "id": "blood-three",
    "sort": 3,
    "roman": "Three",
    "name": "Three of Blood Chalices",
    "image": "cards/blood-chalices/three.webp",
    "keywords": [
      "celebration",
      "revelry",
      "friendship",
      "shared pleasure",
      "indulgence",
      "belonging",
      "abundance",
      "emotional community"
    ],
    "core": "Celebration, friendship, community, shared joy, abundance.",
    "visual": "A decadent vampire revel: three blood chalices raised in a candlelit salon, among black roses, red silk, and smiling figures whose joy may be sincere or predatory.",
    "upright": "Pleasure shared is power multiplied. This card represents revelry, companionship, sensual celebration, artistic community, emotional abundance, and the intoxicating joy of belonging to a circle that understands your appetite. But every feast has a guest list, and every guest list has exclusions.",
    "verdict": "Raise the chalice. But notice who pours, who drinks, and who is expected to pay for the music.",
    "reversed": "The revel becomes vulgar. Friendship becomes gossip. Celebration becomes excess. Community becomes a feeding circle. This card may show emotional cliques, drunken cruelty, social manipulation, overindulgence, or the loneliness hidden inside a crowded room.",
    "reversedKeywords": [
      "excess",
      "social cruelty",
      "gossip",
      "false friendship",
      "emotional cliques",
      "indulgence",
      "loneliness",
      "decadence"
    ],
    "reversedVerdict": "Not every banquet is communion. Some are only prettier forms of feeding."
  },
  {
    "id": "blood-four",
    "sort": 4,
    "roman": "Four",
    "name": "Four of Blood Chalices",
    "image": "cards/blood-chalices/four.webp",
    "keywords": [
      "apathy",
      "dissatisfaction",
      "refusal",
      "emotional withdrawal",
      "boredom",
      "contemplation",
      "numbness",
      "selectivity"
    ],
    "core": "Apathy, contemplation, dissatisfaction, emotional withdrawal, missed offer.",
    "visual": "A bored vampire sits before three untouched blood chalices while a fourth is offered from shadow. Her expression is cold, exhausted, or unimpressed. The room is luxurious but dead.",
    "upright": "The heart has grown tired of its own feast. What once satisfied no longer stirs the blood. This card speaks of emotional boredom, numbness, dissatisfaction, withdrawal, and the refusal to drink simply because a cup is offered. It can be wisdom or stagnation. Sometimes refusal preserves dignity. Sometimes it is only spiritual exhaustion wearing a crown.",
    "verdict": "A full cup means nothing to a mouth that has forgotten why it thirsted.",
    "reversed": "The refusal becomes decay. Emotional numbness hardens into contempt. This card may show bitterness, isolation, spoiled desire, chronic dissatisfaction, or rejecting nourishment because misery has become familiar. It can also suggest a person who cannot receive love unless it arrives in the exact shape of their wound.",
    "reversedKeywords": [
      "bitterness",
      "emotional stagnation",
      "contempt",
      "spoiled desire",
      "rejection",
      "isolation",
      "deadened appetite"
    ],
    "reversedVerdict": "You are not too noble to drink. You are afraid the cup will not taste like your suffering."
  },
  {
    "id": "blood-five",
    "sort": 5,
    "roman": "Five",
    "name": "Five of Blood Chalices",
    "image": "cards/blood-chalices/five.webp",
    "keywords": [
      "grief",
      "regret",
      "heartbreak",
      "sorrow",
      "loss",
      "mourning",
      "emotional waste",
      "remaining hope"
    ],
    "core": "Loss, grief, regret, sorrow, mourning, disappointment.",
    "visual": "Three blood chalices lie spilled across black stone. Two remain upright behind a grieving figure. Blood runs like a small river through cracks in the floor.",
    "upright": "Blood has been wasted. Love has been lost. Something once full has spilled beyond recovery. This card is grief, regret, heartbreak, mourning, and fixation on what cannot be poured back into the cup. Yet not all is gone. It asks whether you will kneel forever before the spill, or turn to see what remains standing behind you.",
    "verdict": "Mourn what spilled. Then remember that grief is not a throne.",
    "reversed": "Grief becomes a swamp. Loss turns into identity. This card may show despair, self-pity, emotional paralysis, addiction to sorrow, or a person who keeps reopening the wound to prove it was real. It can also suggest refusing the living because the dead are easier to worship.",
    "reversedKeywords": [
      "despair",
      "self-pity",
      "fixation",
      "emotional paralysis",
      "sorrow addiction",
      "hopelessness",
      "refusal to heal"
    ],
    "reversedVerdict": "The blood is gone. Stop cutting yourself to refill the cup."
  },
  {
    "id": "blood-six",
    "sort": 6,
    "roman": "Six",
    "name": "Six of Blood Chalices",
    "image": "cards/blood-chalices/six.webp",
    "keywords": [
      "nostalgia",
      "memory",
      "old love",
      "reunion",
      "tenderness",
      "childhood",
      "haunting",
      "sweetness"
    ],
    "core": "Nostalgia, memory, childhood, innocence, past love, reunion.",
    "visual": "A haunted garden where six chalices bloom like flowers. A younger Belladonna or ghostly child offers a blood chalice to an older figure. Sweetness and death coexist.",
    "upright": "The past returns with a sweet mouth and cold hands. This card is nostalgia, old love, memory, innocence remembered, childhood wounds, and the strange tenderness of what once fed you. It does not say the past was pure. It says the past still knows your name. It may bring comfort, reunion, old affection, or the chance to reclaim a lost part of the self.",
    "verdict": "The past is not dead simply because it stopped speaking first.",
    "reversed": "Nostalgia becomes necromancy. The past is no longer remembered; it is worshiped, distorted, or used as a prison. This card may show regression, clinging to old wounds, sentimental lies, emotional immaturity, or being seduced by what should remain buried.",
    "reversedKeywords": [
      "regression",
      "sentimental illusion",
      "clinging",
      "immaturity",
      "old wounds",
      "false memory",
      "haunted attachment"
    ],
    "reversedVerdict": "Do not call it memory when you are only polishing the chains."
  },
  {
    "id": "blood-seven",
    "sort": 7,
    "roman": "Seven",
    "name": "Seven of Blood Chalices",
    "image": "cards/blood-chalices/seven.webp",
    "keywords": [
      "temptation",
      "fantasy",
      "choices",
      "illusion",
      "longing",
      "dreams",
      "seduction",
      "emotional confusion"
    ],
    "core": "Fantasy, illusion, choices, temptation, imagination, wishful thinking.",
    "visual": "Seven chalices float in mist, each containing a different temptation: love, crown, serpent, jewel, mirror, skull, and black rose. Belladonna watches from shadow.",
    "upright": "Many cups are offered. Not all contain nourishment. The Seven of Blood Chalices is fantasy, temptation, seductive choices, emotional illusion, and the dangerous richness of wanting too many things at once. This card asks you to look carefully at your desires. Some are dreams. Some are traps. Some are masks worn by hunger.",
    "verdict": "Before you choose the chalice, ask what part of you it is trying to flatter.",
    "reversed": "The illusion devours judgment. This card may show addiction to fantasy, delusion, romantic projection, emotional manipulation, foolish choices, or being unable to tell desire from destiny. Here the dream is no longer inspiration. It has become a drug.",
    "reversedKeywords": [
      "delusion",
      "projection",
      "fantasy addiction",
      "temptation",
      "confusion",
      "false promises",
      "emotional blindness"
    ],
    "reversedVerdict": "You did not choose the wrong cup. You chose the one that lied most beautifully."
  },
  {
    "id": "blood-eight",
    "sort": 8,
    "roman": "Eight",
    "name": "Eight of Blood Chalices",
    "image": "cards/blood-chalices/eight.webp",
    "keywords": [
      "departure",
      "withdrawal",
      "abandonment",
      "deeper hunger",
      "renunciation",
      "emotional maturity",
      "leaving",
      "seeking"
    ],
    "core": "Leaving, abandonment, emotional withdrawal, seeking deeper meaning.",
    "visual": "A cloaked figure walks away from eight blood chalices arranged on a stone altar. The moon hangs above. The cups are still full, but the figure no longer wants them.",
    "upright": "The feast no longer satisfies. This card is departure, emotional withdrawal, leaving behind a desire that once ruled you, and walking away from what still looks beautiful but tastes empty. It is not failure. It is the dignity of refusing to keep drinking from a cup that no longer nourishes the soul.",
    "verdict": "Some cups remain full because the soul has outgrown the thirst.",
    "reversed": "You remain at the table long after the blood has soured. This card may show fear of leaving, emotional dependency, cowardice, stagnation, clinging to a dead desire, or abandoning something only to crawl back to it in shame.",
    "reversedKeywords": [
      "fear of leaving",
      "dependency",
      "stagnation",
      "clinging",
      "cowardice",
      "emotional captivity",
      "return to poison"
    ],
    "reversedVerdict": "The door is open. Your chain is not."
  },
  {
    "id": "blood-nine",
    "sort": 9,
    "roman": "Nine",
    "name": "Nine of Blood Chalices",
    "image": "cards/blood-chalices/nine.webp",
    "keywords": [
      "satisfaction",
      "pleasure",
      "fulfillment",
      "indulgence",
      "desire answered",
      "emotional victory",
      "luxury",
      "contentment"
    ],
    "core": "Wish fulfillment, satisfaction, pleasure, abundance, emotional contentment.",
    "visual": "Belladonna reclines in a decadent chamber before nine blood chalices. Black roses, velvet, candlelight, and satisfied danger. She has received what she wanted.",
    "upright": "The thirst is answered. Pleasure, satisfaction, sensual fulfillment, emotional victory, indulgence, and the dangerous joy of getting what you wanted. This card is fulfillment, but satisfaction reveals character. What you do after being fed says more than what you did while starving.",
    "verdict": "You wanted the cup. You drank. Now discover whether fulfillment makes you grateful, bored, or cruel.",
    "reversed": "Pleasure turns hollow. This card may show gluttony, vanity, emotional greed, selfish indulgence, addiction to satisfaction, or getting exactly what you wanted and discovering it cannot save you. It can also show a false wish, a pleasure that leaves shame behind, or contentment built on someone else’s suffering.",
    "reversedKeywords": [
      "hollow pleasure",
      "greed",
      "gluttony",
      "vanity",
      "selfishness",
      "addiction",
      "shame",
      "false fulfillment"
    ],
    "reversedVerdict": "The mouth is full, and still the soul starves."
  },
  {
    "id": "blood-ten",
    "sort": 10,
    "roman": "Ten",
    "name": "Ten of Blood Chalices",
    "image": "cards/blood-chalices/ten.webp",
    "keywords": [
      "belonging",
      "family",
      "bloodline",
      "fulfillment",
      "emotional completion",
      "loyalty",
      "house",
      "covenant"
    ],
    "core": "Emotional completion, family, belonging, harmony, fulfillment.",
    "visual": "A vampire house or chosen family gathered beneath a blood-red moon. Ten chalices form an arc above them. The scene should feel beautiful, eternal, and faintly terrifying.",
    "upright": "The bloodline is complete. This card is belonging, emotional fulfillment, chosen family, legacy, house, loyalty, and the dark peace of finding those who share your hunger. In this deck, it is the covenant of a house, the feast of a family, the bond of those who recognize one another in blood.",
    "verdict": "A family is not always those who gave you blood. Sometimes it is those who know what your blood is worth.",
    "reversed": "The house becomes a crypt. Family becomes control. Loyalty becomes imprisonment. This card may show bloodline curses, emotional inheritance, toxic family systems, betrayal inside the home, false belonging, or a beautiful household built on fear.",
    "reversedKeywords": [
      "toxic family",
      "bloodline curse",
      "false belonging",
      "emotional inheritance",
      "control",
      "betrayal",
      "poisoned home"
    ],
    "reversedVerdict": "Not every house is a sanctuary. Some are only cages with portraits."
  },
  {
    "id": "blood-acolyte",
    "sort": 11,
    "roman": "Acolyte",
    "name": "Acolyte of Blood Chalices",
    "image": "cards/blood-chalices/acolyte.webp",
    "keywords": [
      "new feeling",
      "message",
      "sensitivity",
      "imagination",
      "intuition",
      "young desire",
      "emotional curiosity"
    ],
    "core": "Page of Cups — emotional openness, messages, imagination, young love, sensitivity.",
    "visual": "A young vampire acolyte holds a blood chalice with both hands, staring into it as if it whispers. A black rose floats on the surface.",
    "upright": "The Acolyte is the first student of thirst. This card represents emotional messages, new sensitivity, artistic feeling, young desire, intuition awakening, and the dangerous innocence of discovering what the heart can want.",
    "verdict": "The first sip teaches more than the oldest sermon.",
    "reversed": "Emotional immaturity, manipulation through weakness, childish seduction, fantasy without discipline, or someone using vulnerability as bait.",
    "reversedKeywords": [
      "immaturity",
      "emotional games",
      "childishness",
      "fantasy",
      "baited vulnerability",
      "insecurity"
    ],
    "reversedVerdict": "Do not mistake trembling hands for a harmless heart."
  },
  {
    "id": "blood-hunter",
    "sort": 12,
    "roman": "Hunter",
    "name": "Hunter of Blood Chalices",
    "image": "cards/blood-chalices/hunter.webp",
    "keywords": [
      "romance",
      "pursuit",
      "charm",
      "seduction",
      "emotional quest",
      "beauty",
      "devotion",
      "invitation"
    ],
    "core": "Knight of Cups — romance, pursuit, idealism, charm, emotional quest.",
    "visual": "A gothic knight or vampire suitor rides through moonlight carrying a blood chalice instead of a weapon. Romantic, dangerous, and too beautiful to trust.",
    "upright": "The Hunter pursues desire. This card represents romance, seduction, emotional pursuit, artistic quest, charm, and the willingness to cross dangerous ground for what the heart wants.",
    "verdict": "The rider carries a chalice, not a sword. Decide which is more dangerous.",
    "reversed": "False romance, seduction without sincerity, emotional manipulation, obsession disguised as devotion, charm used as a weapon, or a beautiful liar.",
    "reversedKeywords": [
      "false romance",
      "manipulation",
      "obsession",
      "insincerity",
      "seduction",
      "emotional fraud"
    ],
    "reversedVerdict": "Beware the lover who gallops beautifully toward your open vein."
  },
  {
    "id": "blood-queen",
    "sort": 13,
    "roman": "Queen",
    "name": "Queen of Blood Chalices",
    "image": "cards/blood-chalices/queen.webp",
    "keywords": [
      "emotional mastery",
      "intuition",
      "compassion",
      "psychic knowing",
      "seduction",
      "depth",
      "sovereignty",
      "receptivity"
    ],
    "core": "Queen of Cups — emotional depth, intuition, compassion, receptivity, psychic feeling.",
    "visual": "Belladonna seated beside a moonlit blood pool, holding a covered chalice. She understands every feeling in the room and reveals none of her own.",
    "upright": "The Queen of Blood Chalices is emotional sovereignty. She feels deeply, but she is not ruled by feeling. She knows desire, grief, seduction, sorrow, and intuition as instruments of power. This card represents psychic sensitivity, emotional mastery, dangerous compassion, and the ability to understand another heart without surrendering one’s own.",
    "verdict": "To understand the heart is not to be ruled by it.",
    "reversed": "Emotional manipulation, possessive love, seductive cruelty, unstable feeling, psychic vampirism, or compassion used to control.",
    "reversedKeywords": [
      "manipulation",
      "possessiveness",
      "emotional instability",
      "psychic vampirism",
      "seductive cruelty",
      "control"
    ],
    "reversedVerdict": "She does not love you. She studies where to place the cup."
  },
  {
    "id": "blood-sovereign",
    "sort": 14,
    "roman": "Sovereign",
    "name": "Sovereign of Blood Chalices",
    "image": "cards/blood-chalices/sovereign.webp",
    "keywords": [
      "emotional authority",
      "maturity",
      "restraint",
      "diplomacy",
      "controlled desire",
      "wisdom",
      "command",
      "depth"
    ],
    "core": "King of Cups — emotional control, wisdom, diplomacy, maturity, calm authority.",
    "visual": "A vampire sovereign sits at the head of a dark banquet table, one hand on a blood chalice, the other on the arm of a throne. The sea or a blood-red river moves behind him.",
    "upright": "The Sovereign of Blood Chalices rules the emotional realm without drowning in it. He understands grief, love, desire, diplomacy, and restraint. This card represents emotional authority, controlled passion, mature feeling, and the ability to command the room without spilling the cup.",
    "verdict": "The true ruler drinks last, because he knows everyone else is thirsty.",
    "reversed": "Emotional tyranny, cold manipulation, addiction hidden behind dignity, cruelty disguised as calm, or a ruler who drains others while pretending to protect them.",
    "reversedKeywords": [
      "emotional tyranny",
      "coldness",
      "manipulation",
      "addiction",
      "cruelty",
      "false calm",
      "predatory control"
    ],
    "reversedVerdict": "A steady hand can still hold a poisoned cup."
  }
];

const cursedWandsCards = [
  {
    "id": "wands-ace",
    "sort": 1,
    "roman": "Ace",
    "name": "Ace of Cursed Wands",
    "image": "cards/cursed-wands/ace.webp",
    "keywords": [
      "ignition",
      "ambition",
      "inspiration",
      "willpower",
      "magic",
      "creative fire",
      "passion",
      "beginning"
    ],
    "core": "New passion, inspiration, creative spark, action, potential.",
    "visual": "A single blackened wand erupts from cracked stone, wrapped in black rose thorns and glowing with crimson fire. Smoke rises from the tip as if the wand has just awakened.",
    "upright": "The first spark of will. A new ambition, spell, passion, creative force, or act of command begins. This is raw power before it has been shaped. It may become art, conquest, desire, or ruin. The Ace of Cursed Wands says the fire has been lit. The question is whether you will direct it or be consumed by it.",
    "verdict": "The wand has awakened. Now prove your hand is worthy of holding it.",
    "reversed": "The spark fails, misfires, or burns in the wrong direction. This may show blocked creativity, impotence of will, wasted passion, false starts, or a curse released before the caster understands it.",
    "reversedKeywords": [
      "blocked will",
      "failed start",
      "wasted passion",
      "misfire",
      "creative impotence",
      "cursed beginning"
    ],
    "reversedVerdict": "A weak flame still burns the fool who mistakes it for a crown."
  },
  {
    "id": "wands-two",
    "sort": 2,
    "roman": "Two",
    "name": "Two of Cursed Wands",
    "image": "cards/cursed-wands/two.webp",
    "keywords": [
      "planning",
      "vision",
      "choice",
      "ambition",
      "strategy",
      "dominion",
      "future power"
    ],
    "core": "Planning, vision, choice, future direction, personal power.",
    "visual": "Belladonna stands on a high balcony holding one black wand while another burns behind her. Below her, roads, kingdoms, or battlefields stretch into darkness.",
    "upright": "Power begins to look outward. You have force, but now you must choose where to send it. This card is strategy, planning, ambition, and the moment before expansion. The Two of Cursed Wands asks whether your vision is large enough for your hunger.",
    "verdict": "You have looked beyond the window. Now decide which horizon deserves your shadow.",
    "reversed": "Fear of expansion, weak planning, domination without direction, or ambition trapped inside fantasy. This card may show someone who wants power but cannot choose a path, or someone who mistakes brooding for strategy.",
    "reversedKeywords": [
      "indecision",
      "fear",
      "weak vision",
      "wasted ambition",
      "hesitation",
      "fantasy of power"
    ],
    "reversedVerdict": "A throne imagined too long becomes a chair in a prison cell."
  },
  {
    "id": "wands-three",
    "sort": 3,
    "roman": "Three",
    "name": "Three of Cursed Wands",
    "image": "cards/cursed-wands/three.webp",
    "keywords": [
      "expansion",
      "progress",
      "foresight",
      "waiting",
      "ambition abroad",
      "strategy",
      "return"
    ],
    "core": "Expansion, foresight, progress, waiting for results.",
    "visual": "Three cursed wands stand like burning standards before a dark sea or battlefield. Belladonna watches distant ships, armies, or messengers returning under a blood-red sky.",
    "upright": "Ambition has been released into the world. Now you wait for its return. This card is expansion, foresight, calculated risk, and watching your will travel beyond your immediate reach. The Three of Cursed Wands suggests your power is no longer private. It has entered the world and begun to shape events.",
    "verdict": "You sent your desire into the dark. Now listen for what comes back wearing its face.",
    "reversed": "Plans fail, messages are delayed, ambition overextends, or the world refuses to obey. This may show failed expansion, arrogance, bad timing, or a strategy that relied too heavily on control.",
    "reversedKeywords": [
      "delay",
      "failed expansion",
      "arrogance",
      "bad timing",
      "overreach",
      "blocked progress"
    ],
    "reversedVerdict": "The world did not betray your plan. Your plan mistook the world for a servant."
  },
  {
    "id": "wands-four",
    "sort": 4,
    "roman": "Four",
    "name": "Four of Cursed Wands",
    "image": "cards/cursed-wands/four.webp",
    "keywords": [
      "ceremony",
      "celebration",
      "victory",
      "house",
      "stability",
      "ritual",
      "recognition",
      "threshold"
    ],
    "core": "Celebration, stability, homecoming, ceremony, foundation.",
    "visual": "Four cursed wands form a ritual arch above a vampire court celebration, dark wedding, victory feast, or castle threshold lit by crimson candles.",
    "upright": "Power becomes ceremony. This card is celebration, victory, ritual, household fire, and the establishment of a place where your will can rest and be recognized. In Belladonna’s deck, the Four of Cursed Wands may be a wedding, a coronation, a pact, a feast, or a dark house opening its doors.",
    "verdict": "Every house is built around a fire. Be certain you know what it is burning.",
    "reversed": "The ceremony curdles. Home becomes a stage. Celebration becomes performance. This card may show false stability, family tension, broken vows, failed rituals, or a house held together by fear.",
    "reversedKeywords": [
      "false stability",
      "broken ceremony",
      "failed ritual",
      "tension",
      "false celebration",
      "unstable home"
    ],
    "reversedVerdict": "A banquet can still be a battlefield if everyone arrives armed with smiles."
  },
  {
    "id": "wands-five",
    "sort": 5,
    "roman": "Five",
    "name": "Five of Cursed Wands",
    "image": "cards/cursed-wands/five.webp",
    "keywords": [
      "conflict",
      "rivalry",
      "competition",
      "struggle",
      "testing",
      "clashing wills",
      "challenge"
    ],
    "core": "Conflict, rivalry, competition, struggle, clashing wills.",
    "visual": "Five cursed wands clash in a ritual garden or battlefield. Sparks fly. The figures may be dueling, casting, or fighting for dominance.",
    "upright": "Wills collide. This card is rivalry, competition, conflict, and the testing of power against power. Not all struggle is destructive. Some fires grow stronger when opposed. The Five of Cursed Wands asks whether the conflict sharpens you or merely entertains your ego.",
    "verdict": "If you cannot survive another flame, you were never fire.",
    "reversed": "Conflict becomes petty, ugly, cowardly, or pointless. This card may show sabotage, ego wars, infighting, bullying, theatrical aggression, or people fighting because they have forgotten what victory means.",
    "reversedKeywords": [
      "sabotage",
      "pettiness",
      "ego",
      "bullying",
      "chaos",
      "pointless conflict",
      "ugly rivalry"
    ],
    "reversedVerdict": "Not every battle is war. Some are only children stabbing the dark with sticks."
  },
  {
    "id": "wands-six",
    "sort": 6,
    "roman": "Six",
    "name": "Six of Cursed Wands",
    "image": "cards/cursed-wands/six.webp",
    "keywords": [
      "victory",
      "recognition",
      "success",
      "praise",
      "triumph",
      "public power",
      "confidence"
    ],
    "core": "Victory, recognition, public success, triumph, confidence.",
    "visual": "Belladonna rides or stands before a crowd, holding a cursed wand like a victory scepter. Red banners, black roses, and candlelight surround her.",
    "upright": "The will is recognized. This card is triumph, public victory, praise, command, and the dangerous pleasure of being seen as powerful. The Six of Cursed Wands rewards boldness, but warns that every victory teaches others where your power lives.",
    "verdict": "Accept the applause. Then count how many hands are hiding knives.",
    "reversed": "Victory becomes vanity, public shame, false praise, arrogance, or collapse after recognition. This card may show humiliation, failure, fragile ego, or a person addicted to applause.",
    "reversedKeywords": [
      "vanity",
      "humiliation",
      "false praise",
      "arrogance",
      "fragile ego",
      "public failure"
    ],
    "reversedVerdict": "Applause is only thunder from people who may leave before the rain."
  },
  {
    "id": "wands-seven",
    "sort": 7,
    "roman": "Seven",
    "name": "Seven of Cursed Wands",
    "image": "cards/cursed-wands/seven.webp",
    "keywords": [
      "defense",
      "resistance",
      "challenge",
      "pressure",
      "courage",
      "position",
      "perseverance"
    ],
    "core": "Defense, resistance, perseverance, standing one’s ground.",
    "visual": "Belladonna stands on a high stone platform, one cursed wand raised against six others rising from below like challengers or accusing spears.",
    "upright": "Power must be defended. This card represents resistance, pressure, challenge, and the need to stand your ground when rivals, enemies, or lesser wills rise against you. The Seven of Cursed Wands says your position is valuable because it is contested.",
    "verdict": "If they rise against you, at least you know you are standing above them.",
    "reversed": "The defense fails or becomes paranoia. This card may show exhaustion, cowardice, over-defensiveness, being overwhelmed, or mistaking every question for an attack.",
    "reversedKeywords": [
      "paranoia",
      "exhaustion",
      "cowardice",
      "overwhelm",
      "collapse",
      "insecurity",
      "defensiveness"
    ],
    "reversedVerdict": "A throne defended from ghosts becomes a coffin."
  },
  {
    "id": "wands-eight",
    "sort": 8,
    "roman": "Eight",
    "name": "Eight of Cursed Wands",
    "image": "cards/cursed-wands/eight.webp",
    "keywords": [
      "speed",
      "momentum",
      "messages",
      "acceleration",
      "movement",
      "swift action",
      "spell in motion"
    ],
    "core": "Speed, movement, messages, rapid action, momentum.",
    "visual": "Eight burning wands streak across a dark sky like cursed comets, spell missiles, or fiery commands sent across the night.",
    "upright": "The spell is in motion. Events accelerate. Messages arrive. Passion moves quickly. The Eight of Cursed Wands is speed, momentum, magical transmission, and consequences traveling faster than regret. This card tells you that the will has been released and cannot easily be recalled.",
    "verdict": "Once the curse leaves your lips, do not ask it to walk slowly.",
    "reversed": "Momentum turns chaotic. Messages misfire. Passion becomes panic. This card may show delays, confusion, scattered force, reckless speed, or consequences arriving before you are ready.",
    "reversedKeywords": [
      "delay",
      "chaos",
      "misfire",
      "panic",
      "scattered energy",
      "reckless speed",
      "confusion"
    ],
    "reversedVerdict": "The arrow does not forgive you because you changed your mind after release."
  },
  {
    "id": "wands-nine",
    "sort": 9,
    "roman": "Nine",
    "name": "Nine of Cursed Wands",
    "image": "cards/cursed-wands/nine.webp",
    "keywords": [
      "endurance",
      "resilience",
      "suspicion",
      "guarded power",
      "survival",
      "persistence",
      "wounded strength"
    ],
    "core": "Resilience, endurance, wounded strength, guarded persistence.",
    "visual": "A wounded figure stands behind nine cursed wands like a defensive barrier. Belladonna watches with blood on her lip, still unbowed.",
    "upright": "The will survives injury. This card is endurance, suspicion, resilience, guarded strength, and the refusal to fall after being burned, betrayed, or challenged. The Nine of Cursed Wands is not peace. It is survival with one hand still on the weapon.",
    "verdict": "You are not unbroken. You are still standing. Sometimes that is more frightening.",
    "reversed": "Endurance curdles into paranoia, exhaustion, bitterness, or collapse. This card may show someone so wounded that every future becomes an enemy, or a person who keeps fighting after the war has ended.",
    "reversedKeywords": [
      "paranoia",
      "exhaustion",
      "bitterness",
      "collapse",
      "trauma",
      "defensiveness",
      "spiritual fatigue"
    ],
    "reversedVerdict": "A wound worshiped long enough becomes a god."
  },
  {
    "id": "wands-ten",
    "sort": 10,
    "roman": "Ten",
    "name": "Ten of Cursed Wands",
    "image": "cards/cursed-wands/ten.webp",
    "keywords": [
      "burden",
      "exhaustion",
      "responsibility",
      "overextension",
      "pressure",
      "duty",
      "ambition’s cost"
    ],
    "core": "Burden, responsibility, overwork, oppression, carrying too much.",
    "visual": "A figure carries ten cursed wands through smoke and ash, bleeding from thorns and flame. The bundle is both treasure and punishment.",
    "upright": "Ambition has become heavy. This card is burden, responsibility, exhaustion, overextension, and the cost of carrying power too long without release. The Ten of Cursed Wands asks whether the load is still serving your will, or whether your will has become a servant of the load.",
    "verdict": "You wanted power. Do not act surprised when it has weight.",
    "reversed": "The burden becomes bondage. This card may show collapse, exploitation, slavery to ambition, refusal to delegate, martyrdom, or being crushed by the very power once desired.",
    "reversedKeywords": [
      "collapse",
      "bondage",
      "exploitation",
      "burnout",
      "martyrdom",
      "crushing responsibility",
      "trapped ambition"
    ],
    "reversedVerdict": "A crown carried on the back is only another kind of chain."
  },
  {
    "id": "wands-acolyte",
    "sort": 11,
    "roman": "Acolyte",
    "name": "Acolyte of Cursed Wands",
    "image": "cards/cursed-wands/acolyte.webp",
    "keywords": [
      "discovery",
      "enthusiasm",
      "young ambition",
      "first spell",
      "curiosity",
      "spark",
      "creative beginning"
    ],
    "core": "Page of Wands — enthusiasm, discovery, creative spark, message, young fire.",
    "visual": "A young occult student holds a blackened wand that sparks crimson flame for the first time. Their eyes reflect wonder and danger.",
    "upright": "The Acolyte is the first awakening of fire. This card represents young ambition, creative curiosity, magical discovery, enthusiasm, and the first dangerous taste of power.",
    "verdict": "The first spell is never small to the hand that casts it.",
    "reversed": "Immaturity, reckless magic, arrogance without skill, wasted enthusiasm, false confidence, or the childish need to prove one has power.",
    "reversedKeywords": [
      "immaturity",
      "recklessness",
      "false confidence",
      "wasted spark",
      "arrogance",
      "impatience"
    ],
    "reversedVerdict": "A child with a wand can still burn down a kingdom."
  },
  {
    "id": "wands-hunter",
    "sort": 12,
    "roman": "Hunter",
    "name": "Hunter of Cursed Wands",
    "image": "cards/cursed-wands/hunter.webp",
    "keywords": [
      "action",
      "passion",
      "conquest",
      "pursuit",
      "boldness",
      "speed",
      "adventure",
      "risk"
    ],
    "core": "Knight of Wands — action, passion, adventure, speed, boldness, recklessness.",
    "visual": "A vampire hunter or dark rider charges through a burning field carrying a cursed wand like a spear of crimson fire.",
    "upright": "The Hunter pursues the fire. This card represents bold action, conquest, passion, risk, movement, and the thrill of chasing desire before fear can interrupt.",
    "verdict": "Some doors only open for those who arrive like flame.",
    "reversed": "Recklessness, lust for conquest, impatience, violence, arrogance, destructive passion, or charging forward because stopping would reveal emptiness.",
    "reversedKeywords": [
      "recklessness",
      "violence",
      "impatience",
      "arrogance",
      "destructive passion",
      "rash action"
    ],
    "reversedVerdict": "He calls it courage because he has never survived stillness."
  },
  {
    "id": "wands-queen",
    "sort": 13,
    "roman": "Queen",
    "name": "Queen of Cursed Wands",
    "image": "cards/cursed-wands/queen.webp",
    "keywords": [
      "charisma",
      "confidence",
      "magnetism",
      "sorcery",
      "command",
      "independence",
      "creative fire"
    ],
    "core": "Queen of Wands — confidence, charisma, independence, warmth, magnetism, creative power.",
    "visual": "Belladonna sits among black roses and crimson candles, holding a cursed wand like a scepter. A familiar or shadow creature waits at her feet.",
    "upright": "The Queen of Cursed Wands is magnetic command. She rules through charisma, beauty, confidence, creative fire, sorcery, and the ability to make others orbit her flame. She is passion disciplined into presence.",
    "verdict": "She does not chase the room. The room rearranges itself around her heat.",
    "reversed": "Jealousy, domination, vanity, possessiveness, magical cruelty, theatrical rage, or charisma used to consume rather than inspire.",
    "reversedKeywords": [
      "jealousy",
      "vanity",
      "domination",
      "rage",
      "possessiveness",
      "cruel charisma",
      "manipulation"
    ],
    "reversedVerdict": "A dying fire grows loud when it can no longer warm anyone."
  },
  {
    "id": "wands-sovereign",
    "sort": 14,
    "roman": "Sovereign",
    "name": "Sovereign of Cursed Wands",
    "image": "cards/cursed-wands/sovereign.webp",
    "keywords": [
      "leadership",
      "mastery",
      "command",
      "vision",
      "ambition",
      "disciplined fire",
      "authority"
    ],
    "core": "King of Wands — leadership, vision, mastery, command, entrepreneurial power.",
    "visual": "A dark sovereign sits on a throne of charred wood and blackened roses, holding a blazing cursed wand. Behind him, banners burn without being consumed.",
    "upright": "The Sovereign of Cursed Wands is mastery of will. This card represents leadership, command, vision, ambition, disciplined fire, and the ability to make desire into law. He does not merely act. He directs action.",
    "verdict": "The true ruler does not burn everything. He decides what must remain warm enough to obey.",
    "reversed": "Tyranny, domination, rage, arrogance, abusive leadership, cruelty, burned-out ambition, or a ruler who confuses fear with loyalty.",
    "reversedKeywords": [
      "tyranny",
      "arrogance",
      "abuse",
      "rage",
      "cruelty",
      "domination",
      "false leadership"
    ],
    "reversedVerdict": "A tyrant is only a fire that forgot it needs air."
  }
];

const silverBladesCards = [
  {
    "id": "blades-ace",
    "sort": 1,
    "roman": "Ace",
    "name": "Ace of Silver Blades",
    "image": "cards/silver-blades/ace.webp",
    "keywords": [
      "truth",
      "clarity",
      "breakthrough",
      "decision",
      "intellect",
      "revelation",
      "sharp perception",
      "first cut"
    ],
    "core": "Truth, clarity, breakthrough, intellect, decision, new idea.",
    "visual": "A single silver blade descends from black clouds, catching moonlight at its edge. A thin line of blood runs down the blade, though no hand holds it. Ravens circle above.",
    "upright": "The first cut of truth. A new idea, revelation, decision, or moment of clarity appears. The fog parts. The lie weakens. The mind sharpens. The Ace of Silver Blades is not comfort. It is the power to see, speak, decide, and sever. Something must be named clearly before it can be controlled.",
    "verdict": "The blade has appeared. Now decide whether you fear the wound more than the lie.",
    "reversed": "The truth is twisted, delayed, or used badly. This may show confusion, false certainty, cruel speech, lies disguised as insight, or a decision made with a poisoned mind.",
    "reversedKeywords": [
      "confusion",
      "false clarity",
      "cruel words",
      "lies",
      "bad judgment",
      "mental fog",
      "twisted truth"
    ],
    "reversedVerdict": "A dull blade still cuts. It simply makes the wound uglier."
  },
  {
    "id": "blades-two",
    "sort": 2,
    "roman": "Two",
    "name": "Two of Silver Blades",
    "image": "cards/silver-blades/two.webp",
    "keywords": [
      "indecision",
      "stalemate",
      "guardedness",
      "difficult choice",
      "blocked truth",
      "emotional restraint"
    ],
    "core": "Indecision, stalemate, blocked emotions, difficult choice.",
    "visual": "A blindfolded figure holds two crossed silver blades before her heart. Behind her, a dark moon hangs over still water. Belladonna watches from shadow.",
    "upright": "A choice is being delayed because both truths wound. This card is stalemate, guarded thought, emotional suppression, and the cold discipline of refusing to move until the correct cut is clear. The Two of Silver Blades asks what you are avoiding because seeing it would require action.",
    "verdict": "Crossed blades are still blades. Refusal is also a decision.",
    "reversed": "The stalemate becomes cowardice. This card may show denial, paralysis, self-deception, refusal to choose, or being trapped between two lies because the truth demands too much.",
    "reversedKeywords": [
      "denial",
      "cowardice",
      "paralysis",
      "avoidance",
      "self-deception",
      "blocked decision",
      "inner conflict"
    ],
    "reversedVerdict": "The blindfold does not protect you from the blade. It only ensures you will not see who holds it."
  },
  {
    "id": "blades-three",
    "sort": 3,
    "roman": "Three",
    "name": "Three of Silver Blades",
    "image": "cards/silver-blades/three.webp",
    "keywords": [
      "heartbreak",
      "betrayal",
      "sorrow",
      "painful truth",
      "grief",
      "wound",
      "revelation through pain"
    ],
    "core": "Heartbreak, sorrow, betrayal, painful truth, emotional wound.",
    "visual": "Three silver daggers pierce a black heart pinned against crimson velvet. Rain falls like tears across a broken mirror.",
    "upright": "The heart is cut open, and something true is revealed. This card is heartbreak, betrayal, sorrow, grief, and the pain of discovering what sentiment tried to hide. The Three of Silver Blades does not celebrate suffering. It says that some truths enter through the heart because the mind refused to open.",
    "verdict": "The heart bleeds because it finally understands what the mouth kept excusing.",
    "reversed": "Pain becomes poison. This card may show cruelty, emotional sadism, old wounds weaponized, self-harm through memory, bitterness, or someone who keeps twisting the blade to feel alive.",
    "reversedKeywords": [
      "bitterness",
      "cruelty",
      "emotional sadism",
      "old wounds",
      "resentment",
      "poisoned grief",
      "self-torment"
    ],
    "reversedVerdict": "You are not healing the wound. You are decorating the knife."
  },
  {
    "id": "blades-four",
    "sort": 4,
    "roman": "Four",
    "name": "Four of Silver Blades",
    "image": "cards/silver-blades/four.webp",
    "keywords": [
      "rest",
      "recovery",
      "retreat",
      "silence",
      "contemplation",
      "pause",
      "strategic withdrawal"
    ],
    "core": "Rest, recovery, retreat, contemplation, withdrawal after conflict.",
    "visual": "A pale figure lies in a stone crypt beneath four silver blades suspended above like silent judgment. The chamber is peaceful, but not warm.",
    "upright": "The mind retreats to survive. This card is rest, recovery, silence, strategic withdrawal, and the pause required after conflict or grief. The Four of Silver Blades says not every battle is won by motion. Sometimes the blade must be sheathed before it can be sharpened.",
    "verdict": "Lie still. Even a blade must sleep before it kills cleanly.",
    "reversed": "Rest becomes stagnation or collapse. This card may show mental exhaustion, isolation, avoidance, refusal to recover, or a mind locked in the tomb long after the war has ended.",
    "reversedKeywords": [
      "exhaustion",
      "stagnation",
      "isolation",
      "avoidance",
      "mental collapse",
      "refusal to heal"
    ],
    "reversedVerdict": "A crypt is only sanctuary until you forget how to leave it."
  },
  {
    "id": "blades-five",
    "sort": 5,
    "roman": "Five",
    "name": "Five of Silver Blades",
    "image": "cards/silver-blades/five.webp",
    "keywords": [
      "conflict",
      "hollow victory",
      "defeat",
      "humiliation",
      "strategy",
      "cruelty",
      "cost of winning"
    ],
    "core": "Conflict, defeat, hollow victory, humiliation, winning at a cost.",
    "visual": "A victorious figure holds several silver blades while defeated enemies retreat across a moonlit battlefield. Belladonna smiles from the fog.",
    "upright": "Victory has been won, but the air smells of disgrace. This card is conflict, defeat, humiliation, strategic cruelty, and the uneasy triumph of winning through sharpness rather than honor. The Five of Silver Blades asks whether the victory was worth the damage — and whether the damage was the point.",
    "verdict": "You won. Now ask why the silence after victory sounds like accusation.",
    "reversed": "Cruelty becomes uglier. This card may show cowardly attacks, backstabbing, abuse, humiliation for pleasure, surrender without dignity, or a person who would rather ruin the field than lose the game.",
    "reversedKeywords": [
      "backstabbing",
      "abuse",
      "cowardice",
      "spite",
      "humiliation",
      "disgrace",
      "vicious defeat"
    ],
    "reversedVerdict": "A blade raised after the battle is not strategy. It is appetite."
  },
  {
    "id": "blades-six",
    "sort": 6,
    "roman": "Six",
    "name": "Six of Silver Blades",
    "image": "cards/silver-blades/six.webp",
    "keywords": [
      "transition",
      "departure",
      "escape",
      "recovery",
      "passage",
      "moving on",
      "exile",
      "mental distance"
    ],
    "core": "Transition, moving on, leaving difficulty, passage, mental healing.",
    "visual": "A black boat crosses dark water beneath a moonlit sky. Six silver blades stand upright in the boat like silent passengers. A cloaked figure moves away from a ruined shore.",
    "upright": "The mind leaves the battlefield. This card is transition, exile, escape, recovery, and the painful intelligence of moving away from what cannot be solved by staying. The Six of Silver Blades does not promise joy. It promises distance. Sometimes distance is the first mercy.",
    "verdict": "Leave the shore. Some wounds only stop speaking when the water is between you.",
    "reversed": "The passage is blocked. This card may show inability to move on, being trapped by memory, returning to pain, exile without hope, or carrying the blades so long they become home.",
    "reversedKeywords": [
      "stuckness",
      "trapped memory",
      "failed escape",
      "return to pain",
      "hopeless transition",
      "emotional exile"
    ],
    "reversedVerdict": "You crossed the water and brought the prison in your mouth."
  },
  {
    "id": "blades-seven",
    "sort": 7,
    "roman": "Seven",
    "name": "Seven of Silver Blades",
    "image": "cards/silver-blades/seven.webp",
    "keywords": [
      "strategy",
      "deception",
      "stealth",
      "secrecy",
      "theft",
      "cunning",
      "hidden movement",
      "evasion"
    ],
    "core": "Deception, stealth, strategy, theft, secrecy, hidden action.",
    "visual": "A masked figure slips away from a sleeping court carrying five silver blades, while two remain behind in the moonlight. A raven watches from a broken arch.",
    "upright": "Not every truth announces itself. This card is strategy, stealth, deception, hidden movement, and the intelligence of acting where open confrontation would be foolish. The Seven of Silver Blades asks whether secrecy is protecting you or corrupting you.",
    "verdict": "A stolen blade cuts just as cleanly as an inherited one.",
    "reversed": "Deception curdles into betrayal. This card may show exposure, lies collapsing, cowardice, theft, manipulation, treachery, or a strategy so clever it devours the strategist.",
    "reversedKeywords": [
      "betrayal",
      "exposure",
      "lies",
      "cowardice",
      "theft",
      "manipulation",
      "treachery",
      "collapse"
    ],
    "reversedVerdict": "The thief is always shocked when the shadows learn his name."
  },
  {
    "id": "blades-eight",
    "sort": 8,
    "roman": "Eight",
    "name": "Eight of Silver Blades",
    "image": "cards/silver-blades/eight.webp",
    "keywords": [
      "restriction",
      "fear",
      "mental prison",
      "helplessness",
      "limitation",
      "trapped thought",
      "anxiety"
    ],
    "core": "Restriction, fear, feeling trapped, mental prison, self-limitation.",
    "visual": "A blindfolded figure stands bound within a circle of eight silver blades. The ropes are loose enough to escape, but fear keeps her still.",
    "upright": "The prison is real, but not absolute. This card is restriction, fear, mental entrapment, helplessness, and the cruel architecture of thoughts that become walls. The Eight of Silver Blades asks which blade is actually holding you — and which one you only imagine.",
    "verdict": "The cage was built from blades, but you supplied the lock.",
    "reversed": "The prison becomes identity. This card may show despair, victimhood, psychological paralysis, self-sabotage, panic, or refusing escape because freedom would require responsibility.",
    "reversedKeywords": [
      "despair",
      "victimhood",
      "paralysis",
      "panic",
      "self-sabotage",
      "refusal of freedom",
      "mental collapse"
    ],
    "reversedVerdict": "Some prisoners polish the bars because they fear the door."
  },
  {
    "id": "blades-nine",
    "sort": 9,
    "roman": "Nine",
    "name": "Nine of Silver Blades",
    "image": "cards/silver-blades/nine.webp",
    "keywords": [
      "anxiety",
      "guilt",
      "nightmares",
      "dread",
      "insomnia",
      "mental torment",
      "fear",
      "anguish"
    ],
    "core": "Anxiety, nightmares, guilt, despair, mental anguish.",
    "visual": "A figure sits awake in a dark bed beneath nine silver blades mounted on the wall. Shadows gather like accusing witnesses.",
    "upright": "The mind becomes a chamber of knives. This card is anxiety, guilt, nightmares, dread, insomnia, and the torment of thoughts that strike when the world goes quiet. The Nine of Silver Blades does not always mean danger outside you. Sometimes the executioner has learned your voice.",
    "verdict": "The night did not invent the blade. It merely removed the distractions.",
    "reversed": "The nightmare deepens into despair, self-hatred, paranoia, breakdown, or secret suffering that festers unseen. This card can also show refusing help because misery has become private religion.",
    "reversedKeywords": [
      "despair",
      "paranoia",
      "breakdown",
      "self-hatred",
      "secret suffering",
      "torment",
      "collapse"
    ],
    "reversedVerdict": "When the mind becomes a torturer, it knows exactly where you are softest."
  },
  {
    "id": "blades-ten",
    "sort": 10,
    "roman": "Ten",
    "name": "Ten of Silver Blades",
    "image": "cards/silver-blades/ten.webp",
    "keywords": [
      "ruin",
      "betrayal",
      "collapse",
      "finality",
      "painful ending",
      "defeat",
      "end of denial"
    ],
    "core": "Ruin, betrayal, painful ending, collapse, finality.",
    "visual": "A figure lies beneath ten silver blades under a cold moon. The horizon glows faintly behind them, suggesting the end is final but not meaningless.",
    "upright": "The final blade has fallen. This card is ruin, betrayal, collapse, painful ending, and the merciful cruelty of knowing that denial is over. The Ten of Silver Blades is brutal, but clear. Something cannot continue. The corpse of the lie is now visible.",
    "verdict": "There is dignity in an ending that leaves no room for begging.",
    "reversed": "The ending becomes degradation. This card may show lingering collapse, repeated betrayal, refusing to die cleanly, melodrama, victimhood, or a ruin dragged out because someone fears what follows.",
    "reversedKeywords": [
      "lingering ruin",
      "degradation",
      "repeated betrayal",
      "melodrama",
      "victimhood",
      "refusal to end"
    ],
    "reversedVerdict": "The last blade fell long ago. You are the one still performing the death."
  },
  {
    "id": "blades-acolyte",
    "sort": 11,
    "roman": "Acolyte",
    "name": "Acolyte of Silver Blades",
    "image": "cards/silver-blades/acolyte.webp",
    "keywords": [
      "curiosity",
      "observation",
      "vigilance",
      "message",
      "investigation",
      "alertness",
      "young intellect"
    ],
    "core": "Page of Swords — curiosity, vigilance, messages, observation, mental energy.",
    "visual": "A young watcher holds a silver dagger before a cracked mirror. Ravens gather nearby. Their eyes are sharp, suspicious, and hungry for truth.",
    "upright": "The Acolyte is the first student of the blade. This card represents curiosity, observation, messages, alertness, investigation, and the young mind learning that truth can wound.",
    "verdict": "The first truth is a small blade. It still knows how to draw blood.",
    "reversed": "Gossip, spying, cruelty through words, paranoia, immature judgment, false accusations, or a person who mistakes suspicion for intelligence.",
    "reversedKeywords": [
      "gossip",
      "spying",
      "paranoia",
      "false accusation",
      "immaturity",
      "cruel words",
      "suspicion"
    ],
    "reversedVerdict": "A little blade in a foolish hand is still a danger to the room."
  },
  {
    "id": "blades-hunter",
    "sort": 12,
    "roman": "Hunter",
    "name": "Hunter of Silver Blades",
    "image": "cards/silver-blades/hunter.webp",
    "keywords": [
      "confrontation",
      "pursuit",
      "decisive action",
      "argument",
      "force",
      "aggressive truth",
      "mental speed"
    ],
    "core": "Knight of Swords — action, force, argument, ambition, impulsive intellect.",
    "visual": "A dark rider charges through storm and fog, silver blade drawn, ravens scattering before him.",
    "upright": "The Hunter pursues truth without waiting for permission. This card represents confrontation, decisive action, argument, aggressive intellect, and the refusal to let a lie escape.",
    "verdict": "He does not ask whether the truth is ready. He rides until it bleeds.",
    "reversed": "Reckless accusation, cruelty, verbal violence, impulsive decisions, intellectual arrogance, or charging into conflict because silence feels like weakness.",
    "reversedKeywords": [
      "recklessness",
      "accusation",
      "verbal violence",
      "arrogance",
      "impulsiveness",
      "cruelty",
      "conflict"
    ],
    "reversedVerdict": "He calls it honesty because brutality sounds less noble."
  },
  {
    "id": "blades-queen",
    "sort": 13,
    "roman": "Queen",
    "name": "Queen of Silver Blades",
    "image": "cards/silver-blades/queen.webp",
    "keywords": [
      "perception",
      "independence",
      "boundaries",
      "honesty",
      "intelligence",
      "discernment",
      "cold clarity"
    ],
    "core": "Queen of Swords — independence, perception, boundaries, honesty, intelligence, grief.",
    "visual": "Belladonna sits on a cold throne beneath a moonlit window, silver blade upright in one hand, her expression calm enough to frighten.",
    "upright": "The Queen of Silver Blades is merciless perception. She sees through masks, lies, sentiment, and weakness. She is independent, intelligent, wounded, and unwilling to soften truth for the comfort of fools. This card represents boundaries, clarity, discernment, and the elegance of a mind that cannot be easily deceived.",
    "verdict": "She does not need to raise her voice. The truth kneels when she enters.",
    "reversed": "Cruelty, bitterness, emotional coldness, vindictiveness, weaponized intelligence, loneliness disguised as superiority, or a person who cuts because they cannot trust warmth.",
    "reversedKeywords": [
      "cruelty",
      "bitterness",
      "vindictiveness",
      "coldness",
      "superiority",
      "weaponized truth",
      "isolation"
    ],
    "reversedVerdict": "A frozen heart can still be sharp. That does not make it wise."
  },
  {
    "id": "blades-sovereign",
    "sort": 14,
    "roman": "Sovereign",
    "name": "Sovereign of Silver Blades",
    "image": "cards/silver-blades/sovereign.webp",
    "keywords": [
      "authority",
      "judgment",
      "strategy",
      "discipline",
      "intellect",
      "law",
      "command",
      "analysis"
    ],
    "core": "King of Swords — authority, intellect, law, judgment, strategy, discipline.",
    "visual": "A stern ruler sits in a black judicial hall, silver blade across his knees, ravens on the columns, law books and broken masks at his feet.",
    "upright": "The Sovereign of Silver Blades rules through intellect, law, strategy, and judgment. He is disciplined, analytical, and difficult to deceive. This card represents authority of mind, command of truth, and the power to decide without sentiment.",
    "verdict": "The ruler of blades does not need rage. A sentence is colder than a scream.",
    "reversed": "Tyrannical judgment, legal cruelty, intellectual abuse, manipulation, cold domination, corrupt authority, or a mind that uses law as a cage rather than a structure.",
    "reversedKeywords": [
      "tyranny",
      "manipulation",
      "legal cruelty",
      "cold domination",
      "corrupt judgment",
      "intellectual abuse"
    ],
    "reversedVerdict": "When the judge loves the blade more than the truth, every verdict becomes murder."
  }
];

const pentaclesOfTheGraveCards = [
  {
    "id": "pentacles-ace",
    "sort": 1,
    "roman": "Ace",
    "name": "Ace of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/ace.webp",
    "keywords": [
      "opportunity",
      "money",
      "work",
      "resources",
      "beginning",
      "contract",
      "security",
      "material seed"
    ],
    "core": "Material opportunity, prosperity, new work, resources, physical beginning.",
    "visual": "A golden pentacle seal lies on black velvet inside an open grave. A single drop of blood stains the coin. Pale roots curl around it like fingers.",
    "upright": "A material opportunity appears. Money, work, land, body, craft, inheritance, or practical power begins to take form. This is the first coin, the first contract, the first key, the first stone laid over the earth. The Ace of Pentacles of the Grave says something real is being offered. But everything real has weight.",
    "verdict": "The coin is in your hand. Now ask whose grave it was dug from.",
    "reversed": "The opportunity is tainted, delayed, false, or already owned by someone else. This may show bad contracts, greed, missed chances, financial traps, bodily neglect, or an offer that costs more than it promises.",
    "reversedKeywords": [
      "bad offer",
      "greed",
      "financial trap",
      "missed chance",
      "false security",
      "tainted opportunity",
      "debt"
    ],
    "reversedVerdict": "Some coins are not paid. They are planted."
  },
  {
    "id": "pentacles-two",
    "sort": 2,
    "roman": "Two",
    "name": "Two of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/two.webp",
    "keywords": [
      "balance",
      "adaptation",
      "resources",
      "juggling",
      "survival",
      "flexibility",
      "financial motion",
      "obligations"
    ],
    "core": "Balance, juggling resources, adaptation, financial choices, instability.",
    "visual": "A figure balances two gold grave-pentacles while standing between a ledger and an open coffin. Behind them, ships or hearses move through stormy waves.",
    "upright": "The material world demands balance. Money, time, body, work, duty, and survival must be managed carefully. This card is adaptation, juggling obligations, and learning how to keep power moving without dropping what matters. The Two of Pentacles of the Grave asks whether you are managing your life or merely dancing for your debts.",
    "verdict": "You may dance with two coins, but remember: the grave waits patiently for you to drop one.",
    "reversed": "The balance fails. Debt, chaos, exhaustion, poor management, financial panic, bodily strain, or obligations multiplying beyond control. This card may show someone crushed by the very tasks they once thought they could handle.",
    "reversedKeywords": [
      "instability",
      "debt",
      "chaos",
      "exhaustion",
      "poor management",
      "overwhelm",
      "financial panic"
    ],
    "reversedVerdict": "You called it balance because collapse had not yet chosen a side."
  },
  {
    "id": "pentacles-three",
    "sort": 3,
    "roman": "Three",
    "name": "Three of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/three.webp",
    "keywords": [
      "craft",
      "work",
      "collaboration",
      "skill",
      "structure",
      "planning",
      "building",
      "expertise"
    ],
    "core": "Skill, work, collaboration, craftsmanship, building, recognition.",
    "visual": "Three artisans, undertakers, or occult masons carve pentacle seals into a mausoleum wall while Belladonna oversees the work by candlelight.",
    "upright": "The tomb is built by skilled hands. This card represents craft, collaboration, labor, planning, expertise, and the practical work required to make power last. The Three of Pentacles of the Grave says talent must become structure. A dream is worthless until someone knows how to carve it into stone.",
    "verdict": "Even a curse requires a competent mason.",
    "reversed": "Poor work, failed collaboration, exploitation, incompetence, vanity without skill, or labor taken without respect. This card may show a project collapsing because the foundation was built by ego rather than craft.",
    "reversedKeywords": [
      "incompetence",
      "poor craft",
      "exploitation",
      "failed teamwork",
      "vanity",
      "weak foundation"
    ],
    "reversedVerdict": "A crooked tomb still holds a body. It simply shames the family longer."
  },
  {
    "id": "pentacles-four",
    "sort": 4,
    "roman": "Four",
    "name": "Four of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/four.webp",
    "keywords": [
      "control",
      "security",
      "possession",
      "saving",
      "guarding",
      "boundaries",
      "material protection"
    ],
    "core": "Holding on, control, security, possessiveness, saving, hoarding.",
    "visual": "A vampire noble sits inside a locked crypt clutching four gold pentacles. One rests under each hand, one at the heart, one beneath the feet. Coffers and bones surround them.",
    "upright": "Power is being guarded. This card represents possession, savings, control, material security, boundaries, and the instinct to hold what has been earned or stolen. The Four of Pentacles of the Grave is not automatically greed. Sometimes the crypt must be locked. But it asks whether security has become fear with better furniture.",
    "verdict": "Lock the vault if you must. But know whether you are protecting treasure or sleeping inside your own coffin.",
    "reversed": "Hoarding, greed, fear of loss, financial paranoia, possessiveness, material obsession, or being imprisoned by what one refuses to release.",
    "reversedKeywords": [
      "hoarding",
      "greed",
      "paranoia",
      "possessiveness",
      "fear of loss",
      "material prison",
      "obsession"
    ],
    "reversedVerdict": "A clenched hand cannot receive. It can only become another lock."
  },
  {
    "id": "pentacles-five",
    "sort": 5,
    "roman": "Five",
    "name": "Five of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/five.webp",
    "keywords": [
      "poverty",
      "hardship",
      "illness",
      "exclusion",
      "loss",
      "need",
      "rejection",
      "material suffering"
    ],
    "core": "Poverty, hardship, exclusion, illness, loss, material suffering.",
    "visual": "Two figures pass a lit mausoleum window in snow or grave ash, wounded and hungry, while five pentacle seals glow from inside where they are not welcomed.",
    "upright": "The material world turns cold. This card is poverty, exclusion, illness, hardship, rejection, and the humiliation of needing shelter from those who claim virtue while keeping the door barred. The Five of Pentacles of the Grave asks what suffering has revealed about power, dependency, and who is allowed inside.",
    "verdict": "The locked door teaches more about wealth than the banquet behind it.",
    "reversed": "Despair, degradation, abandonment, spiritual and material starvation, shame, refusal of help, or being trapped in poverty so long it becomes identity.",
    "reversedKeywords": [
      "despair",
      "abandonment",
      "degradation",
      "shame",
      "starvation",
      "hopelessness",
      "refusal of help"
    ],
    "reversedVerdict": "There are graves warmer than a world that has decided you are expensive to save."
  },
  {
    "id": "pentacles-six",
    "sort": 6,
    "roman": "Six",
    "name": "Six of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/six.webp",
    "keywords": [
      "charity",
      "patronage",
      "generosity",
      "exchange",
      "debt",
      "support",
      "power imbalance"
    ],
    "core": "Charity, generosity, giving and receiving, patronage, power imbalance.",
    "visual": "A gloved noble hand drops a gold pentacle into the palm of a kneeling figure while the other hand hides a ledger, contract, or leash.",
    "upright": "Resources change hands, but never innocently. This card is charity, patronage, generosity, debt, exchange, and the unequal power between the giver and the receiver. The Six of Pentacles of the Grave asks who benefits from generosity, and what is expected after the coin touches the palm.",
    "verdict": "A gift is only free until the giver remembers your name.",
    "reversed": "Exploitation, debt traps, humiliation through charity, false generosity, financial control, bribery, or help given only to purchase obedience.",
    "reversedKeywords": [
      "exploitation",
      "bribery",
      "debt",
      "humiliation",
      "false generosity",
      "control",
      "dependency"
    ],
    "reversedVerdict": "Beware the hand that feeds you only to measure the collar."
  },
  {
    "id": "pentacles-seven",
    "sort": 7,
    "roman": "Seven",
    "name": "Seven of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/seven.webp",
    "keywords": [
      "patience",
      "investment",
      "waiting",
      "assessment",
      "harvest",
      "long-term work",
      "cultivation"
    ],
    "core": "Patience, investment, waiting, assessment, long-term growth.",
    "visual": "A figure stands in a graveyard garden where seven pentacles grow like gold fruit from black roots. The harvest is not yet ready.",
    "upright": "The grave has been planted. Now you wait. This card is investment, patience, assessment, labor over time, and the slow growth of material consequence. The Seven of Pentacles of the Grave asks whether what you are cultivating will be worth the years it steals.",
    "verdict": "Do not curse the grave for being slow. You chose to plant something that feeds on time.",
    "reversed": "Wasted effort, impatience, poor investment, failure to harvest, labor without reward, or realizing too late that the crop was poison.",
    "reversedKeywords": [
      "wasted effort",
      "impatience",
      "poor investment",
      "failure",
      "bad harvest",
      "exhaustion",
      "disappointment"
    ],
    "reversedVerdict": "Not every seed deserves a season. Some should have been buried and forgotten."
  },
  {
    "id": "pentacles-eight",
    "sort": 8,
    "roman": "Eight",
    "name": "Eight of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/eight.webp",
    "keywords": [
      "work",
      "skill",
      "discipline",
      "apprenticeship",
      "craft",
      "mastery",
      "practice",
      "diligence"
    ],
    "core": "Apprenticeship, skill, work, diligence, mastery through repetition.",
    "visual": "An artisan engraves eight pentacle seals onto coffin plates, coins, or crypt stones by candlelight. Their hands are tired but precise.",
    "upright": "Power is made by repetition. This card is labor, apprenticeship, craft, discipline, practice, and the patient work of turning skill into value. The Eight of Pentacles of the Grave says mastery is not glamorous. It is the hand returning to the tool until the world must respect the mark it leaves.",
    "verdict": "The grave remembers the hand that carved it.",
    "reversed": "Bad work, laziness, exploitation, meaningless labor, perfectionism that becomes punishment, or being trapped in work that drains the body without building power.",
    "reversedKeywords": [
      "poor work",
      "exploitation",
      "laziness",
      "meaningless labor",
      "perfectionism",
      "drudgery",
      "burnout"
    ],
    "reversedVerdict": "Labor without purpose is just a slower burial."
  },
  {
    "id": "pentacles-nine",
    "sort": 9,
    "roman": "Nine",
    "name": "Nine of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/nine.webp",
    "keywords": [
      "luxury",
      "independence",
      "refinement",
      "self-sufficiency",
      "wealth",
      "comfort",
      "earned power"
    ],
    "core": "Luxury, independence, self-sufficiency, refinement, earned abundance.",
    "visual": "Belladonna stands in a moonlit grave garden wearing black silk and gold jewelry, surrounded by nine pentacle seals, ravens, roses, and locked gates. She owns the night around her.",
    "upright": "Luxury has been earned or claimed. This card is independence, refinement, self-sufficiency, wealth, sensual comfort, and the pleasure of standing inside a world built by one’s own power. The Nine of Pentacles of the Grave is not simple comfort. It is the elegance of not needing permission.",
    "verdict": "She does not ask to enter the garden. The keys are already in her blood.",
    "reversed": "Luxury becomes loneliness, dependence disguised as independence, vanity, financial fragility, kept comfort, or beauty purchased at the cost of freedom.",
    "reversedKeywords": [
      "loneliness",
      "vanity",
      "dependence",
      "fragile wealth",
      "false independence",
      "trapped luxury"
    ],
    "reversedVerdict": "A gilded cage is still honest enough to call itself a cage if you stop praising the gold."
  },
  {
    "id": "pentacles-ten",
    "sort": 10,
    "roman": "Ten",
    "name": "Ten of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/ten.webp",
    "keywords": [
      "legacy",
      "inheritance",
      "family wealth",
      "dynasty",
      "estate",
      "ancestry",
      "stability",
      "bloodline"
    ],
    "core": "Legacy, family wealth, inheritance, dynasty, long-term stability.",
    "visual": "A vampire family estate rises behind ten grave pentacles. Ancestral portraits, coffins, heirs, hounds, old coins, and bloodline seals fill the scene.",
    "upright": "The bloodline has built something that survives the body. This card is legacy, dynasty, inheritance, family wealth, land, estate, ancestral power, and the material structures that outlive individual desire. The Ten of Pentacles of the Grave asks what you will inherit, what you will leave behind, and whether the family tomb is a monument or a warning.",
    "verdict": "The dead do not leave wealth behind. They leave instructions.",
    "reversed": "Cursed inheritance, family corruption, bloodline debt, estate conflict, material ruin, ancestral rot, or being trapped by the legacy one was supposed to benefit from.",
    "reversedKeywords": [
      "cursed inheritance",
      "family corruption",
      "bloodline debt",
      "estate conflict",
      "ruin",
      "ancestral trap"
    ],
    "reversedVerdict": "Some families pass down jewels. Others pass down graves with room inside."
  },
  {
    "id": "pentacles-acolyte",
    "sort": 11,
    "roman": "Acolyte",
    "name": "Acolyte of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/acolyte.webp",
    "keywords": [
      "study",
      "opportunity",
      "apprenticeship",
      "new work",
      "practical learning",
      "manifestation",
      "discipline"
    ],
    "core": "Page of Pentacles — study, opportunity, practical learning, manifestation, new work.",
    "visual": "A young apprentice studies a gold pentacle seal by candlelight in a crypt library. A ledger, bone quill, and grave deed sit nearby.",
    "upright": "The Acolyte is the student of material power. This card represents learning, apprenticeship, new work, financial opportunity, practical study, and the first serious encounter with the world of value.",
    "verdict": "The first coin teaches what sermons conceal.",
    "reversed": "Laziness, wasted opportunity, poor study, material immaturity, bad habits, foolish spending, or wanting rewards without learning the cost of value.",
    "reversedKeywords": [
      "laziness",
      "wasted chance",
      "immaturity",
      "poor habits",
      "foolish spending",
      "lack of discipline"
    ],
    "reversedVerdict": "A child who mocks the ledger will still inherit the debt."
  },
  {
    "id": "pentacles-hunter",
    "sort": 12,
    "roman": "Hunter",
    "name": "Hunter of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/hunter.webp",
    "keywords": [
      "patience",
      "responsibility",
      "persistence",
      "routine",
      "work",
      "slow gain",
      "discipline",
      "duty"
    ],
    "core": "Knight of Pentacles — patience, work, routine, responsibility, persistence.",
    "visual": "A dark rider moves slowly through a cemetery road carrying a locked chest, grave deed, or gold pentacle shield. His horse is steady, not swift.",
    "upright": "The Hunter pursues material power through patience. This card represents discipline, responsibility, routine, persistence, slow gain, and the willingness to carry the burden until it becomes wealth.",
    "verdict": "The slow rider arrives with fewer songs and more keys.",
    "reversed": "Stagnation, stubbornness, drudgery, laziness, lifeless routine, fear of change, or working so faithfully for a cage that one forgets to look for a door.",
    "reversedKeywords": [
      "stagnation",
      "stubbornness",
      "drudgery",
      "laziness",
      "lifeless routine",
      "fear",
      "dead labor"
    ],
    "reversedVerdict": "A rut is only a grave that has not yet closed over you."
  },
  {
    "id": "pentacles-queen",
    "sort": 13,
    "roman": "Queen",
    "name": "Queen of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/queen.webp",
    "keywords": [
      "security",
      "luxury",
      "nurture",
      "practicality",
      "sensuality",
      "wealth",
      "home",
      "resource power"
    ],
    "core": "Queen of Pentacles — nurture, security, luxury, practicality, sensual earth power.",
    "visual": "Belladonna sits in a luxurious crypt-garden with black roses, gold coins, velvet, candles, and a pentacle seal in her hand. She is both hostess and owner.",
    "upright": "The Queen of Pentacles of the Grave is material sovereignty made sensual. She understands comfort, wealth, body, home, food, beauty, security, and the management of resources. She nurtures, but not foolishly. Her generosity has gates. Her house has locks. Her luxury is an instrument of power.",
    "verdict": "Her table is generous because her doors are locked.",
    "reversed": "Possessive nurture, material vanity, smothering control, greed hidden as care, domestic tyranny, or luxury used to trap rather than shelter.",
    "reversedKeywords": [
      "possessiveness",
      "greed",
      "smothering",
      "vanity",
      "domestic control",
      "false nurture",
      "trapped comfort"
    ],
    "reversedVerdict": "She feeds you so you forget where the exits are."
  },
  {
    "id": "pentacles-sovereign",
    "sort": 14,
    "roman": "Sovereign",
    "name": "Sovereign of Pentacles of the Grave",
    "image": "cards/pentacles-of-the-grave/sovereign.webp",
    "keywords": [
      "wealth",
      "authority",
      "property",
      "dynasty",
      "mastery",
      "stability",
      "business",
      "material command"
    ],
    "core": "King of Pentacles — wealth, authority, business, stability, mastery of resources.",
    "visual": "A vampire sovereign sits in a black marble vault-throne surrounded by coins, ledgers, coffins, estate maps, and pentacle seals. He owns more than gold; he owns consequences.",
    "upright": "The Sovereign of Pentacles of the Grave rules the material world. He represents wealth, authority, property, dynasty, business, stability, and mastery over resources. This card is worldly power made durable. It asks how wealth is built, protected, inherited, and used.",
    "verdict": "Gold is not power. Gold is what power leaves behind so the foolish can count it.",
    "reversed": "Greed, corruption, exploitation, class cruelty, tyranny through wealth, material arrogance, decay beneath luxury, or a ruler possessed by possession itself.",
    "reversedKeywords": [
      "greed",
      "corruption",
      "exploitation",
      "class cruelty",
      "tyranny",
      "arrogance",
      "possessed by wealth"
    ],
    "reversedVerdict": "He owned everything but the hunger that owned him."
  }
];

const librarySuitInfo = {
  bloodChalices: {
    id: 'bloodChalices',
    title: 'Blood Chalices',
    label: 'Blood Chalices',
    subtitle: 'Minor Arcana · Cups corrupted through blood',
    motto: 'Desire is a thirst, and thirst always demands a price.',
    description: 'Blood Chalices are the suit of emotional appetite: love, longing, grief, romance, seduction, pleasure, memory, wounds, and the hunger to be filled by another person, dream, god, or poison.'
  },
  cursedWands: {
    id: 'cursedWands',
    title: 'Cursed Wands',
    label: 'Cursed Wands',
    subtitle: 'Minor Arcana · Wands corrupted through cursed flame',
    motto: 'Every spell changes the hand that casts it.',
    description: 'Cursed Wands are the suit of will, magic, ambition, and fire that has learned to bite. They govern action, passion, leadership, creativity, conquest, conflict, spellcraft, charisma, and the consequences of forcing desire into the world.'
  },
  silverBlades: {
    id: 'silverBlades',
    title: 'Silver Blades',
    label: 'Silver Blades',
    subtitle: 'Minor Arcana · Swords corrupted through moonlit silver',
    motto: 'The truth is a blade; mercy is only how slowly it enters.',
    description: 'Silver Blades are the suit of cruel clarity: truth, intellect, strategy, conflict, betrayal, accusation, judgment, and the pain that comes from seeing clearly. In Belladonna’s world, thought becomes a silver weapon — elegant, sacred, and merciless.'
  },
  pentaclesOfTheGrave: {
    id: 'pentaclesOfTheGrave',
    title: 'Pentacles of the Grave',
    label: 'Pentacles of the Grave',
    subtitle: 'Minor Arcana · Pentacles buried beneath death',
    motto: 'Every possession is already practicing how to outlive you.',
    description: 'Pentacles of the Grave are the suit of material power under the shadow of death: wealth, labor, survival, the body, land, contracts, debt, inheritance, bloodlines, ownership, and what remains after the flesh is gone.'
  }
};

const librarySuitSections = [
  { key: 'bloodChalices', cards: bloodChalicesCards },
  { key: 'cursedWands', cards: cursedWandsCards },
  { key: 'silverBlades', cards: silverBladesCards },
  { key: 'pentaclesOfTheGrave', cards: pentaclesOfTheGraveCards }
];

const libraryCards = [...cards, ...bloodChalicesCards, ...cursedWandsCards, ...silverBladesCards, ...pentaclesOfTheGraveCards];
