import { NextFunction, Request, Response } from 'express'
import OrganisationModel from '../../model/OrganisationModel'
import { catchAsync } from '../../utility/common'
import responseCode from '../../utility/constant/responseCode'
import { IMyRequest } from '../../utility/interfaces'
import AppError from '../errorHandling/AppError'

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
export const resolveOrganisation = catchAsync(
  async (req: IMyRequest, res: Response, next: NextFunction) => {
    const ORGANISATION_ID = req.headers.organisation_id
    if (!ORGANISATION_ID) {
      next()
    }
    const organisation = await OrganisationModel.findOne({
      key: ORGANISATION_ID
    })
    if (!organisation) {
      next()
    } else {
      req.organisation = organisation
    }
    next()
  }
)
