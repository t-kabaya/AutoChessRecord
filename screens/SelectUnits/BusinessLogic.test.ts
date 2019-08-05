import { isValidDeck, isValidRank, isValidUnit } from './BusinessLogic'

/*-------------------- removeAbnormalUnit --------------------*/

test('correct inupt must return true', () => {
  const input = [
    {unitId: 8, level: 2}
  ]
  const rank = 7

  expect(isValidDeck(input, rank)).toEqual(true)
})

test('must detect abnormal deck', () => {
  const input1 = [
    {unitId: 8, level: 8}
  ]
  const input2 = [{unitId: 9, level: 3}]
  const rank1 = -1
  const rank2 = 0

  expect(isValidDeck(input1, rank1)).toEqual(false)
  expect(isValidDeck(input2, rank2)).toEqual(false)
})

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


