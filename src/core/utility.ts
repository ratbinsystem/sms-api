import { NextFunction, Request, Response } from 'express'

export const unless = (path: string[], middleware: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const isUnless = path.filter((item) => {
      const regex = new RegExp(item)
      return regex.test(req.path)
    })[0]
    if (isUnless) {
      return next()
    } else {
      return middleware(req, res, next)
    }
  }
}
