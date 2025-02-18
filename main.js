const names = []; // TODO:

const homelands = [
  {
    id: 1,
    name: "The Ashblight",
    description:
      "A vast southern arratu that extends into the ancient lost provinces of the pre-Hegemony Gyre.",
    page_number: 98,
  },
  {
    id: 2,
    name: "The Black Spine",
    description:
      "A towering mountain range that marks the western edge of the Gyre.",
    page_number: 98,
  },
  {
    id: 3,
    name: "The Blind Marsh",
    description:
      "A product of the Black Spine's rain-catching and a constant outflow of water from the mountain range's roots, the Blind Marsh is a boggy hell of voracious plants, venomous beasts, and amphibian abominations.",
    page_number: 98,
  },
  {
    id: 4,
    name: "Emed-Dar",
    description:
      "Once the jewel of the southern provinces of the Hegemony, Emed-Dar was overwhelmed by the Anakim two hundred years ago.",
    page_number: 98,
  },
  {
    id: 5,
    name: "Emed-Kist",
    description:
      "A loosely-bound monarchy among the nations of the Gyre, Emed-Kist is ruled from the city of Medek, where the Great King deals with the numerous barons, earls, and dukes that hold ancestral fiefs throughout the kingdom.",
    page_number: 100,
  },
  {
    id: 6,
    name: "Ka-Adun",
    description:
      "Ka-Adun is a city and a province both, the former so vast that it is almost the province itself.",
    page_number: 101,
  },
  {
    id: 7,
    name: "Llaigis",
    description:
      "Grim Llaigis is a half-tamed land of wild hillsides, trackless forests, pockets of arratu badlands and the looming peaks of the Black Spine to the west.",
    page_number: 102,
  },
  {
    id: 8,
    name: "Lost Emed",
    description:
      "Emed-Dar was not the first part of Emed to be lost. In the early days of the Vothite Republic, before a stable confederacy could be achieved, Anak raiders from the Ashblight succeeded in rolling over the ancient province of Emed-Mar.",
    page_number: 98,
  },
  {
    id: 9,
    name: "New Voth",
    description:
      "New Voth is a land lavishly endowed with the trappings of rule.",
    page_number: 103,
  },
  {
    id: 10,
    name: "Sarul",
    description:
      "Sarul is a great rarity; a nation composed almost entirely of Blighted.",
    page_number: 104,
  },
  {
    id: 11,
    name: "The Mirewash",
    description:
      "The waters of the Usulmot River flow into this depression, swelled by the runoff from the Black Spine.",
    page_number: 98,
  },
  {
    id: 12,
    name: "The Rebel Coast",
    description:
      "Once part of Ka-Adun's administrative sphere, the cities of the Rebel Coast split off over a century ago to make their own way.",
    page_number: 99,
  },
  {
    id: 13,
    name: "The Sisters",
    description:
      "A refuge for the boldest and maddest of the Gyre's pirates, those seamen skilled enough to cross the narrows from the mainland without incident will find a few small, thickly forested islands and the single ramshackle town of Spray to serve their needs with whatever might be available.",
    page_number: 99,
  },
  {
    id: 14,
    name: "Thur",
    description:
      "Thur is a land of fragile wealth and delicately-balanced prosperity.",
    page_number: 105,
  },
];

const racespecies = [
  {
    id: 1,
    name: "Vothian",
    description:
      "Vothians are the people that emerged from the Deep known as the Well of the One Thought, a folk originally led by the first Mentarch of the Vothite Empire, the dreaded Imperator-Queen Voth.",
    page_number: 106,
  },
  {
    id: 2,
    name: "Khalan",
    description:
      "Khalan are the people of the Black Crucible, a terrible punishment-Deep established for unfathomable reasons by the Outsiders.",
    page_number: 106,
  },
  {
    id: 3,
    name: "Lin",
    description:
      "The Lin are derived from the people of the Tin Mirror Sky, a false-world Deep fabricated by the Outsiders.",
    page_number: 106,
  },
  {
    id: 4,
    name: "Olok",
    description:
      "Olok are the folk of a broken Deep, the Downward Tower, that was disrupted in some Outsider quarrel unintelligible to humanity.",
    page_number: 106,
  },
  {
    id: 5,
    name: "Osrin",
    description:
      "Osrin are the people of modern Thur, having derived mostly from the labor-Deep known as the Turning Vault.",
    page_number: 107,
  },
];

