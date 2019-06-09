import unitData from '../constants/UnitData'
import _ from 'lodash'

// unitIdから、シナジーを計算する。
const calcSynergiesFromUnitIds = arr => {
  return []
  const unitIdsArray = arr.map(unit => unit.unitId)
  // 同じidのユニットの重複を考慮に入れる。
  const uniqUnitIdsArray = _.uniq(unitIdsArray)

  const synergies = uniqUnitIdsArray.reduce((accumulator, currentValue) => {
    const unit = unitData.find(unit => unit.unitId === currentValue)
    const job = unit.job
    const race = unit.race
    // accumulator.push(job)
    // accumulator.push(race)
    return [...accumulator, job, race].flat().sort()
  }, [])

  // 一旦設計しよう。
  // １０分ぐらい
  // reduceを使って、objectに入れてしまおう。
  // ArrayOfObjectを作る。
  return synergies
}

export default calcSynergiesFromUnitIds
