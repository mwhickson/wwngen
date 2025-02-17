const names = []; // TODO:

const homelands = [
  { id: 1, name: "The Ashblight" },
  { id: 2, name: "The Black Spine" },
  { id: 3, name: "The Blind Marsh" },
  { id: 4, name: "Emed-Dar" },
  { id: 5, name: "Emed-Kist" },
  { id: 6, name: "Ka-Adun" },
  { id: 7, name: "Llaigis" },
  { id: 8, name: "Lost Emed" },
  { id: 9, name: "New Voth" },
  { id: 10, name: "Sarul" },
  { id: 11, name: "The Mirewash" },
  { id: 12, name: "The Rebel Coast" },
  { id: 13, name: "The Sisters" },
  { id: 14, name: "Thur" },
];

const racespecies = [
  { id: 1, name: "Vothian" },
  { id: 2, name: "Khalan" },
  { id: 3, name: "Lin" },
  { id: 4, name: "Olok" },
  { id: 5, name: "Osrin" },
];

const faiths = [
  { id: 1, name: "The Brass Cult" },
  { id: 2, name: "The Servants of Shun" },
  { id: 3, name: "The Old Lords" },
  { id: 4, name: "The Golden Path" },
  { id: 5, name: "The Bleeding God" },
  { id: 6, name: "The Seers of Voth" },
];

const classes = [
  { id: 1, name: "Expert" },
  { id: 2, name: "Mage" },
  { id: 3, name: "Warrior" },
  { id: 4, name: "Adventurer" },
];

const backgrounds = [
  { id: 1, name: "Artisan" },
  { id: 2, name: "Barbarian" },
  { id: 3, name: "Carter" },
  { id: 4, name: "Courtesan" },
  { id: 5, name: "Criminal" },
  { id: 6, name: "Hunter" },
  { id: 7, name: "Laborer" },
  { id: 8, name: "Merchant" },
  { id: 9, name: "Noble" },
  { id: 10, name: "Nomad" },
  { id: 11, name: "Peasant" },
  { id: 12, name: "Performer" },
  { id: 13, name: "Physician" },
  { id: 14, name: "Priest" },
  { id: 15, name: "Sailor" },
  { id: 16, name: "Scholar" },
  { id: 17, name: "Slave" },
  { id: 18, name: "Soldier" },
  { id: 19, name: "Thug" },
  { id: 20, name: "Wanderer" },
];

const foci = [
  { id: 1, name: "Alert" },
  { id: 2, name: "Armored Magic" },
  { id: 3, name: "Armsmaster" },
  { id: 4, name: "Artisan" },
  { id: 5, name: "Assassin" },
  { id: 6, name: "Authority" },
  { id: 7, name: "Close Combatant" },
  { id: 8, name: "Connected" },
  { id: 9, name: "Cultured" },
  { id: 10, name: "Die Hard" },
  { id: 11, name: "Deadeye" },
  { id: 12, name: "Dealmaker" },
  { id: 13, name: "Developed Attribute" },
  { id: 14, name: "Diplomatic Grace" },
  { id: 15, name: "Gifted Chirurgeon" },
  { id: 16, name: "Henchkeeper" },
  { id: 17, name: "Impervious Defense" },
  { id: 18, name: "Impostor" },
  { id: 19, name: "Lucky" },
  { id: 20, name: "Nullifier" },
  { id: 21, name: "Poisoner" },
  { id: 22, name: "Polymath" },
  { id: 23, name: "Rider" },
  { id: 24, name: "Shocking Assault" },
  { id: 25, name: "Sniper's Eye" },
  { id: 26, name: "Special Origin" },
  { id: 27, name: "Specialist" },
  { id: 28, name: "Spirit Familliar" },
  { id: 29, name: "Trapmaster" },
  { id: 30, name: "Unarmed Combatant" },
  { id: 31, name: "Unique Gift" },
  { id: 32, name: "Valiant Defender" },
  { id: 33, name: "Well Met" },
  { id: 34, name: "Whirlwind Assault" },
  { id: 35, name: "Xenoblooded" },
];

const skills = [
  { id: 1, name: "Administer" },
  { id: 2, name: "Connect" },
  { id: 3, name: "Convince" },
  { id: 4, name: "Craft" },
  { id: 5, name: "Exert" },
  { id: 6, name: "Heal" },
  { id: 7, name: "Know" },
  { id: 8, name: "Lead" },
  { id: 9, name: "Magic" },
  { id: 10, name: "Notice" },
  { id: 11, name: "Perform" },
  { id: 12, name: "Pray" },
  { id: 13, name: "Punch" },
  { id: 14, name: "Ride" },
  { id: 15, name: "Sail" },
  { id: 16, name: "Shoot" },
  { id: 17, name: "Sneak" },
  { id: 18, name: "Stab" },
  { id: 19, name: "Survive" },
  { id: 20, name: "Trade" },
  { id: 21, name: "Work" },
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
    make_homeland: (id, name) => ({ id: id, name: name }),
    make_racespecies: (id, name) => ({ id: id, name: name }),
    make_faith: (id, name) => ({ id: id, name: name }),
    make_class: (id, name) => ({ id: id, name: name }),
    make_background: (id, name) => ({ id: id, name: name }),
    make_foci: (id, name) => ({ id: id, name: name }),
    make_skill: (id, name) => ({ id: id, name: name }),
    make_language: (id, name) => ({ id: id, name: name }),
    make_magic_art: (id, name) => ({ id: id, name: name }),
    make_magic_highmagic: (id, name, level) => ({
      id: id,
      name: name,
      level: level,
    }),
    make_magic_newmagic: (id, name, level) => ({
      id: id,
      name: name,
      level: level,
    }),
    make_equipment_armor: (id, name) => ({ id: id, name: name }),
    make_equipment_weapon: (id, name) => ({ id: id, name: name }),
    make_equipment_weapon: (id, name) => ({ id: id, name: name }),
    make_equipment_gear: (id, name) => ({ id: id, name: name }),

    initialize: (self) => {
      for (const h of homelands) {
        self.data.homeland.push(self.fn.make_homeland(h.id, h.name));
      }

      for (const rs of racespecies) {
        self.data.racespecies.push(self.fn.make_racespecies(rs.id, rs.name));
      }

      for (const f of faiths) {
        self.data.faith.push(self.fn.make_faith(f.id, f.name));
      }

      for (const c of classes) {
        self.data.class.push(self.fn.make_class(c.id, c.name));
      }

      for (const b of backgrounds) {
        self.data.background.push(self.fn.make_background(b.id, b.name));
      }

      for (const f of foci) {
        self.data.foci.push(self.fn.make_foci(f.id, f.name));
      }

      for (const s of skills) {
        self.data.skill.push(self.fn.make_skill(s.id, s.name));
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
