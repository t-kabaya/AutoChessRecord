// import { en } from '../constants/I18n'
import { jobEnum as job } from './jobEnum'
import { raceEnum as race } from './raceEnum'

const unit = {
  // cost1
  defector: 'Defector',
  egersisRanger: 'Egersis Ranger',
  frostKnight: 'Frost Knight',
  godOfWar: 'God of War',
  heavenBomber: 'Heaven Bomber',
  ogreMage: 'Ogre Mage',
  redaxeChief: 'Redaxe Chief',
  skyBreaker: 'Sky Breaker',
  soulBreaker: 'Soul Breaker',
  stoneSpirit: 'Stone Spirit',
  tabooWitcher: 'Taboo Witcher',
  tuskChampion: 'Tusk Champion',
  unicorn: 'Unicorn',

  // cost2
  abyssalCrawler: 'Abyssal Crawler',
  abyssalGuard: 'Abyssal Guard',
  desperateDoctor: 'Desperate Doctor',
  hellKnight: 'Hell Knight',
  lightbladeKnight: 'Lightblade Knight',
  phantomQueen: 'Phantom Queen',
  ripper: 'Ripper',
  shiningDragon: 'Shining Dragon',
  skullHunter: 'Skull Hunter',
  swordman: 'Swordman',
  theSource: 'The Source',
  waterSpirit: 'Water Spirit',
  wisperSeer: 'Wisper Seer',

  // cost3
  argaliKnight: 'Argali Knight',
  dwarfSniper: 'Dwarf Sniper',
  evilKnight: 'Evil Knight',
  fallenWitcher: 'Fallen Witcher',
  flamingWizard: 'Flaming Wizard',
  lordOfSand: 'Lord of Sand',
  poisonousWorm: 'Poisonous Worm',
  shadowDevil: 'Shadow Devil',
  shadowcrawler: 'Shadowcrawler',
  thunderSpirit: 'Thunder Spirit',
  venom: 'Venom',
  warpwoodSage: 'Warpwood Sage',
  werewolf: 'Werewolf',
  windRanger: 'Wind Ranger',

  // cost4
  berserker: 'Berserker',
  doomArbiter: 'Doom Arbiter',
  dragonKnight: 'Dragon Knight',
  pirateCaptain: 'Pirate Captain',
  razorclaw: 'Razorclaw',
  shiningAssassin: 'Shining Assassin',
  siren: 'Siren',
  soulReaper: 'Soul Reaper',
  stormShaman: 'Storm Shaman',
  tortolaElder: 'Tortola Elder',
  venomancer: 'Venomancer',

  // cost5
  strangeEgg: 'Strange Egg',
  lightSorcerer: 'Blight Sorcerer',
  arkSpirit: 'Dark Spirit',
  devastator: 'Devastator',
  godOfThunder: 'God of Thunder',
  helicopter: 'Helicopter',
  tsunamiStalker: 'Tsunami Stalker'
}

