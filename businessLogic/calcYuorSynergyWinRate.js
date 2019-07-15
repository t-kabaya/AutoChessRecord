import { synergyEnum } from '../constants/synergyData'
import unitData from '../constants/UnitData'

// rankingがnullの時と、unitsがnullの時は考慮しない。
export const convertFromUnitIdsToSynergy = units =>
  units.reduce((accumulator, currentValue) => {
    const unit = unitData.find(x => x.unitId === currentValue.unitId)

    return [...accumulator, ...unit.job, ...unit.race]
  }, [])

export const calcYourSynergyWinRate = response => {
  // 1. unitIdから、シナジーを取り出す。
  // 2. 取り出したシナジーを足す
  // 2. 試行回数で割る。
  return response
}

export const convertFromUnitIdsToSynergyWithRanking = input => {
  const res = input.reduce((accumulator, currentValue) => {
    const synergy = convertFromUnitIdsToSynergy(currentValue.units)
    const countedUpSynergy = synergy.map(item => {
      return { synergy: item, rank: currentValue.ranking }
    })

    return [...accumulator, ...countedUpSynergy]
  }, [])
  return res
}

export const calcAverageRankOfSynergy = input => {
  const countedUpSynergy = input.reduce((accumulator, currentValue) => {
    const isContainKey = accumulator.some(
      item => item.synergy === currentValue.synergy
    )
    if (isContainKey) {
      return accumulator.map(x => {
        if (x.synergy === currentValue.synergy) {
          return {
            ...x,
            sumOfRank: x.sumOfRank + currentValue.rank,
            sumCount: x.sumCount + 1
          }
        }
        return x
      })
    } else {
      return [
        ...accumulator,
        {
          sumOfRank: currentValue.rank,
          sumCount: 1,
          synergy: currentValue.synergy
        }
      ]
    }
  }, [])

  // calc average
  const synergyRankAverage = countedUpSynergy.map(x => ({
    synergy: x.synergy,
    averageRank: x.sumOfRank / x.sumCount
  }))

  return synergyRankAverage
}
