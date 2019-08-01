import { en } from './I18n'
import { synergyEnum as S } from './synergyData'

export const synergyLevel3Condition = [
  // レベル３のシナジーは限られている。
  { synergy: S.marine, count: 6 },
  { synergy: S.puppet, count: 6 },
  { synergy: S.puppet, count: 7 },
  { synergy: S.beast, count: 6 },
  { synergy: S.beast, count: 7 },
  { synergy: S.vanguard, count: 9 },
  { synergy: S.specialist, count: 6 },
  { synergy: S.specialist, count: 7 },
  { synergy: S.specialist, count: 8 },
  { synergy: S.specialist, count: 9 }
]

export const synergyLevel2Condition = [
  // サモナーとライダーとウォーカーとパンダはlevel1のみ。
  // シージェとロングショットは６(全６体)でlevel2
  { synergy: en.siegeBreaker, count: 6 },
  { synergy: en.longShot, count: 6 },

  /* -------------------- 4 units --------------------- */
  /* -------------------- job --------------------- */
  { synergy: en.guardian, count: 5 },
  { synergy: en.blaster, count: 5 },
  { synergy: en.supporter, count: 5 },
  { synergy: en.assassin, count: 5 },
  { synergy: en.vanguard, count: 5 },
  /* -------------------- race --------------------- */
  { synergy: en.marine, count: 5 },
  { synergy: en.mech, count: 5 },
  { synergy: en.airForce, count: 5 },
  { synergy: en.puppet, count: 5 },
  { synergy: en.psyker, count: 5 },
  { synergy: en.kraken, count: 5 },
  { synergy: en.beast, count: 5 },
  { synergy: en.rapter, count: 5 },

  /* -------------------- 5 units --------------------- */
  /* -------------------- job --------------------- */
  { synergy: en.guardian, count: 5 },
  { synergy: en.blaster, count: 5 },
  { synergy: en.assassin, count: 5 },
  { synergy: en.vanguard, count: 5 },
  /* -------------------- race --------------------- */
  { synergy: en.marine, count: 5 },
  { synergy: en.mech, count: 5 },
  { synergy: en.puppet, count: 5 },
  { synergy: en.kraken, count: 5 },
  { synergy: en.beast, count: 5 },
  { synergy: en.rapter, count: 5 }
]

export const synergyLevel1Condition = [
  // ウォーカーは１(全3体)でlevel1。
  { synergy: en.walker, count: 1 },

  // サモナーとパンダは３（全３体）でlevel1
  { synergy: en.summoner, count: 3 },
  { synergy: en.panda, count: 3 },
  // シージェとロングショットは3でlevel1
  { synergy: en.siegeBreaker, count: 3 },
  { synergy: en.siegeBreaker, count: 4 },
  { synergy: en.siegeBreaker, count: 5 },
  { synergy: en.longShot, count: 3 },
  { synergy: en.longShot, count: 4 },
  { synergy: en.longShot, count: 5 },

  /* -------------------- count 2 --------------------- */
  { synergy: en.guardian, count: 2 },
  { synergy: en.supporter, count: 2 },
  { synergy: en.assassin, count: 2 },
  { synergy: en.vanguard, count: 2 },
  { synergy: en.marine, count: 2 },
  { synergy: en.rider, count: 2 },
  { synergy: en.mech, count: 2 },
  { synergy: en.airForce, count: 2 },
  { synergy: en.puppet, count: 2 },
  { synergy: en.psyker, count: 2 },
  { synergy: en.kraken, count: 2 },
  { synergy: en.beast, count: 2 },
  { synergy: en.rapter, count: 2 },
  { synergy: en.insectoid, count: 2 },
  { synergy: en.immortal, count: 2 },

  /* -------------------- count3 --------------------- */
  { synergy: en.guardian, count: 3 },
  { synergy: en.blaster, count: 3 },
  { synergy: en.supporter, count: 3 },
  { synergy: en.assassin, count: 3 },
  { synergy: en.vanguard, count: 3 },
  { synergy: en.marine, count: 3 },
  { synergy: en.rider, count: 3 },
  { synergy: en.mech, count: 3 },
  { synergy: en.airForce, count: 3 },
  { synergy: en.puppet, count: 3 },
  { synergy: en.psyker, count: 3 },
  { synergy: en.kraken, count: 3 },
  { synergy: en.beast, count: 3 },
  { synergy: en.rapter, count: 3 },
  { synergy: en.insectoid, count: 3 },
  { synergy: en.immortal, count: 3 }
]