const unitData = [
  {
    unitId: 1,
    unitName: unit.defector,
    race: [race.glacierClan],
    job: [job.shaman],
    imageUrl: require('../assets/images/unit1.jpeg')
  },
  {
    unitId: 2,
    unitName: unit.egersisRanger,
    race: [race.egersis],
    job: [job.hunter],
    imageUrl: require('../assets/images/unit2.jpeg')
  },
  {
    unitId: 3,
    unitName: unit.frostKnight,
    race: [race.glacierClan],
    job: [job.knight],

    imageUrl: require('../assets/images/unit3.jpeg')
  },
  {
    unitId: 4,
    unitName: unit.godOfWar,
    race: [race.divinity],
    job: [job.warrior],
    imageUrl: require('../assets/images/unit4.jpeg')
  },
  {
    unitId: 5,
    unitName: unit.heavenBomber,
    race: [race.goblin],
    job: [job.mech],

    imageUrl: require('../assets/images/unit5.jpeg')
  },
  {
    unitId: 6,
    unitName: unit.ogreMage,
    race: [race.kira],
    job: [job.mage],

    imageUrl: require('../assets/images/unit6.jpeg')
  },
  {
    unitId: 7,
    unitName: unit.redaxeChief,
    race: [race.caveClan],
    job: [job.warrior],

    imageUrl: '../assets/images/unit7.jpeg'
  },
  {
    unitId: 8,
    unitName: unit.skyBreaker,
    race: [race.goblin],
    job: [race.mech],

    imageUrl: require('../assets/images/unit8.jpeg')
  },
  {
    unitId: 9,
    unitName: unit.soulBreaker,
    race: [race.goblin],
    job: [job.assassin],

    imageUrl: require('../assets/images/unit9.jpeg')
  },
  {
    unitId: 10,
    unitName: unit.stoneSpirit,
    race: [race.spirit],
    job: [job.warrior],

    imageUrl: require('../assets/images/unit10.jpeg')
  },
  {
    unitId: 11,
    unitName: unit.tabooWitcher,
    race: [race.feathered],
    job: [job.witcher],

    imageUrl: require('../assets/images/unit11.jpeg')
  },
  {
    unitId: 12,
    unitName: unit.tuskChampion,
    race: [race.beast],
    job: [job.warrior],

    imageUrl: require('../assets/images/unit12.jpeg')
  },
  {
    unitId: 13,
    unitName: unit.unicorn,
    race: [race.beast],
    job: [job.druid],

    imageUrl: require('../assets/images/unit13.jpeg')
  },

  // cost2
  {
    unitId: 14,
    unitName: unit.abyssalCrawler,
    race: [race.marine],
    job: [job.assassin],

    imageUrl: require('../assets/images/unit14.jpeg')
  },
  {
    unitId: 15,
    unitName: unit.abyssalGuard,
    race: [race.marine],
    job: [job.warrior],

    imageUrl: require('../assets/images/unit15.jpeg')
  },
  {
    unitId: 16,
    unitName: unit.desperateDoctor,
    race: [race.glacierClan],
    job: [job.warlock],

    imageUrl: require('../assets/images/unit16.jpeg')
  },
  {
    unitId: 17,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit17.jpeg')
  },
  {
    unitId: 18,
    unitName: unit.hellKnight,
    race: [race.demon],
    job: [job.knight],

    imageUrl: require('../assets/images/unit18.jpeg')
  },
  {
    unitId: 19,
    unitName: unit.lightbladeKnight,
    race: [race.feathered],
    job: [job.assassin],

    imageUrl: require('../assets/images/unit19.jpeg')
  },
  {
    unitId: 20,
    unitName: unit.phantomQueen,
    race: [race.demon],
    job: [job.assassin],

    imageUrl: require('../assets/images/unit20.jpeg')
  },
  {
    unitId: 21,
    unitName: unit.ripper,
    race: [race.goblin],
    job: [job.mech],

    imageUrl: require('../assets/images/unit21.jpeg')
  },
  {
    unitId: 22,
    unitName: unit.shiningDragon,
    race: [race.feathered, race.dragon],
    job: [job.mage],

    imageUrl: require('../assets/images/unit22.jpeg')
  },
  {
    unitId: 23,
    unitName: unit.skullHunter,
    race: [race.caveClan],
    job: [job.hunter],

    imageUrl: require('../assets/images/unit23.jpeg')
  },
  {
    unitId: 24,
    unitName: unit.swordman,
    race: [race.caveClan],
    job: [job.warrior],

    imageUrl: require('../assets/images/unit24.jpeg')
  },
  {
    unitId: 25,
    unitName: unit.theSource,
    race: [race.human],
    job: [job.mage],

    imageUrl: require('../assets/images/unit25.jpeg')
  },
  {
    unitId: 26,
    unitName: unit.waterSpirit,
    race: [race.spirit],
    job: [job.assassin],

    imageUrl: require('../assets/images/unit26.jpeg')
  },
  {
    unitId: 27,
    unitName: unit.wisperSeer,
    race: [race.feathered],
    job: [job.druid],

    imageUrl: require('../assets/images/unit27.jpeg')
  },

  // cost3
  {
    unitId: 28,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit28.jpeg')
  },
  {
    unitId: 29,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit29.jpeg')
  },
  {
    unitId: 30,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit30.jpeg')
  },
  {
    unitId: 31,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit31.jpeg')
  },
  {
    unitId: 32,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit32.jpeg')
  },
  {
    unitId: 33,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit33.jpeg')
  },
  {
    unitId: 34,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit34.jpeg')
  },
  {
    unitId: 35,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit35.jpeg')
  },
  {
    unitId: 36,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit36.jpeg')
  },
  {
    unitId: 37,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit37.jpeg')
  },
  {
    unitId: 38,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit38.jpeg')
  },
  {
    unitId: 39,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit39.jpeg')
  },
  {
    unitId: 40,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit40.jpeg')
  },
  {
    unitId: 41,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit41.jpeg')
  },
  {
    unitId: 42,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit42.jpeg')
  },
  {
    unitId: 43,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit43.jpeg')
  },
  {
    unitId: 44,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit44.jpeg')
  },
  {
    unitId: 45,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit45.jpeg')
  },
  {
    unitId: 46,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit46.jpeg')
  },
  {
    unitId: 47,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit47.jpeg')
  },
  {
    unitId: 48,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit48.jpeg')
  },
  {
    unitId: 49,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit49.jpeg')
  },
  {
    unitId: 50,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit50.jpeg')
  },
  {
    unitId: 51,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit51.jpeg')
  },
  {
    unitId: 52,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit52.jpeg')
  },
  {
    unitId: 53,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit53.jpeg')
  },
  {
    unitId: 54,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit54.jpeg')
  },
  {
    unitId: 55,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit55.png')
  },
  {
    unitId: 56,
    unitName: unit,
    race: [],
    job: [],

    imageUrl: require('../assets/images/unit56.png')
  }
]