const faiths = [
  {
    id: 1,
    name: "The Brass Cult",
    description:
      "The Reaping King never required formal worship from his subjects, but it was inevitable that some among them would seek to give him the honors due a divinity.",
    page_number: 108,
  },
  {
    id: 2,
    name: "The Servants of Shun",
    description:
      'The Rule of Shun was a centuries-long secessionist movement during the Vothite Republic, during which much of modern Llaigis was taken over by the devotees of a latter-day sorcerer-king known only as "Shun".',
    page_number: 108,
  },
  {
    id: 3,
    name: "The Old Lords",
    description:
      "Dreaded servants of the ancient Outsiders and their alien gods, the worshipers of the Old Lords are convinced that the rule of the alien tyrants was actually an era of order, harmony, and peace, and that it was only through the treacherous machinations of wicked humanity that the era was ever lost. T",
    page_number: 108,
  },
  {
    id: 4,
    name: "The Golden Path",
    description:
      "This faith is convinced of the eternal recurrence of the soul, that every creature is incessantly recycled by the Legacy into new incarnations of suffering, attachment, and loss.",
    page_number: 108,
  },
  {
    id: 5,
    name: "The Bleeding God",
    description:
      'Devotees of this faith flatly refuse to recognize the deserved divinity of any other god; to them, the name of their deity is simply "God", and they distinguish him as the Bleeding God only when they must be clear with nonbelievers.',
    page_number: 109,
  },
  {
    id: 6,
    name: "The Seers of Voth",
    description:
      "While worship of the first Mentarch of the Vothite Empire was proscribed during the thousand-year rule of the Republic, it didn't stop a variety of refugee thought-houses, wary provincial villages, and secret Republic cells from maintaining their rites.",
    page_number: 109,
  },
];

const classes = [
  {
    id: 1,
    name: "Expert",
    description:
      "Your hero is an expert at some useful skill. Thieves, diplomats, healers, scholars, explorers, artisans, and other such heroes should pick the Expert class if they wish to focus on developing their special skills and performing tremendous feats of mastery with them.",
    page_number: 18,
  },
  {
    id: 2,
    name: "Mage",
    description:
      "Your hero wields arcane powers and otherworldly arts in the service of their ambitions.",
    page_number: 19,
  },
  {
    id: 3,
    name: "Warrior",
    description:
      "The Warrior is a hero born to the blade, a man or woman gifted with a superb capacity for physical violence.",
    page_number: 20,
  },
  {
    id: 4,
    name: "Adventurer",
    description:
      "Not every hero is perfectly reflected by one of the three main classes, even with the wide latitude of concepts each one allows. For those heroes that straddle the roles, there remains the class of Adventurer.",
    page_number: 21,
  },
];

const backgrounds = [
  {
    id: 1,
    name: "Artisan",
    description:
      "Your hero was a crafter of some variety, whether a blacksmith, carpenter, shipwright, weaver, or a maker of more exotic goods.",
    page_number: 12,
  },
  {
    id: 2,
    name: "Barbarian",
    description:
      "Your people or past were counted savage even in a world as brutal as this one.",
    page_number: 12,
  },
  {
    id: 3,
    name: "Carter",
    description:
      "Overland transport is hard and dangerous, and it requires an equally hard breed of men and women to carry it out.",
    page_number: 13,
  },
  {
    id: 4,
    name: "Courtesan",
    description:
      "Your hero made a profession of companionship, whether carnal or otherwise.",
    page_number: 13,
  },
  {
    id: 5,
    name: "Criminal",
    description:
      "Some would argue that all adventurers are criminals sooner or later, but your hero made it their profession from an early age.",
    page_number: 13,
  },
  {
    id: 6,
    name: "Hunter",
    description:
      "Both primitive tribals and bored nobles require hunts for their table and their pleasures, and such efforts often require professional hunters to help in the work.",
    page_number: 13,
  },
  {
    id: 7,
    name: "Laborer",
    description:
      "In the cities, the great mass of unskilled workers are laborers instead, day-workers and unskilled help employed by the artisans and craftsmen of the town.",
    page_number: 14,
  },
  {
    id: 8,
    name: "Merchant",
    description:
      "Merchants range from the gilded merchant-princes of the great trading cities to the humble peddlers who roam between villages with packs full of sewing needles, tin pans, belt knives, and other household needs.",
    page_number: 14,
  },
  {
    id: 9,
    name: "Noble",
    description:
      "Nobility is a quality that varies from culture to culture, some bestowing it for personal virtue, others to particular bloodlines, and some to those who fulfill specific roles in the culture.",
    page_number: 14,
  },
  {
    id: 10,
    name: "Nomad",
    description:
      "Some peoples are forced to travel far to find their sustenance, whether they are beast-riders, drivers of great wagons, or simple masses of people walking from one waystation to another.",
    page_number: 14,
  },
  {
    id: 11,
    name: "Peasant",
    description:
      "A peasant's life is never easy, though in some lands it's a kinder fate than others.",
    page_number: 15,
  },
  {
    id: 12,
    name: "Performer",
    description:
      "Singers, dancers, musicians, actors, poets, orators, and all other entertainers and edifiers might be found in this background.",
    page_number: 15,
  },
  {
    id: 13,
    name: "Physician",
    description:
      "Healers are needed in any society, and your hero was one such physician.",
    page_number: 16,
  },
  {
    id: 14,
    name: "Priest",
    description: "Priests run a wide gamut in this world.",
    page_number: 16,
  },
  {
    id: 15,
    name: "Sailor",
    description:
      "Your hero was a sailor, a voyager on the salt tides or deep rivers of their home.",
    page_number: 16,
  },
  {
    id: 16,
    name: "Scholar",
    description:
      "Dedicated scholars are few and far between in this world, but your hero is one of those rarities.",
    page_number: 16,
  },
  {
    id: 17,
    name: "Slave",
    description:
      "Slavery in this world varies from the pampered life of some favored house slave to a short, brutal existence in the mines and manufactories.",
    page_number: 17,
  },
  {
    id: 18,
    name: "Soldier",
    description:
      "Mercenary, regular soldier, temple knight, monastic defender, village militiaman, or savage raider; whatever the specifics, your hero made their living by war.",
    page_number: 17,
  },
  {
    id: 19,
    name: "Thug",
    description:
      "A soldier belongs to some larger organization, whereas you were simply a thug.",
    page_number: 17,
  },
  {
    id: 20,
    name: "Wanderer",
    description:
      "Some people simply have no home, and your hero is one such unfortunate.",
    page_number: 17,
  },
];

