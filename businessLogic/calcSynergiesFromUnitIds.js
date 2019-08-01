import unitData from '../constants/UnitData'
import _ from 'lodash'
import { en } from '../constants/I18n'
import {
  synergyLevel1Condition,
  synergyLevel2Condition,
  synergyLevel3Condition
} from '../constants/SynergyLevelCondition'

// unitIdから、シナジーを計算する。
const calcSynergiesFromUnitIds = arr => {
  const unitIdsArray = arr.map(unit => unit.unitId)
  if (unitIdsArray.includes(undefined)) {
    throw new Error('error at uniqIdsArray')
  }
  debugger
  // 同じidのユニットの重複を考慮に入れる。
  const uniqUnitIdsArray = _.uniq(unitIdsArray)

  const unFormattedSynergiesList = uniqUnitIdsArray.reduce(
    (accumulator, currentValue) => {
      // const unit = unitData.find(unit => unit.unitId === currentValue)
      const unit = unitData.find(unit => unit.unitId === currentValue)

      const job = unit.job
      const race = unit.race
      // accumulator.push(job)
      // accumulator.push(race)
      return [...accumulator, job, race].flat().sort()
    },
    []
  )
  debugger

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
  debugger

  const countedUpSynergiesArray = countUpSynergyAndCount(synergiesWithoutLevel)
  debugger

  // level 3, 2, 1の順に、シナジーが発動した順にreturnしていく。
  const synergies = calcSynergyLevel(countedUpSynergiesArray)
  debugger

  // sort for test
  return synergies.sort()
}

export default calcSynergiesFromUnitIds

/* -------------------- PRIVATE --------------------- */

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
  if (synergyLevel2Condition.some(item => areEqualShallow(condition, item))) {
    return true
  } else {
    return false
  }
}

export const isLevel1 = condition => {
  // jsでは、object === objectは、エラーになる。object oriented programingだからね。
  if (synergyLevel1Condition.some(item => areEqualShallow(item, condition))) {
    return true
  } else {
    return false
  }
}

// ここでバグが起きている。
export const calcSynergyLevel = synergiesWithoutLevel =>
  synergiesWithoutLevel.reduce((accumulator, currentValue) => {
    if (isLevel3(currentValue)) {
      const synergyLevel = convertCountIntoSynergyLevel(
        synergyLevel3Condition,
        currentValue
      )
      return [...accumulator, { synergyLevel, synergy: currentValue.synergy }]
    } else if (isLevel2(currentValue)) {
      const synergyLevel = convertCountIntoSynergyLevel(
        synergyLevel2Condition,
        currentValue
      )
      return [...accumulator, { synergyLevel, synergy: currentValue.synergy }]
    } else if (isLevel1(currentValue)) {
      const synergyLevel = convertCountIntoSynergyLevel(
        synergyLevel1Condition,
        currentValue
      )
      return [...accumulator, { synergyLevel, synergy: currentValue.synergy }]
    } else {
      return accumulator
    }
  }, [])

export const countUpSynergyAndCount = data => {
  const result = data.reduce((accumulator, currentValue) => {
    if (accumulator.some(item => item.synergy === currentValue.synergy)) {
      const newAccumulator = accumulator.map(x => {
        if (x.synergy === currentValue.synergy) {
          return { synergy: x.synergy, count: x.count + 1 }
        } else {
          return x
        }
      })
      return newAccumulator
    } else {
      return [...accumulator, currentValue]
    }
  }, [])

  // need sort for unit test
  return result.sort()
}

// shallow equal?を行う。
const areEqualShallow = (a, b) => {
  for (var key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false
    }
  }
  for (var key in b) {
    if (!(key in a) || a[key] !== b[key]) {
      return false
    }
  }
  return true
}

// countが３の時、ライダー２と表示するための関数
export const convertCountIntoSynergyLevel = (
  synergyCondition,
  currentValue
) => {
  return synergyCondition
    .filter(item => item.synergy === currentValue.synergy)
    .reduce((accumulator, currentValue) => {
      if (accumulator > currentValue.count) {
        return currentValue.count
      }
      return accumulator
    }, 10)
}
