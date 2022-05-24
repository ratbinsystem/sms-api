import { NextFunction, Response } from 'express'
import { IMyRequest } from '../../utility/interfaces'
import AppError from '../errorHandling/AppError'

export default (req: IMyRequest, res: Response, next: NextFunction) => {
  const ORGANISATION_ID = req.headers.organisation_id
  const ORGANISATION = req.organisation

  if (ORGANISATION_ID) {
    ORGANISATION
      ? next()
      : next(new AppError('Unauthorized: Invalid Organisation ID', 401))
  } else {
    next(new AppError('Unauthorized: No Organisation ID', 401))
  }
}
