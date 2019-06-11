import unitData from '../constants/UnitData'
import _ from 'lodash'
import { en } from '../constants/I18n'
import {
  synergyLevel1Condition,
  synergyLevel2Condition
} from '../constants/SynergyLevelCondition'

// unitIdから、シナジーを計算する。
const calcSynergiesFromUnitIds = arr => {
  const unitIdsArray = arr.map(unit => unit.unitId)
  if (unitIdsArray.includes(undefined)) {
    throw new Error('error at uniqIdsArray')
  }
  // 同じidのユニットの重複を考慮に入れる。
  const uniqUnitIdsArray = _.uniq(unitIdsArray)

  const unFormattedSynergiesList = uniqUnitIdsArray.reduce(
    (accumulator, currentValue) => {
      // const unit = unitData.find(unit => unit.unitId === currentValue)
      const unit = unitData.find(unit => unit.unitId === currentValue)
      console.log(unit)

      const job = unit.job
      const race = unit.race
      // accumulator.push(job)
      // accumulator.push(race)
      return [...accumulator, job, race].flat().sort()
    },
    []
  )

  const synergiesWithoutLevel = unFormattedSynergiesList.reduce(
    (accumulator, currentValue) => {
      if (accumulator.some(synergy => synergy.hasOwnProperty(currentValue))) {
        for (let i = 0; i < accumulator.length; i++) {
          if (accumulator[i].synergy === currentValue) {
            accumulator[i].count = accumulator[i].count + 1
          }
        }

        return accumulator
      } else {
        return [...accumulator, { synergy: currentValue, count: 1 }]
      }
    },
    []
  )

  // level 3, 2, 1の順に、シナジーが発動した順にreturnしていく。
  const synergies = synergiesWithoutLevel.reduce(
    (accumulator, currentValue) => {
      // lv3の時
      if (isLevel3(currentValue)) {
        // lv2の時
      } else if (isLevel2(currentValue)) {
        // lv1の時
      } else if (isLevel1(currentValue)) {
      } else {
        return accumulator
      }
    }
  )

  return synergies
}

export default calcSynergiesFromUnitIds

export const isLevel3 = input => {
  if (
    // level3を達成出来る種族は限られている。
    [
      en.marine,
      en.puppet,
      en.beast,
      en.blaster,
      en.longShot,
      en.specialist,
      en.assassin,
      en.vanguard
    ].includes(input.synergy) &&
    input.count >= 6
  ) {
    return true
  }
  return false
}

export const isLevel2 = condition => {
  if (synergyLevel2Condition.includes(condition)) {
    return true
  } else {
    return false
  }
}

export const isLevel1 = condition => {
  if (synergyLevel1Condition.includes(condition)) {
    return true
  } else {
    return false
  }
}
