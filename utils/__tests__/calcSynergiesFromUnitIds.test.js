import unitData from '../../constants/UnitData'
import calcSynergiesFromUnitIds, {isLevel3} from '../calcSynergiesFromUnitIds'
import {en} from '../../constants/I18n'

// 何もシナジーがない
const noSynergyInput = [
  {unitId: 8, level: 2},
  {unitId: 10, level: 1}
]

// test('noSynergyInput must return blank array', () => {
//   expect(calcSynergiesFromUnitIds(noSynergyInput)).toEqual([]);
// });

// ロングショットのみシナジーがある
const onlyMechSynergyInput = [
  {unitId: 9, level: 1},
  {unitId: 19, level: 1},
]

test('must return mechLevel1', () => {
  expect(calcSynergiesFromUnitIds(onlyMechSynergyInput)).toEqual([{synergy: 'mech', level: 1}].sort());
});

const insectoid1Psyker2Blaster1Input = [
  {unitId: 10, level: 1},
  {unitId: 39, level: 1},
  {unitId: 22, level: 1},
  {unitId: 48, level: 1},
  {unitId: 4, level: 1},
  {unitId: 5, level: 1},
  {unitId: 15, level: 1},
  {unitId: 13, level: 1},
]

test('must return insectoidLevel1, psykerLevel2, BlasterLevel1', () => {
  expect(calcSynergiesFromUnitIds(noSynergyInput)).toEqual([{synergy: 'insectoid', level: 1}, {synergy: 'psyker', level: 2}, {synergy: 'blaster', level: 1}].sort());
});

/*------   levelFunction   ------*/


// const level3MarineInput = {synergy: en.marine, count: 6}
// const level3PuppetInput = {synergy: en.puppet, count: 6}
// const level3BeastInput = {synergy: en.beast, count: 6}
// const level3BlasterInput = {synergy: en.blaster, count: 6}
// const level3LongShotInput = {synergy: en.longShot, count: 6}
// const level3SpecialistInput = {synergy: en.specialist, count: 6}
// // {synergy: en.assassin, count: 6}
// // {synergy: en.vanguard, count: 6}

test('must detect level3', () => {
 
  expect(en.marine).toEqual('marine');
});


const level3Input = [en.marine, en.puppet, en.beast, en.blaster, en.longShot, en.specialist, en.assassin, en.vanguard]
level3Input.forEach(item => {
  test('must detect level3', () => {
    const input = {synergy: item, count: 6}
    expect(isLevel3(input)).toEqual(true);
  });
})
  