// Don't use map!
export const unitImagePathArray = [
  require('../assets/images/unit1.jpeg'),
  require('../assets/images/unit2.jpeg'),
  require('../assets/images/unit3.jpeg'),
  require('../assets/images/unit4.jpeg'),
  require('../assets/images/unit5.jpeg'),
  require('../assets/images/unit6.jpeg'),
  require('../assets/images/unit7.jpeg'),
  require('../assets/images/unit8.jpeg'),
  require('../assets/images/unit9.jpeg'),
  require('../assets/images/unit10.jpeg'),
  require('../assets/images/unit11.jpeg'),
  require('../assets/images/unit12.jpeg'),
  require('../assets/images/unit13.jpeg'),
  require('../assets/images/unit14.jpeg'),
  require('../assets/images/unit15.jpeg'),
  require('../assets/images/unit16.jpeg'),
  require('../assets/images/unit17.jpeg'),
  require('../assets/images/unit18.jpeg'),
  require('../assets/images/unit19.jpeg'),
  require('../assets/images/unit20.jpeg'),
  require('../assets/images/unit21.jpeg'),
  require('../assets/images/unit22.jpeg'),
  require('../assets/images/unit23.jpeg'),
  require('../assets/images/unit24.jpeg'),
  require('../assets/images/unit25.jpeg'),
  require('../assets/images/unit26.jpeg'),
  require('../assets/images/unit27.jpeg'),
  require('../assets/images/unit28.jpeg'),
  require('../assets/images/unit29.jpeg'),
  require('../assets/images/unit30.jpeg'),
  require('../assets/images/unit31.jpeg'),
  require('../assets/images/unit32.jpeg'),
  require('../assets/images/unit33.jpeg'),
  require('../assets/images/unit34.jpeg'),
  require('../assets/images/unit35.jpeg'),
  require('../assets/images/unit36.jpeg'),
  require('../assets/images/unit37.jpeg'),
  require('../assets/images/unit38.jpeg'),
  require('../assets/images/unit39.jpeg'),
  require('../assets/images/unit40.jpeg'),
  require('../assets/images/unit41.jpeg'),
  require('../assets/images/unit42.jpeg'),
  require('../assets/images/unit43.jpeg'),
  require('../assets/images/unit44.jpeg'),
  require('../assets/images/unit45.jpeg'),
  require('../assets/images/unit46.jpeg'),
  require('../assets/images/unit47.jpeg'),
  require('../assets/images/unit48.jpeg'),
  require('../assets/images/unit49.jpeg'),
  require('../assets/images/unit50.jpeg'),
  require('../assets/images/unit51.jpeg'),
  require('../assets/images/unit52.jpeg'),
  require('../assets/images/unit53.jpeg'),
  require('../assets/images/unit54.jpeg'),
  // pngが混ざるので注意。
  require('../assets/images/unit55.png'),
  require('../assets/images/unit56.png')
]

export default unitData