const foci = [
  {
    id: 1,
    name: "Alert",
    description:
      "You are keenly aware of your surroundings and virtually impossible to take unaware.",
    maximum_level: 2,
    page_number: 22,
  },
  {
    id: 2,
    name: "Armored Magic",
    description:
      "Usable only by Mage heroes who would otherwise be prevented from casting spells or using arts while armored, this Focus reflects special training in channeling magic through the hindering materials of conventional armor.",
    maximum_level: 2,
    page_number: 22,
  },
  {
    id: 3,
    name: "Armsmaster",
    description:
      "You have an unusual competence with thrown weapons and melee attacks.",
    maximum_level: 2,
    page_number: 22,
  },
  {
    id: 4,
    name: "Artisan",
    description:
      "You have remarkable gifts as a crafter and can often improvise techniques even in fields unrelated to your usual background.",
    maximum_level: 2,
    page_number: 22,
  },
  {
    id: 5,
    name: "Assassin",
    description:
      "You are practiced at sudden murder, and have certain advantages in carrying out an Execution Attack as described in the rules on page 44.",
    maximum_level: 2,
    page_number: 22,
  },
  {
    id: 6,
    name: "Authority",
    description:
      "You have an uncanny kind of charisma about you, one that makes others instinctively follow your instructions and further your causes.",
    maximum_level: 2,
    page_number: 23,
  },
  {
    id: 7,
    name: "Close Combatant",
    description:
      "You've had all too much practice at close-in fighting and desperate struggles with drawn blades.",
    maximum_level: 2,
    page_number: 23,
  },
  {
    id: 8,
    name: "Connected",
    description:
      "You're remarkably gifted at making friends and forging ties with the people around you.",
    maximum_level: 2,
    page_number: 23,
  },
  {
    id: 9,
    name: "Cultured",
    description:
      "Through wide travel, careful observation, or extensive study, you've obtained a wide experience of the cultures of your region and an ability to navigate their customs, laws, and languages.",
    maximum_level: 2,
    page_number: 23,
  },
  {
    id: 10,
    name: "Die Hard",
    description: "You are surprisingly hard to kill.",
    maximum_level: 2,
    page_number: 23,
  },
  {
    id: 11,
    name: "Deadeye",
    description: "You have a gift with ranged weapons.",
    maximum_level: 2,
    page_number: 23,
  },
  {
    id: 12,
    name: "Dealmaker",
    description:
      "You have an uncanny ability to sniff out traders and find good deals, licit or otherwise.",
    maximum_level: 2,
    page_number: 24,
  },
  {
    id: 13,
    name: "Developed Attribute",
    description:
      "Your hero has a remarkable degree of development to one or more of their attributes.",
    maximum_level: 1,
    page_number: 24,
  },
  {
    id: 14,
    name: "Diplomatic Grace",
    description: "Your skill at personal negotiations is enormous and uncanny.",
    maximum_level: 2,
    page_number: 24,
  },
  {
    id: 15,
    name: "Gifted Chirurgeon",
    description:
      "You have an unusual gift for saving Mortally Wounded allies and quickening the natural recovery of the wounded in your care.",
    maximum_level: 2,
    page_number: 24,
  },
  {
    id: 16,
    name: "Henchkeeper",
    description:
      "You have a distinct knack for picking up lost souls who willingly do your bidding.",
    maximum_level: 2,
    page_number: 24,
  },
  {
    id: 17,
    name: "Impervious Defense",
    description:
      "Whether through uncanny reflexes, remarkable luck, supernatural heritage, or magical talent, you have natural defenses equivalent to high-quality armor.",
    maximum_level: 2,
    page_number: 24,
  },
  {
    id: 18,
    name: "Impostor",
    description:
      "You are exceedingly skilled at presenting yourself as something you are not, including disguises, voice mimicry, and lightning-fast wardrobe changes.",
    maximum_level: 2,
    page_number: 25,
  },
  {
    id: 19,
    name: "Lucky",
    description:
      "Some fund of remarkable luck has preserved your life at least once in the past, and continues to give you an edge in otherwise hopeless situations.",
    maximum_level: 2,
    page_number: 25,
  },
  {
    id: 20,
    name: "Nullifier",
    description:
      "Something about your hero interferes with easy use of magic on them.",
    maximum_level: 2,
    page_number: 25,
  },
  {
    id: 21,
    name: "Poisoner",
    description:
      "You are a skilled poisoner, capable of compounding toxins out of readily-available flora and minerals.",
    maximum_level: 2,
    page_number: 25,
  },
  {
    id: 22,
    name: "Polymath",
    description:
      "You have a passing acquaintance with a vast variety of practical skills and pastimes, and can make a modest attempt at almost any exercise of skill or artisanry.",
    maximum_level: 2,
    page_number: 25,
  },
  {
    id: 23,
    name: "Rider",
    description:
      "Anyone with any level of Ride skill can fight competently on horseback or keep their mount healthy. You have an almost supernatural bond with your steeds, however, and can push them beyond normal limits.",
    maximum_level: 2,
    page_number: 25,
  },
  {
    id: 24,
    name: "Shocking Assault",
    description: "You're extremely dangerous to enemies around you.",
    maximum_level: 2,
    page_number: 26,
  },
  {
    id: 25,
    name: "Sniper's Eye",
    description:
      "You are an expert at placing a thrown knife or arrow on an unsuspecting target.",
    maximum_level: 2,
    page_number: 26,
  },
  {
    id: 26,
    name: "Special Origin",
    description:
      "Heroes in Worlds Without Number are assumed to be human, or close enough as to make no real difference. PCs who want to belong to some more exotic species or demihuman kind can pick the origin Focus appropriate to their chosen species, such as those give",
    maximum_level: 1,
    page_number: 26,
  },
  {
    id: 27,
    name: "Specialist",
    description: "You are remarkably talented at a particular skill.",
    maximum_level: 2,
    page_number: 26,
  },
  {
    id: 28,
    name: "Spirit Familliar",
    description:
      "You have a minor spirit, devil, construct, magical beast, or other creature as a devoted companion.",
    maximum_level: 2,
    page_number: 26,
  },
  {
    id: 29,
    name: "Trapmaster",
    description:
      "You have uncommon expertise in handling traps and snares, both mundane ones and the magical perils sometimes found in Deeps or the lairs of sorcerers.",
    maximum_level: 2,
    page_number: 26,
  },
  {
    id: 30,
    name: "Unarmed Combatant",
    description:
      "Your empty hands are more dangerous than swords in the grip of the less gifted.",
    maximum_level: 2,
    page_number: 27,
  },
  {
    id: 31,
    name: "Unique Gift",
    description:
      "Your hero has some unusual ability or magical knack that can't be adequately described by an existing Focus.",
    maximum_level: 1,
    page_number: 27,
  },
  {
    id: 32,
    name: "Valiant Defender",
    description:
      "You are a bodyguard, shieldbearer, or other gifted defender of others, accustomed to the roil of bloody battle and desperate struggle.",
    maximum_level: 2,
    page_number: 27,
  },
  {
    id: 33,
    name: "Well Met",
    description:
      "You have a striking ability to charm and pacify people and creatures you've just met.",
    maximum_level: 2,
    page_number: 27,
  },
  {
    id: 34,
    name: "Whirlwind Assault",
    description:
      "You are a frenzy of bloody havoc in melee combat, and can hack down numerous lesser foes in close combat... assuming you survive being surrounded.",
    maximum_level: 2,
    page_number: 27,
  },
  {
    id: 35,
    name: "Xenoblooded",
    description:
      "You have been both blessed and cursed by the Outsiders, gaining the ability to survive in alien environments that humans were never meant to tolerate.",
    maximum_level: 1,
    page_number: 27,
  },
];

