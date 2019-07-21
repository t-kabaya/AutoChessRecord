import {
  apiResponse,
  output1,
  isContainThisDeckInput1
} from '../mockData/calcHeightWinRateDeckData'

import { calcHighWinRateDeck, isContainThisDeck } from '../calcHighWinRateDeck'

/* ------   calcWinRanknigOfUnit   ------ */

// test('must return two object', () => {
//   const response = calcHighWinRateDeck(apiResponse)

//   expect(response).toEqual(output1)
// })

/* ------   isContainThisDeck   ------ */
test('isContainThisDeck', () => {
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
  const output = isContainThisDeck(isContainThisDeckInput1, deck)
  expect(output).toEqual(true)
})
