import { synergyEnum } from '../constants/synergyData'
import unitData from '../constants/UnitData'

export const formatAverageRankOfSynergyOfMeAndAllUser = (data, userId) => {
  const allUserSynergyRankAverage = main(data)
  const mySynergyRankAverage = main(data.filter(x => x.userId === userId))

  return { allUserSynergyRankAverage, mySynergyRankAverage }
}

const main = apiResponse =>
  // 1. unitIdから、シナジーを取り出す。
  // 2. 取り出したシナジーを足す
  // 3. 試行回数で割る。
  calcAverageRankOfSynergy(convertFromUnitIdsToSynergyWithRanking(apiResponse))
export default main

// rankingがnullの時と、unitsがnullの時は考慮しない。
export const convertFromUnitIdsToSynergy = units =>
  units.reduce((acc, value) => {
    const unit = unitData.find(x => x.unitId === value.unitId)

    return [...acc, ...unit.job, ...unit.race]
  }, [])

export const convertFromUnitIdsToSynergyWithRanking = input =>
  input.reduce((acc, value) => {
    const synergy = convertFromUnitIdsToSynergy(value.units)
    const countedUpSynergy = synergy.map(item => ({
      synergy: item,
      rank: value.ranking
    }))

    return [...acc, ...countedUpSynergy]
  }, [])

export const calcAverageRankOfSynergy = input => {
  const countedUpSynergy = input.reduce((acc, value) => {
    const isContainKey = acc.some(item => item.synergy === value.synergy)

    // accmulatorにシナジーが登録されていない時には、初期値をセット
    if (!isContainKey) {
      return [
        ...acc,
        {
          sumOfRank: value.rank,
          sumCount: 1,
          synergy: value.synergy
        }
      ]
    }

    // synergyが含まれていたらrankの合計を足し算
    return acc.map(x =>
      x.synergy === value.synergy
        ? {
          ...x,
          sumOfRank: x.sumOfRank + value.rank,
          sumCount: x.sumCount + 1
        }
        : x
    )
  }, [])

  // rank合計を足した回数で割る
  const synergyRankAverage = countedUpSynergy.map(x => ({
    synergy: x.synergy,
    averageRank: x.sumOfRank / x.sumCount,
    playCount: x.sumCount
  }))

  return synergyRankAverage
}
