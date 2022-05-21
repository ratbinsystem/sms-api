import { NextFunction, Request, Response, Express } from 'express'
import 'dotenv/config'
const DB_PATH =
  process.env.DB_PATH ||
  'mongodb+srv://rahuladsps:Pagtj2052M@cluster0.u5i8u.mongodb.net/schoolManagementSystem?retryWrites=true&w=majority'
import mongoose from 'mongoose'
import Logger from './Logger'
import { string_number } from './types'
export const jsonResponse = (res: Response, code: number, data: any) => {
  res.status(code).json({
    status: 'success',
    data
  })
}
export const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => any
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}
const connectDb = async (DB_URL: string) => await mongoose.connect(DB_URL)

export default (app:Express , PORT: string_number, DB_URL = DB_PATH) => {
  app.listen(PORT, () => {
    Logger.log(`app started @ ${PORT}`, 'Connecting to database ...')
    connectDb(DB_URL)
      .then((res) => Logger.log('DB Connection success'))
      .catch((err) => Logger.log('DB Connection failed', err))
  })
}

export const getProperty = (property: string, arr: any[]) => {
  return arr.map((a) => a[property])
}
