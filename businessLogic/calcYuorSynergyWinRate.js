import { synergyEnum } from '../constants/synergyData'
import unitData from '../constants/UnitData'

// rankingがnullの時と、unitsがnullの時は考慮しない。
export const convertFromUnitIdsToSynergy = input => {
  const res = input.map(item =>
    item.units.reduce((accumulator, currentValue) => {
      const unit = unitData.find(x => x.unitId === currentValue.unitId)

      return [...accumulator, ...unit.job, ...unit.race]
    }, [])
  )
  return res
}

export const calcYourSynergyWinRate = response => {
  // 1. unitIdから、シナジーを取り出す。
  // 2. 取り出したシナジーを足す
  // 2. 試行回数で割る。
  return response
}

export const countUpTotalCountOfSynergyFromUnitIds = input => {
  const res = input.reduce((accumulator, currentValue) => {
    if (accumulator) return 888
  }, {})
  return input
}
