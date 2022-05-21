import { NextFunction, Response } from 'express'
import OrganisationModel from '../../../model/OrganisationModel'
import { catchAsync } from '../../../utility/common'
import responseCode from '../../../utility/constant/responseCode'
import { _ImyRequest } from '../../../utility/interfaces'
import AppError from '../../errorHandling/AppError'

export const resolveOrganisation = catchAsync(
  async (req: _ImyRequest, res: Response, next: NextFunction) => {
    const ORGANISATION_ID = req.headers.organisation_id
    if (!ORGANISATION_ID) {
      next(new AppError(`${responseCode[400]} : Api key not avilable`, 400))
    }

    const organisation = await OrganisationModel.findOne({
      key: ORGANISATION_ID
    })
    if (!organisation) {
      next(new AppError(responseCode[400], 400))
    } else {
      req.organisation = organisation
    }
    next()
  }
)