const skills = [
  {
    id: 1,
    name: "Administer",
    description:
      "Keep an organization running smoothly, scribe things well, plan out logistics, identify incompetent or treacherous workers, analyze records or archives, or otherwise do things that an executive or middle-manager would need to do.",
    page_number: 10,
  },
  {
    id: 2,
    name: "Connect",
    description:
      "Find or know people who are useful to your purposes, make friendships or social acquaintances, know who to talk to get favors or services, and call on the help or resources of organizations you belong to. Connect covers your PC's ability to find the people you need, though convincing them to help may require more than this.",
    page_number: 10,
  },
  {
    id: 3,
    name: "Convince",
    description:
      "Persuade a listener that something you are saying is true. Naturally, the more implausible the claim or more emotionally repugnant it is to them, the more difficult it is to persuade them. Furthermore, how they act on their newfound conviction is up to them and their motivations, and may not be perfectly predictable.",
    page_number: 10,
  },
  {
    id: 4,
    name: "Craft",
    description:
      "Craft or repair goods and technology appropriate to the PC's background and society. The Craft skill can be used for a wide range of artisan pursuits, though a GM is within their rights to keep the PC from building complex things that are too far away from their past background and experience.",
    page_number: 10,
  },
  {
    id: 5,
    name: "Exert",
    description:
      "Run, swim, climb, jump, labor for long periods, throw things, or otherwise exert your physical, stamina, and coordination. Even a PC with poor physical attributes might have a good Exert skill reflecting athletic training and expertise in making the most of their available talents.",
    page_number: 10,
  },
  {
    id: 6,
    name: "Heal",
    description:
      "Treat wounds, cure diseases, neutralize poisons, diagnose psychological health issues, and otherwise tend to the wounds of body and mind. The Heal skill cannot cure lost hit points directly, but it's a vital skill in stabilizing Mortally Wounded allies",
    page_number: 10,
  },
  {
    id: 7,
    name: "Know",
    description:
      "Know matters of history, geography, natural science, zoology, and other academic fields appropriate to a sage or scholar. While some sages might specialize in particular fields, most learned men and women in this age have a broad range of understanding, and will rarely be unable to even attempt to answer a question relevant to this skill.",
    page_number: 10,
  },
  {
    id: 8,
    name: "Lead",
    description:
      "Inspire others to follow your lead and believe in your plans and goals. Manage subordinates and keep them focused, loyal, and motivated in the face of danger or failure. A successful leader will keep their subordinate's faith and confidence even when reason might make the leader's plan appear questionable at best.",
    page_number: 10,
  },
  {
    id: 9,
    name: "Magic",
    description:
      "Cast or analyze magic and know things about famous mages or notable magical events. Classes that can't cast spells obtain only intellectual and scholarly benefits from this skill.",
    page_number: 10,
  },
  {
    id: 10,
    name: "Notice",
    description:
      "Notice small details, impending ambushes, hidden features, or concealed objects. Detect subtle smells, sounds, or other sensory input. Notice cannot be used simply to detect a lie, but keen attention can often discern a subject's emotional state.",
    page_number: 10,
  },
  {
    id: 11,
    name: "Perform",
    description:
      "Sing, act, dance, orate, or otherwise perform impressively for an audience. Compose music, plays, writings, or other works of performance art. Most performers will have a particular field they excel at, though polymaths might exist if the P",
    page_number: 10,
  },
  {
    id: 12,
    name: "Pray",
    description:
      "Perform the clerical rites of your religion, and be familiar with the gods, demons, and taboos of major and minor faiths, and identify iconography and persons of religious importance. Pray also helps you know the state of local faiths and the important persons in their hierarchies.",
    page_number: 10,
  },
  {
    id: 13,
    name: "Punch",
    description:
      "Fight unarmed or with natural body weaponry. Punch, kick, grapple, or otherwise brawl without the benefit of man-made tools. This mode of fighting is inefficient at best without some special Focus to improve it, but it's reliably non-lethal.",
    page_number: 10,
  },
  {
    id: 14,
    name: "Ride",
    description:
      "Ride an animal, drive a cart or carriage, or otherwise deal with land transportation. This skill also includes competence at mount care and tending, basic cart or carriage repair, judging good horseflesh, and other skills appropriate to a beast-rider of whatever society the PC comes from.",
    page_number: 10,
  },
  {
    id: 15,
    name: "Sail",
    description:
      "Sail or repair a ship, build small craft, navigate by the stars, read sea weather, manage sailors, and otherwise conduct the business of a professional mariner. This skill may apply to more esoteric means of vehicular travel in some societies.",
    page_number: 10,
  },
  {
    id: 16,
    name: "Shoot",
    description:
      "Fire a bow or crossbow or throw a hurled weapon. Maintain ranged weaponry and fletch arrows.",
    page_number: 10,
  },
  {
    id: 17,
    name: "Sneak",
    description:
      "Move silently, hide in shadows, avoid notice, pick pockets, disguise yourself, pick locks, defeat traps, or otherwise overcome security measures.",
    page_number: 10,
  },
  {
    id: 18,
    name: "Stab",
    description:
      "Fight with melee weapons or throw a hurled weapon. Maintain and identify weaponry.",
    page_number: 10,
  },
  {
    id: 19,
    name: "Survive",
    description:
      "Hunt, fish, navigate by the stars, mitigate environmental hazards, identify plants and wildlife, and craft basic survival tools and shelter. A PC's Survive skill is most pertinent to the environments in their background, but the basic principles can be applied in all but the most alien environments.",
    page_number: 10,
  },
  {
    id: 20,
    name: "Trade",
    description:
      "Buy and sell at a profit, identify the worth of goods or treasures, deal with merchants and traders, find black-market goods and services, and know laws regarding smuggling and contraband.",
    page_number: 10,
  },
  {
    id: 21,
    name: "Work",
    description:
      "This skill is a catch-all for any profession that might not otherwise merit its own skill, such as a painter, lawyer, farmer, or herdsman. The precise skill it represents will vary with the PC's background.",
    page_number: 10,
  },
];

