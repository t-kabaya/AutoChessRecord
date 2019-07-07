import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

export const en = {
  /* -------------------- job --------------------- */
  guardian: 'guardian',
  blaster: 'blaster',
  supporter: 'supporter',
  longShot: 'longShot',
  siegeBreaker: 'siegeBreaker',
  specialist: 'specialist',
  assassin: 'assassin',
  summoner: 'summoner',
  vanguard: 'vanguard',
  /* -------------------- race --------------------- */
  marine: 'marine',
  rider: 'rider',
  mech: 'mech',
  airForce: 'airForce',
  puppet: 'puppet',
  psyker: 'psyker',
  walker: 'walker',
  kraken: 'kraken',
  beast: 'beast',
  rapter: 'rapter',
  insectoid: 'insectoid',
  immortal: 'immortal',
  panda: 'panda',

  /* -------------------- text --------------------- */
  deckText: 'rocommended deck',
  unitText: 'unit',
  top3WinRate: 'top 3 win rate',
  best3DeckText: 'top 3 deck',
  saveMatchText: 'save match',
  backButtonText: 'back',
  saveButtonText: 'save',
  saveMatchRecordButtonText: 'save match',
  rankingText: 'place'
}

export const ja = {
  /* -------------------- job --------------------- */
  guardian: 'ガーディアン',
  blaster: 'ブラスター',
  supporter: 'サポーター',
  longShot: 'ロングショット',
  siegeBreaker: 'シージェブレーカー',
  specialist: 'スペシャリスト',
  assassin: 'アサシン',
  summoner: 'サモナー',
  vanguard: 'ヴァンガード',
  /* -------------------- race --------------------- */
  marine: '海兵',
  rider: 'ライダー',
  mech: 'メカ',
  airForce: 'エアフォース',
  puppet: 'パペット',
  psyker: 'サイカー',
  walker: 'ウォーカー',
  kraken: 'クラーケン',
  beast: 'ビースト',
  rapter: 'ラプター',
  insectoid: 'インセクトイド',
  immortal: 'イモータル',
  panda: 'パンダ',

  /* -------------------- text --------------------- */
  deckText: 'おすすめデッキ',
  unitText: 'ユニット',
  top3WinRate: 'top3勝率',
  best3DeckText: '勝率の高いデッキtop3',
  saveMatchText: '戦績を記録',
  backButtonText: '戻る',
  saveButtonText: '保存',
  saveMatchRecordButtonText: '戦績を保存',
  rankingText: '位'
}

i18n.fallbacks = true
i18n.translations = { en, ja }
// can not test without real devaice
i18n.locale = Localization.locale
// i18n.locale = 'ja'

export default i18n
