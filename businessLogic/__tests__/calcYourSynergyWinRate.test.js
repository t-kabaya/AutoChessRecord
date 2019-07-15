import mockInput from '../mockData/calcYourSynergyWinRate'
import { synergyEnum } from '../../constants/synergyData'

import {
  calcYourSynergyWinRate,
  convertFromUnitIdsToSynergyWithRanking,
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

/* ------   convertFromUnitIdsToSynergyWithRanking   ------ */

test('mustCountUpTotalCount from array', () => {
  const input = mockInput
  // const output = [
  //   {
  //     synergy: synergyEnum.assassin,
  //     averageRank: 4.5
  //   },
  //   {
  //     synergy: synergyEnum.puppet,
  //     averageRank: 4.5
  //   },
  //   {
  //     synergy: synergyEnum.psyker,
  //     averageRank: 1
  //   },
  //   {
  //     synergy: synergyEnum.supporter,
  //     averageRank: 1
  //   },
  //   {
  //     synergy: synergyEnum.beast,
  //     averageRank: 8
  //   },
  //   {
  //     synergy: synergyEnum.vanguard,
  //     averageRank: 8
  //   }
  // ]

  const output = [
    { rank: 1, synergy: 'assassin' },
    { rank: 1, synergy: 'puppet' },
    { rank: 1, synergy: 'supporter' },
    { rank: 1, synergy: 'psyker' },
    { rank: 8, synergy: 'vanguard' },
    { rank: 8, synergy: 'beast' },
    { rank: 8, synergy: 'assassin' },
    { rank: 8, synergy: 'puppet' }
  ]
  // const output = [
  //   {
  //     synergy: synergyEnum.assassin,
  //     sumOfRank: 9,
  //     sumCount: 2
  //   },
  //   {
  //     synergy: synergyEnum.puppet,
  //     sumOfRank: 9,
  //     sumCount: 2
  //   },
  //   {
  //     synergy: synergyEnum.psyker,
  //     sumOfRank: 1,
  //     sumCount: 1
  //   },
  //   {
  //     synergy: synergyEnum.supporter,
  //     sumOfRank: 1,
  //     sumCount: 1
  //   },
  //   {
  //     synergy: synergyEnum.vanguard,
  //     sumOfRank: 8,
  //     sumCount: 1
  //   },
  //   {
  //     synergy: synergyEnum.beast,
  //     sumOfRank: 8,
  //     sumCount: 1
  //   }
  // ]
  expect(convertFromUnitIdsToSynergyWithRanking(input)).toEqual(output)
})

/* ------   convertFromUnitIdsToSynergy   ------ */

test('convertFromUnitIdsToSynergy', () => {
  const input1 = [
    // 鋭いエッジ、アサシン、パペット
    {
      level: 1,
      unitId: 3
    },
    // 歌手、サイカー、サポーター
    {
      level: 1,
      unitId: 4
    }
  ]
  const output1 = [
    synergyEnum.assassin,
    synergyEnum.puppet,
    synergyEnum.supporter,
    synergyEnum.psyker
  ]
  const input2 = [
    // 酸の歯、ビースト、ヴァンガード
    {
      level: 1,
      unitId: 2
    },
    // 鋭いエッジ、アサシン、パペット
    {
      level: 1,
      unitId: 3
    }
  ]
  const output2 = [
    synergyEnum.vanguard,
    synergyEnum.beast,
    synergyEnum.assassin,
    synergyEnum.puppet
  ]

  expect(convertFromUnitIdsToSynergy(input1)).toEqual(output1)

  expect(convertFromUnitIdsToSynergy(input2)).toEqual(output2)
})
