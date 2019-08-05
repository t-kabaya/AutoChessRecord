import { removeAbnormalUnit, isValidRank, isValidUnit } from './BusinessLogic'

test('must remove', () => { })

/* ---------------------   isValidRank   --------------------- */

test('input 1 - 8 must return true', () => {
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8]
  for (let i = 0; i < ranks.length; i++) {
    expect(isValidRank(ranks[i])).toEqual(true)
  }
})

test('wrong input must return false', () => {
  const ranks = [null, undefined, -1, 10]
  for (let i = 0; i < ranks.length; i++) {
    expect(isValidRank(ranks)).toEqual(false)
  }
})

/*-------------------- isValidUnit --------------------*/

test('wrong input must return false', () => {
  const input = [{}, {unitId: 8}, {level: 1}, {unitId: -1, level: 1}, {unitId: 1, level: 0}, {unitId: 1, level: 4}]
  for(let i=0; i< input.length; i++) {
    expect(isValidUnit(input[i])).toEqual(false)
  }
})

test('correct input must return true', () => {
  const input = [{unitId: 8, level: 1}, {unitId: 8, level: 3},]
  for(let i=0; i< input.length; i++) {
    expect(isValidUnit(input[i])).toEqual(true)
  }
})


