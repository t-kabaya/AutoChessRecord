import unitData from '../../constants/UnitData'

import calcSynergiesFromUnitIds from '../calcSynergiesFromUnitIds'

// 何もシナジーがない
const noSynergyInput = [
  {id: 8, level: 2},
  {id: 10, level: 1}
]

test('noSynergyInput must return blank array', () => {
  expect(calcSynergiesFromUnitIds(noSynergyInput)).toEqual([]);
});

// ロングショットのみシナジーがある
const onlyMechSynergyInput = [
  {id: 9, level: 1},
  {id: 19, level: 1},
]

test('must return mechLevel1', () => {
  expect(calcSynergiesFromUnitIds(noSynergyInput)).toEqual([{synergy: 'mech', level: 1}]);
});

const insectoid1Psyker2Blaster1Input = [
  {id: 10, level: 1},
  {id: 39, level: 1},
  {id: 22, level: 1},
  {id: 48, level: 1},
  {id: 4, level: 1},
  {id: 5, level: 1},
  {id: 15, level: 1},
  {id: 13, level: 1},
]

test('must return insectoidLevel1, psykerLevel2, BlasterLevel1', () => {
  expect(calcSynergiesFromUnitIds(noSynergyInput)).toEqual([{synergy: 'insectoid', level: 1}, {synergy: 'psyker', level: 2}, {synergy: 'blaster', level: 1}]);
});