import {
  apiResponse,
  output1,
  isContainThisDeckInput1
} from '../mockData/calcHeightWinRateDeckData'

import {
  sumDeckRankToCalcHighWinRateDeck,
  findIndexOfDeckFromHighWinRateDeckList
} from '../calcHighWinRateDeck'

/* ------   calcWinRanknigOfUnit   ------ */

test('must return two object', () => {
  const response = sumDeckRankToCalcHighWinRateDeck(apiResponse)

  expect(response).toEqual(output1)
})

/* ------   findIndexOfDeckFromHighWinRateDeckList   ------ */
test('findIndexOfDeckFromHighWinRateDeckList must return 0', () => {
  const deck = [
    {
      level: 1,
      unitId: 3
    },
    {
      level: 1,
      unitId: 17
    }
  ]
  const output = findIndexOfDeckFromHighWinRateDeckList(
    isContainThisDeckInput1,
    deck
  )
  expect(output).toEqual(0)
})
