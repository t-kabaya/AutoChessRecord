import { removeAbnormalUnit, isValidRank } from './BusinessLogic'

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


