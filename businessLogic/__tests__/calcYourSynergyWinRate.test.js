import mockInput from '../mockData/calcYourSynergyWinRate'
import { synergyEnum } from '../../constants/synergyData'

import {
  calcYourSynergyWinRate,
  countUpTotalCountOfSynergyFromUnitIds,
  convertFromUnitIdsToSynergy
} from '../calcYuorSynergyWinRate'

/* ------   calcYourSynergyWinRate   ------ */

// test('response keys must have all synergy', () => {
//   const response = calcYourSynergyWinRate(mockInput)
//   for (let synergy in synergyEnum) {
//     const isContainSynergy = response.some(x => x.synergy === synergy)
//     expect(isContainSynergy).toEqual(true)
//   }
// })

// const output1 = [
//   {
//     synergy: synergyEnum.marine
//   }
// ]
// const output = {
//   assassin: 2,
//   puppet: 2,
//   psyker: 1,
//   supporter: 1,
//   beast: 1,
//   vanguard: 1,
//   totalLoopCount: 9
// }

test('sandbox', () => {
  const response = convertFromUnitIdsToSynergy(mockInput)
  const output = [
    [
      synergyEnum.assassin,
      synergyEnum.puppet,
      synergyEnum.supporter,
      synergyEnum.psyker
    ],
    [
      synergyEnum.vanguard,
      synergyEnum.beast,
      synergyEnum.assassin,
      synergyEnum.puppet
    ]
  ]
  expect(response).toEqual(output)
})
