const cards = [
  {number:0,roman:'0',name:'The Fool',image:'cards/0 The Fool.png',keywords:['beginnings','risk','innocence','abyss'],upright:'The first step into danger. A new path opens, but it will not flatter your intelligence. Sometimes only the reckless escape the prison built by the cautious.',reversed:'Stupidity wearing a flower crown: blind confidence, childish denial, gullibility, humiliation, and avoidable disaster.',verdict:'Step forward. But do not insult the abyss by pretending it is not there.',reversedVerdict:'The fall will not become wisdom simply because you smiled on the way down.'},
  {number:1,roman:'I',name:'The Magician',image:'cards/1 The magician.png',keywords:['willpower','manifestation','skill','ritual'],upright:'Power made deliberate. The tools are already on the table; the question is whether you have the discipline and audacity to use them.',reversed:'Talent gone rotten: manipulation, fraud, wasted gifts, scattered will, cheap tricks, and false mastery.',verdict:'You have the knife, the chalice, the coin, and the wand. Stop admiring the altar and begin the spell.',reversedVerdict:'A trick is not a miracle simply because the victim applauds.'},
  {number:2,roman:'II',name:'The High Priestess',image:'cards/2 The High Priestess.png',keywords:['mystery','intuition','secrets','silence'],upright:'Forbidden knowing. The visible world is only the surface, and secrets are a form of power.',reversed:'Corrupted secrecy: self-deception, hidden poison, ignored instinct, and secrets weaponized against you.',verdict:'The truth is already in the room. Become quiet enough to stop insulting it.',reversedVerdict:'You did not fail because the signs were absent. You failed because they were unpleasant.'},
  {number:3,roman:'III',name:'The Empress',image:'cards/3 The Empress.png',keywords:['fertility','sexuality','abundance','dark feminine'],upright:'Dark feminine power in fertile, sensual, dangerous fullness. Beauty that creates, desire that commands, and abundance that knows its worth.',reversed:'Poisoned femininity: cruelty disguised as care, sexuality used as punishment, envy, withholding, and devouring control.',verdict:'Your body, your beauty, your hunger, your tenderness, and your power are not separate things.',reversedVerdict:'The garden is not dead. It is being starved by the one who claims to tend it.'},
  {number:4,roman:'IV',name:'The Emperor',image:'cards/4 The Emperor.png',keywords:['authority','influence','structure','control'],upright:'The architecture of power. Visible and invisible authorities shape your life; learn where power sits, how it speaks, and what it wants.',reversed:'Destructive authority operating while you remain blind: manipulation, domination disguised as protection, corrupt systems, and hidden chains.',verdict:'Power is already touching your life. Ask who benefits, who commands, and how you can turn the machinery toward yourself.',reversedVerdict:'You are not free simply because no one has told you where the leash is tied.'},
  {number:5,roman:'V',name:'The Hierophant',image:'cards/5 The Hierophant.png',keywords:['belief','doctrine','ritual','masks'],upright:'The theater of belief. Religion, tradition, titles, costumes, and sacred language shape behavior and can become leverage.',reversed:'False belief turned destructive: hypocrisy, spiritual fraud, moral theater, cultish obedience, and fake virtue used as a weapon.',verdict:'The robes matter because people obey them as if they are true.',reversedVerdict:'Beware the holy man who needs you kneeling before he can feel tall.'},
  {number:6,roman:'VI',name:'The Lovers',image:'cards/6 The Lovers.png',keywords:['desire','choice','temptation','union'],upright:'The dangerous holiness of desire. Love reveals what you worship and what you may surrender for union.',reversed:'Desire turned diseased: obsession, betrayal, false soulmates, emotional addiction, and possession mistaken for love.',verdict:'Love is never harmless. It reveals what you would kneel for.',reversedVerdict:'Not every chain is ugly. Some are kissed onto the throat.'},
  {number:7,roman:'VII',name:'The Chariot',image:'cards/7 The Chariot.png',keywords:['victory','discipline','conquest','control'],upright:'Domination through discipline. Opposing forces pull against each other; victory belongs to the one who can hold the reins.',reversed:'Loss of control: ambition becoming chaos, pride becoming collapse, emotional stampede, and movement without direction.',verdict:'Do not wait for your beasts to agree. Harness them and advance.',reversedVerdict:'You called yourself the driver because you were too frightened to admit you were cargo.'},
  {number:8,roman:'VIII',name:'Strength',image:'cards/8 Strength.png',keywords:['courage','restraint','hunger','mastery'],upright:'The beast made to bow without being broken. Hunger mastered, rage trained, sexuality understood, and power made elegant.',reversed:'The beast loose in the house: cruelty, cowardice, sexual malice, brutality, and weakness disguised as domination.',verdict:'The beast is not your enemy. Your weakness is thinking it must either be killed or obeyed.',reversedVerdict:'Only the weak need to prove they have teeth every time they enter a room.'},
  {number:9,roman:'IX',name:'The Hermit',image:'cards/9 The Hermit.png',keywords:['solitude','wisdom','study','exile'],upright:'Solitude chosen for power. Forbidden study, occult discipline, and distance from the shallow theater of other people.',reversed:'Isolation turned poisonous: bitterness, paranoia, loneliness, spiritual decay, and contempt mistaken for wisdom.',verdict:'Leave the crowd to its warmth. Some truths only approach when the room has gone cold.',reversedVerdict:'A locked door is not a monastery simply because you are alone behind it.'},
  {number:10,roman:'X',name:'Wheel of Fortune',image:'cards/10 Wheel of Fortune.png',keywords:['fate','cycles','luck','timing'],upright:'The machinery of fate turning without asking who is ready. Luck is real, but so is timing.',reversed:'Fate curdled into misfortune: repeated ruin, bad timing, cursed patterns, and lessons returning because you refused to learn.',verdict:'The wheel does not care whether you deserve the height or the fall. Learn when to move.',reversedVerdict:'This is not fate persecuting you. This is the lesson returning with sharper teeth.'},
  {number:11,roman:'XI',name:'Justice',image:'cards/11 Justice.png',keywords:['law','judgment','consequence','false fairness'],upright:'The lie society tells about itself so the powerful can sleep well. Recognize the game and learn how the scales are weighted.',reversed:'The full horror of corrupt mankind pretending to be righteous: false accusation, rigged systems, and laws used as weapons.',verdict:'Do not worship the scales. Learn who forged them, who holds them, and how much blood it takes to tip them.',reversedVerdict:'When wolves build the courthouse, do not be shocked when the sheep are found guilty.'},
  {number:12,roman:'XII',name:'The Hanged One',image:'cards/12 The Hanged One.png',keywords:['surrender','sacrifice','reversal','perspective'],upright:'Power in suspension. Bondage can reveal what freedom hides, and punishment may become revelation.',reversed:'Meaningless suffering: martyrdom without wisdom, paralysis, humiliation, cowardly delay, and sacrifice to gods not listening.',verdict:'Stop struggling for one moment. The rope may be teaching you what the road refused to say.',reversedVerdict:'Not every crucifixion produces a saint. Some only produce a corpse with excuses.'},
  {number:13,roman:'XIII',name:'Death',image:'cards/13 Death.png',keywords:['mortality','transformation','endings','truth'],upright:'The great honest card. Everything ends; to live with this knowledge is not weakness, but freedom.',reversed:'Mortal despair: decay, helplessness, clinging, dread, and the unbearable knowledge that change comes without your permission.',verdict:'You are dying. So is everyone who ever frightened you. Let that knowledge make you dangerous.',reversedVerdict:'The corpse you refuse to bury has begun to smell like your own future.'},
  {number:14,roman:'XIV',name:'Temperance',image:'cards/14 Temperance.png',keywords:['balance','alchemy','restraint','mixture'],upright:'The dangerous craft of controlled mixture: blood and water, mercy and threat, hunger and restraint, poison and cure.',reversed:'Contamination: addiction, excess, instability, corrupted healing, and vile mixtures that should never have shared the cup.',verdict:'Even poison becomes medicine when measured by a steady hand.',reversedVerdict:'You did not create a potion. You made a wound drinkable.'},
  {number:15,roman:'XV',name:'The Devil',image:'cards/15 The Devil.png',keywords:['temptation','bondage','appetite','shadow'],upright:'The chain you secretly enjoy. Name what owns you; once visible, a chain may be used, broken, tightened, or moved.',reversed:'Degradation without glamour: enslavement, addiction, corruption, humiliation, shame, and moral collapse.',verdict:'Do not be ashamed of the chain. Be ashamed that you called it freedom because it glittered.',reversedVerdict:'The leash is no longer decorative. It is all that remains of your will.'},
  {number:16,roman:'XVI',name:'The Tower',image:'cards/16 The Tower.png',keywords:['collapse','revelation','disaster','exposure'],upright:'The mercy of catastrophe. What was false can no longer stand; what was arrogant can no longer pretend to be eternal.',reversed:'Disaster delayed or denied: smoke inside the building, slow ruin, suppressed crisis, and fear pretending to be stability.',verdict:'Do not mourn the tower too quickly. Ask what it was hiding from the sky.',reversedVerdict:'The tower has already fallen. You are merely living in the dust before it reaches your lungs.'},
  {number:17,roman:'XVII',name:'The Star',image:'cards/17 The Star.png',keywords:['hope','renewal','healing','defiance'],upright:'Hope after devastation. Not naive optimism, but the luminous power of continuing after the world has shown its teeth.',reversed:'Hope curdled into mockery: despair, false inspiration, humiliation, spiritual exhaustion, and light that may not be salvation.',verdict:'Hope is most beautiful when it knows exactly how much blood has been spilled and still refuses to die.',reversedVerdict:'Not every light is a star. Some are only the eyes of things waiting in the dark.'},
  {number:18,roman:'XVIII',name:'The Moon',image:'cards/18 The Moon.png',keywords:['illusion','dreams','fear','subconscious'],upright:'The kingdom of uncertainty. The Moon reveals through distortion: instinct, dream, fear, prophecy, and half-truth.',reversed:'Madness without poetry: delusion, paranoia, gaslighting, nightmare logic, and the collapse of trust in your own perception.',verdict:'The night is not empty. It is crowded with everything daylight taught you to ignore.',reversedVerdict:'When every shadow looks like a monster, ask which monster taught you to see that way.'},
  {number:19,roman:'XIX',name:'The Sun',image:'cards/19 The Sun.png',keywords:['clarity','triumph','exposure','radiance'],upright:'Revelation without mercy. Triumph under light so bright that lies cannot survive, but visibility has a price.',reversed:'Light turned cruel: exposure, arrogance, humiliation, forced joy, burnout, and being seen without being understood.',verdict:'Shine if you must. But remember: every bright thing teaches the hunters where to aim.',reversedVerdict:'The same light that crowns you can also strip you bare.'},
  {number:20,roman:'XX',name:'Judgement',image:'cards/20 Judgement.png',keywords:['reckoning','awakening','verdict','summons'],upright:'The summons you cannot ignore. The past rises and demands an answer; excuses rot away.',reversed:'Condemnation without redemption: guilt, denial, damnation, disgrace, and the past returning as punishment.',verdict:'The grave has opened. Decide whether you are rising as witness, judge, or evidence.',reversedVerdict:'The trumpet did not call you to rise. It called the witnesses to identify the body.'},
  {number:21,roman:'XXI',name:'The World',image:'cards/21 The World.png',keywords:['completion','mastery','dominion','integration'],upright:'Completion as power integrated. The journey changed you; the crown belongs to the one who survived the circle.',reversed:'The unfinished soul: false closure, emptiness after success, fragmentation, and a victory that tastes like ash.',verdict:'You survived the circle. Now decide whether you will leave it healed, crowned, or hungry.',reversedVerdict:'You reached the final door and discovered you brought every prison with you.'}
];

