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
  deckText: 'deck',
  unitText: 'unit',
  top3WinRate: 'top 3 win rate',
  best3DeckText: 'top 3 deck'
}

i18n.fallbacks = true
i18n.translations = { en }
// 開発のため、一旦jaを代入
// i18n.locale = Localization.locale
i18n.locale = 'en'

export default i18n