const languages = [
  { id: 1, name: "Trade Cant" },
  { id: 2, name: "Old Vothian" },
  { id: 3, name: "Modern Vothian" },
  { id: 4, name: "Brass Speech" },
  { id: 5, name: "Emedian" },
  { id: 6, name: "Thurian" },
  { id: 7, name: "Llaigisan" },
  { id: 8, name: "Anak Speech" },
  { id: 9, name: "Predecessant" },
  { id: 10, name: "Preterite" },
  { id: 11, name: "Abased" },
  { id: 12, name: "Recurrent" },
  { id: 13, name: "Deep Speech" },
];

const highmage_arts = [
  { id: 1, name: "Arcane Lexicon" },
  { id: 2, name: "Counter Magic" },
  { id: 3, name: "Empowered Sorcery" },
  { id: 4, name: "Hang Sorcery" },
  { id: 5, name: "Inexorable Effect" },
  { id: 6, name: "Iron Resolution" },
  { id: 7, name: "Preparatory Countermagic" },
  { id: 8, name: "Psychic Conversion" },
  { id: 9, name: "Restrained Casting" },
  { id: 10, name: "Retain Sorcery" },
  { id: 11, name: "Sense Magic" },
  { id: 12, name: "Suppress Magic" },
  { id: 13, name: "Swift Casting" },
  { id: 14, name: "Ward Allies" },
  { id: 15, name: "Wizard's Grandeur" },
];