const bloodChalicesCards = [
  {
    "id": "blood-ace",
    "sort": 1,
    "roman": "Ace",
    "name": "Ace of Blood Chalices",
    "image": "cards/blood-chalices/ace.jpg",
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
    "image": "cards/blood-chalices/two.jpg",
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
    "image": "cards/blood-chalices/three.jpg",
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
    "image": "cards/blood-chalices/four.jpg",
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
    "image": "cards/blood-chalices/five.jpg",
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
    "image": "cards/blood-chalices/six.jpg",
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
    "image": "cards/blood-chalices/seven.jpg",
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
    "image": "cards/blood-chalices/eight.jpg",
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
    "image": "cards/blood-chalices/nine.jpg",
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
    "image": "cards/blood-chalices/ten.jpg",
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
    "image": "cards/blood-chalices/acolyte.jpg",
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
    "image": "cards/blood-chalices/hunter.jpg",
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
    "image": "cards/blood-chalices/queen.jpg",
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
    "image": "cards/blood-chalices/sovereign.jpg",
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

const librarySuitInfo = {
  bloodChalices: {
    title: 'Blood Chalices',
    subtitle: 'Minor Arcana · Cups corrupted through blood',
    motto: 'Desire is a thirst, and thirst always demands a price.',
    description: 'Blood Chalices are the suit of emotional appetite: love, longing, grief, romance, seduction, pleasure, memory, wounds, and the hunger to be filled by another person, dream, god, or poison.'
  }
};

const libraryCards = [...cards, ...bloodChalicesCards];
