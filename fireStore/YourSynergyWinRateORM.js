import { db } from './fireStoreSetup'
import { Constants } from 'expo'
import unitData from '../constants/UnitData'
import calcSynergiesFromUnitIds from '../utils/calcSynergiesFromUnitIds'
import { calcWinRateRankingOfUnit } from '../businessLogic/calcHeighWinRateUnits'
import { databaseENV } from '../config/environmentConfig'

const matchRecord = `${databaseENV}matchRecord`

export const getYourWinRateOfSynergy = async () => {
  const response = await db.collection('matchRecord').get()
  const data = response.docs.map(doc => doc.data())

  const top3WinRateOfUnits = calcWinRateRankingOfUnit(data)

  return top3WinRateOfUnits
}
