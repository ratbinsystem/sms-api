import { Response, Request, NextFunction } from 'express'
import dateTime from './DateTime'
import fileIO from './FileIo'
class Logger {
  log = (...logStr: string[]): void => {
    console.log(...logStr)
  }
  requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    const url = req.url
    const method = req.method
    const time = new dateTime(new Date()).currentTime({
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    this.log(time, url, method)
    // fileIO.writeLogToFile(`${time}, ${url}, ${method}`, next)
    next()
  }
}
export default new Logger()