const elementalist_arts = [
  { id: 1, name: "Beckoned Deluge" },
  { id: 2, name: "Earthsight" },
  { id: 3, name: "Elemental Blast" },
  { id: 4, name: "Flamesight" },
  { id: 5, name: "Pavis of Elements" },
  { id: 6, name: "Petrifying Stare" },
  { id: 7, name: "Rune of Destruction" },
  { id: 8, name: "Steps of Air" },
  { id: 9, name: "Stunning Shock" },
  { id: 10, name: "Thermal Shield" },
];

const healers_arts = [
  { id: 1, name: "Healing Touch" },
  { id: 2, name: "Empowered Healer" },
  { id: 3, name: "Facile Healer" },
  { id: 4, name: "Far Healer" },
  { id: 5, name: "Final Repose" },
  { id: 6, name: "Healer's Eye" },
  { id: 7, name: "Limb Restoration" },
  { id: 8, name: "Purge Ailment" },
  { id: 9, name: "Refined Restoration" },
  { id: 10, name: "Revive the Fallen" },
  { id: 11, name: "Swift Healer" },
  { id: 12, name: "The Healer's Knife" },
  { id: 13, name: "Tireless Vigor" },
  { id: 14, name: "Vital Furnace" },
];

const necromancer_arts = [
  { id: 1, name: "Bonetalker" },
  { id: 2, name: "Cold Flesh" },
  { id: 3, name: "Consume Life Energy" },
  { id: 4, name: "False Death" },
  { id: 5, name: "Gravesight" },
  { id: 6, name: "Keeper of the Gate" },
  { id: 7, name: "Life Bridge" },
  { id: 8, name: "Master of Bones" },
  { id: 9, name: "Red Harvest" },
  { id: 10, name: "Unaging" },
  { id: 11, name: "Uncanny Ichor" },
  { id: 12, name: "Unliving Persistence" },
];

const vowed_arts = [
  { id: 1, name: "Martial Style" },
  { id: 2, name: "Unarmed Might" },
  { id: 3, name: "Unarmored Defense" },
  { id: 4, name: "Brutal Counter" },
  { id: 5, name: "Faultless Awareness" },
  { id: 6, name: "Hurling Throw" },
  { id: 7, name: "The Inward Eye" },
  { id: 8, name: "Leap of the Heavens" },
  { id: 9, name: "Master's Vigor" },
  { id: 10, name: "Mob Justice" },
  { id: 11, name: "Nimble Ascent" },
  { id: 12, name: "Purified Body" },
  { id: 13, name: "Revivifying Breath" },
  { id: 14, name: "Shattering Strike" },
  { id: 15, name: "Style Weaponry" },
  { id: 16, name: "Unobtrusive Step" },
];

const elementalist_newmagics = [
  { id: 1, name: "Aqueous Harmony", level: 1 },
  { id: 2, name: "Flame Scrying", level: 1 },
  { id: 3, name: "Elemental Favor", level: 1 },
  { id: 4, name: "Elemental Spy", level: 1 },
];

const necromancer_newmagics = [
  { id: 1, name: "Command the Dead", level: 1 },
  { id: 2, name: "Query the Skull", level: 1 },
  { id: 3, name: "Smite the Dead", level: 1 },
  { id: 4, name: "Terrible Liveliness", level: 1 },
];

