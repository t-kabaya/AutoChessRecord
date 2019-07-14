import { db } from './fireStoreSetup'
import { Constants } from 'expo'
import unitData from '../constants/UnitData'
import calcSynergiesFromUnitIds from '../utils/calcSynergiesFromUnitIds'
import { calcWinRateRankingOfUnit } from '../businessLogic/calcHeighWinRateUnits'
import { databaseENV } from '../config/environmentConfig'

const matchRecord = `${databaseENV}matchRecord`

export const getYourWinRateOfSynergy = async () => {
  console.log({ matchRecord })

  const response = await db.collection('devmatchRecord').get()
  const data = response.docs.map(doc => doc.data())

  return data
}
