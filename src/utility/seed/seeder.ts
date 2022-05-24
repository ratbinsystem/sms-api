import express from 'express'
import mongoose from 'mongoose'
import OrganisationModel from '../../model/OrganisationModel'
import PinModal from '../../model/PinModal'
import TypeModel from '../../model/TypeModel'
import startServer from '../common'
const DB_PATH =
  process.env.DB_PATH ||
  'mongodb+srv://rahuladsps:Pagtj2052M@cluster0.u5i8u.mongodb.net/schoolManagementSystem?retryWrites=true&w=majority'
import Logger from '../Logger'
import { organisationFactory, pinFactory, typeFactory } from './factory'
const app = express()

export const dbSeed = async () => {
  const conn = mongoose.createConnection(DB_PATH)
  startServer(app, 8100)
  await conn.dropDatabase()
  Logger.log('Seeding Started')
  await TypeModel.insertMany(typeFactory())
  await PinModal.insertMany(pinFactory())
  await OrganisationModel.insertMany(await getModels(organisationFactory, 20))
  Logger.log('Seeding Cmpleted')
  process.exit()
}

export const getModels = async (fn: any, numberOfModel: number) => {
  let data: any[] = []
  for (let index = 0; index < numberOfModel; index++) {
    const newData = await fn()
    data = [...data, newData]
  }
  return data
}

dbSeed()
