import { en } from '../constants/I18n'

const unitData = [
  {
    unitId: 1,
    unitName: en.tusker,
    race: [en.beast],
    job: [en.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit1.jpeg')
  },
  {
    unitId: 2,
    unitName: en.acidtooth,
    race: [en.beast],
    job: [en.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit2.jpeg')
  },
  {
    unitId: 3,
    unitName: en.keenedge,
    race: [en.puppet],
    job: [en.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit3.jpeg')
  },
  {
    unitId: 4,
    unitName: en.chanter,
    race: [en.psyker],
    job: [en.supporter],
    class: 'supporter',
    imageUrl: require('../assets/images/unit4.jpeg')
  },
  {
    unitId: 5,
    unitName: en.hierophant,
    race: [en.psyker],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit5.jpeg')
  },
  {
    unitId: 6,
    unitName: en.sniper,
    race: [en.marine],
    job: [en.longShot],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit6.jpeg')
  },
  {
    unitId: 7,
    unitName: en.medic,
    race: [en.marine],
    job: [en.supporter],
    class: 'supporter',
    imageUrl: '../assets/images/unit7.jpeg'
  },
  {
    unitId: 8,
    unitName: en.ironbirdRider,
    race: [en.rider],
    job: [en.longShot],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit8.jpeg')
  },
  {
    unitId: 9,
    unitName: en.marauder,
    race: [en.mech],
    job: [en.blaster],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit9.jpeg')
  },
  {
    unitId: 10,
    unitName: en.oculus,
    race: [en.insectoid],
    job: [en.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit10.jpeg')
  },
  {
    unitId: 11,
    unitName: en.razorclaw,
    race: [en.beast],
    job: [en.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit11.jpeg')
  },
  {
    unitId: 12,
    unitName: en.pandaMonk,
    race: [en.panda],
    job: [en.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit12.jpeg')
  },
  {
    unitId: 13,
    unitName: en.illusionist,
    race: [en.psyker],
    job: [en.summoner],
    class: '召喚',
    imageUrl: require('../assets/images/unit13.jpeg')
  },
  {
    unitId: 14,
    unitName: en.siren,
    race: [en.kraken],
    job: [en.assassin],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit14.jpeg')
  },
  {
    unitId: 15,
    unitName: en.thunderer,
    race: [en.psyker],
    job: [en.longShot],
    class: 'レイトゲームキャリー',
    imageUrl: require('../assets/images/unit15.jpeg')
  },
  {
    unitId: 16,
    unitName: en.vajra,
    race: [en.walker],
    job: [en.guardian],
    class: 'タンク、ベーシックアタック',
    imageUrl: require('../assets/images/unit16.jpeg')
  },
  {
    unitId: 17,
    unitName: en.blademaster,
    race: [en.puppet],
    job: [en.vanguard],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit17.jpeg')
  },
  {
    unitId: 18,
    unitName: en.skycrab,
    race: [en.kraken],
    job: [en.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit18.jpeg')
  },
  {
    unitId: 19,
    unitName: en.gorilla,
    race: [en.mech],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit19.jpeg')
  },
  {
    unitId: 20,
    unitName: en.dragonBreath,
    race: [en.marine],
    job: [en.vanguard],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit20.jpeg')
  },
  {
    unitId: 21,
    unitName: en.paviser,
    race: [en.marine],
    job: [en.guardian],
    class: 'タンク',
    imageUrl: require('../assets/images/unit21.jpeg')
  },
  {
    unitId: 22,
    unitName: en.kamikaze,
    race: [en.insectoid],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit22.jpeg')
  },
  {
    unitId: 23,
    unitName: en.vinewarden,
    race: [en.immortal],
    job: [en.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit23.jpeg')
  },
  {
    unitId: 24,
    unitName: en.slasher,
    race: [en.puppet],
    job: [en.vanguard],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit24.jpeg')
  },
  {
    unitId: 25,
    unitName: en.electrocutioner,
    race: [en.kraken],
    job: [en.specialist],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit25.jpeg')
  },
  {
    unitId: 26,
    unitName: en.arhat,
    race: [en.walker],
    job: [en.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit26.jpeg')
  },
  {
    unitId: 27,
    unitName: en.catapult,
    race: [en.mech],
    job: [en.siegeBreaker],
    class: 'レイトゲームキャリー',
    imageUrl: require('../assets/images/unit27.jpeg')
  },
  {
    unitId: 28,
    unitName: en.outrider,
    race: [en.rider],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit28.jpeg')
  },
  {
    unitId: 29,
    unitName: en.dauntless,
    race: [en.airForce],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit29.jpeg')
  },
  {
    unitId: 30,
    unitName: en.engineer,
    race: [en.airForce],
    job: [en.supporter],
    class: 'supporter',
    imageUrl: require('../assets/images/unit30.jpeg')
  },
  {
    unitId: 31,
    unitName: en.commando,
    race: [en.marine],
    job: [en.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit31.jpeg')
  },
  {
    unitId: 32,
    unitName: en.mortus,
    race: [en.airForce],
    job: [en.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit32.jpeg')
  },
  {
    unitId: 33,
    unitName: en.dreadpaw,
    race: [en.beast],
    job: [en.summoner],
    class: '召喚',
    imageUrl: require('../assets/images/unit33.jpeg')
  },
  {
    unitId: 34,
    unitName: en.mindbreaker,
    race: [en.insectoid],
    job: [en.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit34.jpeg')
  },
  {
    unitId: 35,
    unitName: en.direwing,
    race: [en.rapter],
    job: [en.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit35.jpeg')
  },
  {
    unitId: 36,
    unitName: en.skyclaw,
    race: [en.rapter, en.beast],
    job: [en.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit36.jpeg')
  },
  {
    unitId: 37,
    unitName: en.shurikenPanda,
    race: [en.panda],
    job: [en.assassin],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit37.jpeg')
  },
  {
    unitId: 38,
    unitName: en.goldmane,
    race: [en.beast],
    job: [en.guardian],
    class: 'コントロール、タンク',
    imageUrl: require('../assets/images/unit38.jpeg')
  },
  {
    unitId: 39,
    unitName: en.sunfire,
    race: [en.rapter],
    job: [en.blaster, en.specialist],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit39.jpeg')
  },
  {
    unitId: 40,
    unitName: en.bulwark,
    race: [en.puppet],
    job: [en.guardian],
    class: 'タンク',
    imageUrl: require('../assets/images/unit40.jpeg')
  },
  {
    unitId: 41,
    unitName: en.tempestKeeper,
    race: [en.walker],
    job: [en.siegeBreaker],
    class: 'アビリティダメージ、コントロール',
    imageUrl: require('../assets/images/unit41.jpeg')
  },
  {
    unitId: 42,
    unitName: en.mantakor,
    race: [en.puppet, en.kraken],
    job: [en.summoner],
    class: '召喚',
    imageUrl: require('../assets/images/unit42.jpeg')
  },
  {
    unitId: 43,
    unitName: en.warbringer,
    race: [en.puppet],
    job: [en.guardian],
    class: 'レイトゲームキャリー',
    imageUrl: require('../assets/images/unit43.jpeg')
  },
  {
    unitId: 44,
    unitName: en.grenadier,
    race: [en.marine],
    job: [en.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit44.jpeg')
  },
  {
    unitId: 45,
    unitName: en.sentinel,
    race: [en.mech],
    job: [en.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit45.jpeg')
  },
  {
    unitId: 46,
    unitName: en.cruiser,
    race: [en.airForce],
    job: [en.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit46.jpeg')
  },
  {
    unitId: 47,
    unitName: en.soulmentor,
    race: [en.beast],
    job: [en.supporter],
    class: 'supporter',
    imageUrl: require('../assets/images/unit47.jpeg')
  },
  {
    unitId: 48,
    unitName: en.hiveQueen,
    race: [en.insectoid],
    job: [en.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit48.jpeg')
  },
  {
    unitId: 49,
    unitName: en.bonewyrn,
    race: [en.rapter, en.immortal],
    job: [en.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit49.jpeg')
  },
  {
    unitId: 50,
    unitName: en.chanMaster,
    race: [en.panda],
    job: [en.specialist],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit50.jpeg')
  },
  {
    unitId: 51,
    unitName: en.mirageCaller,
    race: [en.kraken],
    job: [en.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit51.jpeg')
  },
  {
    unitId: 52,
    unitName: en.hailstorm,
    race: [en.mech],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit52.jpeg')
  },
  {
    unitId: 53,
    unitName: en.devourer,
    race: [en.rapter],
    job: [en.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit53.jpeg')
  },
  {
    unitId: 54,
    unitName: en.forestRager,
    race: [en.immortal],
    job: [en.vanguard],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit54.jpeg')
  },
  {
    unitId: 55,
    unitName: en.ironshell,
    race: [en.psyker],
    job: [en.guardian],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit55.png')
  },
  {
    unitId: 56,
    unitName: en.soulTaker,
    race: [en.immortal],
    job: [en.assassin],
    class: 'アビリティダメージ',
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