const highmagics = [
  { id: 1, name: "Apprehending the Arcane Form", level: 1 },
  { id: 2, name: "Cognitive Supersession of the Inferior Orders", level: 1 },
  { id: 3, name: "The Coruscating Coffin", level: 1 },
  { id: 4, name: "Damnation of the Sense", level: 1 },
  { id: 5, name: "Decree of Ligneous Dissolution", level: 1 },
  { id: 6, name: "The Excellent Tranpicuous Transformation", level: 1 },
  { id: 7, name: "Imperceptible Cerebral Divulgence", level: 1 },
  { id: 8, name: "Ineluctable Shackles of Volition", level: 1 },
  { id: 9, name: "The Long Amber Moment", level: 1 },
  { id: 10, name: "Phantasmal Mimesis", level: 1 },
  { id: 11, name: "Velocitous Imbuement", level: 1 },
  { id: 12, name: "Wordpact Invocation", level: 1 },
  { id: 13, name: "The Wind of the Final Repose", level: 1 },
];

const light_armors = [
  { id: 1, name: "No Armor" },
  { id: 2, name: "War Shirt" },
  { id: 3, name: "Buff Coat" },
  { id: 4, name: "Linothorax" },
  { id: 5, name: "War Robe" },
  { id: 6, name: "Pieced Armor" },
];

const medium_armors = [
  { id: 1, name: "Mail Shirt" },
  { id: 2, name: "Cuirass and Greaves" },
  { id: 3, name: "Scaled Armor" },
];

const heavy_armors = [
  { id: 1, name: "Mail Hauberk" },
  { id: 2, name: "Plate Armor" },
  { id: 3, name: "Great Armor" },
  { id: 4, name: "Grand Plate" },
];

const shields = [
  { id: 1, name: "Small Shield" },
  { id: 2, name: "Large Shield" },
];

const weapons = [
  { id: 1, name: "Axe, Hand" },
  { id: 2, name: "Axe, War" },
  { id: 3, name: "Blackjack" },
  { id: 4, name: "Bow, Large" },
  { id: 5, name: "Bow, Small" },
  { id: 6, name: "Claw Blades" },
  { id: 7, name: "Club" },
  { id: 8, name: "Club, Great" },
  { id: 9, name: "Crossbow" },
  { id: 10, name: "Dagger" },
  { id: 11, name: "Halberd" },
  { id: 12, name: "Hammer, Great" },
  { id: 13, name: "Hammer, War" },
  { id: 14, name: "Hurlant, Great" },
  { id: 15, name: "Hurlant, Hand" },
  { id: 16, name: "Hurlant, Long" },
  { id: 17, name: "Mace" },
  { id: 18, name: "Pike" },
  { id: 19, name: "Shield Bash, Large" },
  { id: 20, name: "Shield Bash, Small" },
  { id: 21, name: "Spear, Heavy" },
  { id: 22, name: "Spear, Light" },
  { id: 23, name: "Throwing Blade" },
  { id: 24, name: "Staff" },
  { id: 25, name: "Stiletto" },
  { id: 26, name: "Sword, Great" },
  { id: 27, name: "Sword, Long" },
  { id: 28, name: "Sword, Short" },
  { id: 29, name: "Unarmed Attack" },
];

const gear = [
  { id: 1, name: "Artisan's Equipment" },
  { id: 2, name: "Criminal Tools" },
  { id: 3, name: "Dungeoneering Kit" },
  { id: 4, name: "Noble Courtier Outfit" },
  { id: 5, name: "Performer's Implements" },
  { id: 6, name: "Wilderness Travel Gear" },
  { id: 7, name: "Arrows, 20" },
  { id: 8, name: "Backpack" },
  { id: 9, name: "Boots" },
  { id: 10, name: "Candle" },
  { id: 11, name: "Cart, one-horse" },
  { id: 12, name: "Clothes, common" },
  { id: 13, name: "Clothes, fine" },
  { id: 14, name: "Clothes, noble" },
  { id: 15, name: "Cooking utensils" },
  { id: 16, name: "Crowbar" },
  { id: 17, name: "Firewood, one night's fire" },
  { id: 18, name: "Flask, metal, one pint" },
  { id: 19, name: "Grappling hook" },
  { id: 20, name: "Hammer or small tool" },
  { id: 21, name: "Healer's pouch" },
  { id: 22, name: "Hurlant bolts, 20" },
  { id: 23, name: "Iron spikes, 10" },
  { id: 24, name: "Lantern" },
  { id: 25, name: "Mirror, hand" },
  { id: 26, name: "Oil, one pint" },
  { id: 27, name: "Paper, 10 sheets" },
  { id: 28, name: "Rations, one week" },
  { id: 29, name: "Rope, 50'" },
  { id: 30, name: "Sack" },
  { id: 31, name: "Shovel, pick, or similar tool" },
  { id: 32, name: "Tinder box" },
  { id: 33, name: "Torch" },
  { id: 34, name: "Waterskin, one gallon" },
  { id: 35, name: "Writing kit" },
];

