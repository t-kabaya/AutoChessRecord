import unitData from '../../constants/UnitData'
import calcSynergiesFromUnitIds, {
  isLevel3,
  isLevel2,
  isLevel1,
  countUpSynergyAndCount,
  calcSynergyLevel
} from '../calcSynergiesFromUnitIds'
import {
  synergyLevel1Condition,
  synergyLevel2Condition
} from '../../constants/SynergyLevelCondition'
import { en } from '../../constants/I18n'

/* -------------------- calcSynergiesFromUnitIds --------------------- */

// 何もシナジーがない
test('noSynergyInput must return blank array', () => {
  const noSynergyInput = [{ unitId: 8, level: 2 }, { unitId: 10, level: 1 }]
  expect(calcSynergiesFromUnitIds(noSynergyInput)).toEqual([])
})

// メカのみシナジーがある
test('must return mechLevel1', () => {
  const onlyMechSynergyInput = [
    { unitId: 9, level: 1 },
    { unitId: 19, level: 1 }
  ]
  expect(calcSynergiesFromUnitIds(onlyMechSynergyInput)).toEqual(
    [{ synergy: en.mech, synergyLevel: 2 }].sort()
  )
})

const insectoid1Psyker2Blaster1Input = [
  { unitId: 4, level: 1 },
  { unitId: 5, level: 1 },
  { unitId: 8, level: 2 },
  { unitId: 10, level: 1 },
  { unitId: 13, level: 1 },
  { unitId: 15, level: 1 },
  { unitId: 22, level: 1 },
  { unitId: 39, level: 1 },
  { unitId: 48, level: 1 }
]

test('must return insectoidLevel1, psykerLevel2, BlasterLevel1', () => {
  expect(calcSynergiesFromUnitIds(insectoid1Psyker2Blaster1Input)).toEqual(
    [
      { synergy: en.blaster, synergyLevel: 3 },
      { synergy: en.insectoid, synergyLevel: 2 },
      { synergy: en.longShot, synergyLevel: 3 }
    ].sort()
  )
})

/* ------   levelFunction   ------ */

// const level3MarineInput = {synergy: en.marine, count: 6}
// const level3PuppetInput = {synergy: en.puppet, count: 6}
// const level3BeastInput = {synergy: en.beast, count: 6}
// const level3BlasterInput = {synergy: en.blaster, count: 6}
// const level3LongShotInput = {synergy: en.longShot, count: 6}
// const level3SpecialistInput = {synergy: en.specialist, count: 6}
// // {synergy: en.assassin, count: 6}
// // {synergy: en.vanguard, count: 6}

/* -------------------- level function test --------------------- */

const level3Input = [
  en.marine,
  en.puppet,
  en.beast,
  en.blaster,
  en.longShot,
  en.specialist,
  en.assassin,
  en.vanguard
]
level3Input.forEach(item => {
  test('must detect level3', () => {
    const input = { synergy: item, count: 6 }
    expect(isLevel3(input)).toEqual(true)
  })
})

level3Input.forEach(item => {
  test('must fail lack of count', () => {
    const input = { synergy: item, count: 5 }
    expect(isLevel3(input)).toEqual(false)
  })
})

/* -------------------- isLevel2 --------------------- */

synergyLevel2Condition.forEach(item => {
  test('must detect level2', () => {
    expect(isLevel2(item)).toEqual(true)
  })
})

/* -------------------- isLevel1 --------------------- */

synergyLevel1Condition.forEach(item => {
  test('must detect level1', () => {
    expect(isLevel1(item)).toEqual(true)
  })
})

test('must detect mech level1', () => {
  const level1MechInput = { synergy: en.mech, count: 3 }

  expect(isLevel1(level1MechInput)).toEqual(true)
})

/* -------------------- countUpSynergyAndCount --------------------- */

test('countUpSynergyAndCount must detect mech level 1', () => {
  const countUpSynergyLevelInput = [
    { count: 1, synergy: 'blaster' },
    { count: 1, synergy: 'blaster' },
    { count: 1, synergy: 'mech' },
    { count: 1, synergy: 'mech' }
  ]

  const output = [
    { count: 2, synergy: 'blaster' },
    { count: 2, synergy: 'mech' }
  ]
  expect(countUpSynergyAndCount(countUpSynergyLevelInput)).toEqual(output)
})

/* -------------------- calcSynergyLevel --------------------- */

test('calcSynergy must detect mech level 1', () => {
  const calcSynergyLevelInput = [
    { synergy: en.mech, count: 3 },
    { count: 1, synergy: 'blaster' }
  ]

  // オートチェスでは、synergyLevelは、最小コマ数として扱う。
  expect(calcSynergyLevel(calcSynergyLevelInput)).toEqual([
    { synergyLevel: 2, synergy: 'mech' }
  ])
})
