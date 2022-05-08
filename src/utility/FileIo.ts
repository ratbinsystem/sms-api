import { appendFile } from 'fs'
import path from 'path'
import 'dotenv/config'
import { NextFunction } from 'express'
import DateTime from './DateTime'
class FileIo {
  LOG_PATH = process.env.LOG_PATH || './log'
  currentDate = new DateTime(new Date).currentDate()

  defaultFilePath = () =>
    path.join(path.resolve('./'), this.LOG_PATH, `${this.currentDate}.txt`)
  writeLogToFile(
    logMessage: string,
    next: NextFunction,
    filePath = this.defaultFilePath()
  ) {
    let fileName = filePath
    appendFile(fileName, `${logMessage}\n`, (err) => {
      if (err) next(err)
    })
  }
}
export default new FileIo()
