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

export const countUpTotalCountOfSynergy = input => {
  const res = input.reduce((accumulator, currentValue) => {
    const synergy = convertFromUnitIdsToSynergy(currentValue.units)
    const countedUpSynergy = synergy.map(item => {
      return { synergy: item, rank: currentValue.ranking }
    })

    return [...accumulator, ...countedUpSynergy]
  }, [])
  return res
}