const wwngen = {
  data: {
    supported_levels: [1],
    default_attribute_array: [14, 12, 11, 10, 9, 7],
    free_rolled_attribute_value: 14,
    skill_levels: [0, 1, 2, 3, 4],

    homeland: [],
    racespecies: [],
    faith: [],
    class: [],
    background: [],
    foci: [],
    skill: [],
    language: [],
    magic: {
      art: {
        highmage: [],
        elementalist: [],
        healer: [],
        necromancer: [],
        vowed: [],
      },
      newmagic: {
        elementalist: [],
        necromancer: [],
      },
      highmagic: [],
    },
    equipment: {
      armor: {
        light: [],
        medium: [],
        heavy: [],
        shield: [],
      },
      weapon: [],
      gear: [],
    },
  },

  fn: {
    make_homeland: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_racespecies: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_faith: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_class: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_background: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_foci: (id, name, description, maximum_level, page_number) => ({
      id: id,
      name: name,
      description: description,
      maximum_level: maximum_level,
      page_number: page_number,
    }),
    make_skill: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_language: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_magic_art: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_magic_highmagic: (id, name, description, level, page_number) => ({
      id: id,
      name: name,
      description: description,
      level: level,
      page_number: page_number,
    }),
    make_magic_newmagic: (id, name, description, level, page_number) => ({
      id: id,
      name: name,
      description: description,
      level: level,
      page_number: page_number,
    }),
    make_equipment_armor: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_equipment_weapon: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_equipment_weapon: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),
    make_equipment_gear: (id, name, description, page_number) => ({
      id: id,
      name: name,
      description: description,
      page_number: page_number,
    }),

    get_attribute_modifier: (value) => {
      let modifier = 0;

      switch (value) {
        case 3:
          modifier = -2;
          break;
        case (4, 5, 6, 7):
          modifier = -1;
          break;
        case (14, 15, 16, 17):
          modifier = 1;
          break;
        case 18:
          modifier = 2;
          break;
        default:
          modifier = 0;
          break;
      }

      return modifier;
    },

    roll_d6: () => {},
    roll_d8: () => {},
    roll_d10: () => {},
    roll_d12: () => {},
    roll_d20: () => {},

    initialize: (self) => {
      for (const h of homelands) {
        self.data.homeland.push(
          self.fn.make_homeland(h.id, h.name, h.description, h.page_number),
        );
      }

      for (const rs of racespecies) {
        self.data.racespecies.push(
          self.fn.make_racespecies(
            rs.id,
            rs.name,
            rs.description,
            rs.page_number,
          ),
        );
      }

      for (const f of faiths) {
        self.data.faith.push(
          self.fn.make_faith(f.id, f.name, f.description, f.page_number),
        );
      }

      for (const c of classes) {
        self.data.class.push(
          self.fn.make_class(c.id, c.name, c.description, c.page_number),
        );
      }

      for (const b of backgrounds) {
        self.data.background.push(
          self.fn.make_background(b.id, b.name, b.description, b.page_number),
        );
      }

      for (const f of foci) {
        self.data.foci.push(
          self.fn.make_foci(f.id, f.name, f.description, f.page_number),
        );
      }

      for (const s of skills) {
        self.data.skill.push(
          self.fn.make_skill(s.id, s.name, s.description, s.page_number),
        );
      }

      for (const l of languages) {
        self.data.language.push(self.fn.make_language(l.id, l.name));
      }

      for (const a of highmage_arts) {
        self.data.magic.art.highmage.push(self.fn.make_magic_art(a.id, a.name));
      }

      for (const a of elementalist_arts) {
        self.data.magic.art.elementalist.push(
          self.fn.make_magic_art(a.id, a.name),
        );
      }

      for (const a of healers_arts) {
        self.data.magic.art.healer.push(self.fn.make_magic_art(a.id, a.name));
      }

      for (const a of necromancer_arts) {
        self.data.magic.art.necromancer.push(
          self.fn.make_magic_art(a.id, a.name),
        );
      }

      for (const a of vowed_arts) {
        self.data.magic.art.vowed.push(self.fn.make_magic_art(a.id, a.name));
      }

      for (const m of elementalist_newmagics) {
        self.data.magic.newmagic.elementalist.push(
          self.fn.make_magic_newmagic(m.id, m.name, m.level),
        );
      }

      for (const m of necromancer_newmagics) {
        self.data.magic.newmagic.necromancer.push(
          self.fn.make_magic_newmagic(m.id, m.name, m.level),
        );
      }

      for (const m of highmagics) {
        self.data.magic.highmagic.push(
          self.fn.make_magic_highmagic(m.id, m.name, m.level),
        );
      }

      for (const a of light_armors) {
        self.data.equipment.armor.light.push(a.id, a.name);
      }

      for (const a of medium_armors) {
        self.data.equipment.armor.medium.push(a.id, a.name);
      }

      for (const a of heavy_armors) {
        self.data.equipment.armor.heavy.push(a.id, a.name);
      }

      for (const a of shields) {
        self.data.equipment.armor.shield.push(a.id, a.name);
      }

      for (const w of weapons) {
        self.data.equipment.weapon.push(w.id, w.name);
      }

      for (const g of gear) {
        self.data.equipment.gear.push(g.id, g.name);
      }
    },
  },
};

wwngen.fn.initialize(wwngen);
