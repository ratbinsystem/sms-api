import { NextFunction, Response, Errback } from 'express'
import responseCode from '../../utility/constant/responseCode'
import { _ImyRequest } from '../../utility/interfaces.js'
export default class AppError extends Error {
  status: string
  statusCode: number
  message: string
  isOperational: boolean
  code?: number
  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.message = super.message
    type ObjectKey = keyof typeof responseCode
    const myVar = this.statusCode as ObjectKey
    this.status = responseCode[myVar]
    ;(this.isOperational = true),
      Error.captureStackTrace(this, this.constructor)
  }
}

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  })
}

const sendErrorProd = (err: AppError | undefined, res: Response) => {
  if (err) {
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      })
    } else {
      // console.error("ERROR", err);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong'
      })
    }
  }
}

const handleCastErrorDB = (err: any) =>
  new AppError(`Invalid ${err.path} : ${err.value}`, 400)
const handleDuplicateFieldDB = (err: any) =>
  new AppError(
    `Duplicate field value : ${err.errmsg.match(/(["'])(\\?.)*?\1/)[0]}`,
    400
  )
const handleValidationErrordDB = (err: any) =>
  new AppError(
    `Invalid Input data ${Object.values(err.errors)
      .map((el: any) => el.message)
      .join('. ')}`,
    400
  )
const handleJsonWebTokenError = () =>
  new AppError(`Invalid token. Please log in again.`, 401)
const handleTokenExpiredError = () =>
  new AppError(`Token is expired. Please login again`, 401)

export const errorHandler = (
  err: AppError,
  req: _ImyRequest,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  } else {
    let error
    if (err.name === 'CastError') error = handleCastErrorDB(err)
    if (err.code === 11000) error = handleDuplicateFieldDB(err)
    if (err.name === 'ValidationError') error = handleValidationErrordDB(err)
    if (err.name === 'JsonWebTokenError') error = handleJsonWebTokenError()
    if (err.name === 'TokenExpiredError') error = handleTokenExpiredError()

    sendErrorProd(error, res)
  }
}
