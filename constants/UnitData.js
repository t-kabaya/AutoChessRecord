import { en } from '../constants/I18n'

const unitData = [
  {
    unitId: 1,
    unitName: 'ゾウ',
    race: [en.beast],
    job: [en.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit1.jpeg')
  },
  {
    unitId: 2,
    unitName: '酸の歯',
    race: [en.beast],
    job: [en.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit2.jpeg')
  },
  {
    unitId: 3,
    unitName: '鋭いエッジ',
    race: [en.puppet],
    job: [en.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit3.jpeg')
  },
  {
    unitId: 4,
    unitName: '歌手',
    race: [en.psyker],
    job: [en.supporter],
    class: 'supporter',
    imageUrl: require('../assets/images/unit4.jpeg')
  },
  {
    unitId: 5,
    unitName: '法王',
    race: [en.psyker],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit5.jpeg')
  },
  {
    unitId: 6,
    unitName: '狙撃兵',
    race: [en.marine],
    job: [en.longShot],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit6.jpeg')
  },
  {
    unitId: 7,
    unitName: '医者',
    race: [en.marine],
    job: [en.supporter],
    class: 'supporter',
    imageUrl: '../assets/images/unit7.jpeg'
  },
  {
    unitId: 8,
    unitName: 'アイアンバードライダー',
    race: [en.rider],
    job: [en.longShot],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit8.jpeg')
  },
  {
    unitId: 9,
    unitName: '略奪者',
    race: [en.mech],
    job: [en.blaster],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit9.jpeg')
  },
  {
    unitId: 10,
    unitName: '目玉の男',
    race: [en.insectoid],
    job: [en.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit10.jpeg')
  },
  {
    unitId: 11,
    unitName: 'レーザーの爪',
    race: [en.beast],
    job: [en.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit11.jpeg')
  },
  {
    unitId: 12,
    unitName: 'パンダ僧',
    race: [en.panda],
    job: [en.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit12.jpeg')
  },
  {
    unitId: 13,
    unitName: '手品師',
    race: [en.psyker],
    job: [en.summoner],
    class: '召喚',
    imageUrl: require('../assets/images/unit13.jpeg')
  },
  {
    unitId: 14,
    unitName: 'セイレーン',
    race: [en.kraken],
    job: [en.assassin],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit14.jpeg')
  },
  {
    unitId: 15,
    unitName: '雷を呼ぶ者',
    race: [en.psyker],
    job: [en.longShot],
    class: 'レイトゲームキャリー',
    imageUrl: require('../assets/images/unit15.jpeg')
  },
  {
    unitId: 16,
    unitName: '金剛杵',
    race: [en.walker],
    job: [en.guardian],
    class: 'タンク、ベーシックアタック',
    imageUrl: require('../assets/images/unit16.jpeg')
  },
  {
    unitId: 17,
    unitName: '刃のマスター',
    race: [en.puppet],
    job: [en.vanguard],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit17.jpeg')
  },
  {
    unitId: 18,
    unitName: '空のカニ',
    race: [en.kraken],
    job: [en.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit18.jpeg')
  },
  {
    unitId: 19,
    unitName: 'ゴリラ',
    race: [en.mech],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit19.jpeg')
  },
  {
    unitId: 20,
    unitName: 'ドラゴンの息',
    race: [en.marine],
    job: [en.vanguard],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit20.jpeg')
  },
  {
    unitId: 21,
    unitName: '大盾の歩兵',
    race: [en.marine],
    job: [en.guardian],
    class: 'タンク',
    imageUrl: require('../assets/images/unit21.jpeg')
  },
  {
    unitId: 22,
    unitName: 'カミカゼ',
    race: [en.insectoid],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit22.jpeg')
  },
  {
    unitId: 23,
    unitName: '緑の大男',
    race: [en.immortal],
    job: [en.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit23.jpeg')
  },
  {
    unitId: 24,
    unitName: '暗殺剣士',
    race: [en.puppet],
    job: [en.vanguard],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit24.jpeg')
  },
  {
    unitId: 25,
    unitName: '嵐を呼ぶ者',
    race: [en.kraken],
    job: [en.specialist],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit25.jpeg')
  },
  {
    unitId: 26,
    unitName: '阿羅漢',
    race: [en.walker],
    job: [en.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit26.jpeg')
  },
  {
    unitId: 27,
    unitName: '石弓',
    race: [en.mech],
    job: [en.siegeBreaker],
    class: 'レイトゲームキャリー',
    imageUrl: require('../assets/images/unit27.jpeg')
  },
  {
    unitId: 28,
    unitName: '先導者',
    race: [en.rider],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit28.jpeg')
  },
  {
    unitId: 29,
    unitName: '恐れを知らぬ者',
    race: [en.airForce],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit29.jpeg')
  },
  {
    unitId: 30,
    unitName: '技術者',
    race: [en.airForce],
    job: [en.supporter],
    class: 'supporter',
    imageUrl: require('../assets/images/unit30.jpeg')
  },
  {
    unitId: 31,
    unitName: 'ゲリラ隊',
    race: [en.marine],
    job: [en.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit31.jpeg')
  },
  {
    unitId: 32,
    unitName: '半魚人',
    race: [en.airForce],
    job: [en.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit32.jpeg')
  },
  {
    unitId: 33,
    unitName: '悪魔の手',
    race: [en.beast],
    job: [en.summoner],
    class: '召喚',
    imageUrl: require('../assets/images/unit33.jpeg')
  },
  {
    unitId: 34,
    unitName: 'クモ',
    race: [en.insectoid],
    job: [en.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit34.jpeg')
  },
  {
    unitId: 35,
    unitName: 'オオコウモリ',
    race: [en.rapter],
    job: [en.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit35.jpeg')
  },
  {
    unitId: 36,
    unitName: 'ワシ',
    race: [en.rapter, en.beast],
    job: [en.vanguard],
    class: 'タンク',
    imageUrl: require('../assets/images/unit36.jpeg')
  },
  {
    unitId: 37,
    unitName: 'シュリケンパンダ',
    race: [en.panda],
    job: [en.assassin],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit37.jpeg')
  },
  {
    unitId: 38,
    unitName: '黄金の鬣',
    race: [en.beast],
    job: [en.guardian],
    class: 'コントロール、タンク',
    imageUrl: require('../assets/images/unit38.jpeg')
  },
  {
    unitId: 39,
    unitName: 'フェニックス',
    race: [en.rapter],
    job: [en.blaster, en.specialist],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit39.jpeg')
  },
  {
    unitId: 40,
    unitName: '塁壁',
    race: [en.puppet],
    job: [en.guardian],
    class: 'タンク',
    imageUrl: require('../assets/images/unit40.jpeg')
  },
  {
    unitId: 41,
    unitName: '嵐の守護者',
    race: [en.walker],
    job: [en.siegeBreaker],
    class: 'アビリティダメージ、コントロール',
    imageUrl: require('../assets/images/unit41.jpeg')
  },
  {
    unitId: 42,
    unitName: 'シュメールの神',
    race: [en.puppet, en.kraken],
    job: [en.summoner],
    class: '召喚',
    imageUrl: require('../assets/images/unit42.jpeg')
  },
  {
    unitId: 43,
    unitName: '戦を呼ぶ者',
    race: [en.puppet],
    job: [en.guardian],
    class: 'レイトゲームキャリー',
    imageUrl: require('../assets/images/unit43.jpeg')
  },
  {
    unitId: 44,
    unitName: 'てき弾兵',
    race: [en.marine],
    job: [en.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit44.jpeg')
  },
  {
    unitId: 45,
    unitName: '見張り',
    race: [en.mech],
    job: [en.assassin],
    class: 'ベーシックアタック',
    imageUrl: require('../assets/images/unit45.jpeg')
  },
  {
    unitId: 46,
    unitName: '巡視船',
    race: [en.airForce],
    job: [en.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit46.jpeg')
  },
  {
    unitId: 47,
    unitName: '魂の導師',
    race: [en.beast],
    job: [en.supporter],
    class: 'supporter',
    imageUrl: require('../assets/images/unit47.jpeg')
  },
  {
    unitId: 48,
    unitName: '巣箱の女王',
    race: [en.insectoid],
    job: [en.longShot],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit48.jpeg')
  },
  {
    unitId: 49,
    unitName: '骨の竜',
    race: [en.rapter, en.immortal],
    job: [en.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit49.jpeg')
  },
  {
    unitId: 50,
    unitName: 'チャン・マスター',
    race: [en.panda],
    job: [en.specialist],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit50.jpeg')
  },
  {
    unitId: 51,
    unitName: 'クジラ',
    race: [en.kraken],
    job: [en.siegeBreaker],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit51.jpeg')
  },
  {
    unitId: 52,
    unitName: '嵐',
    race: [en.mech],
    job: [en.blaster],
    class: 'アビリティダメージ',
    imageUrl: require('../assets/images/unit52.jpeg')
  },
  {
    unitId: 53,
    unitName: '食らう者',
    race: [en.rapter],
    job: [en.specialist],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit53.jpeg')
  },
  {
    unitId: 54,
    unitName: '木の芽の竜',
    race: [en.immortal],
    job: [en.vanguard],
    class: 'コントロール',
    imageUrl: require('../assets/images/unit54.jpeg')
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
  require('../assets/images/unit54.jpeg')
]

export default unitData
