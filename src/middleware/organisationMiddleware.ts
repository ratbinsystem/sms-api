import { NextFunction, Response } from 'express'
import organizationController from '../controller/organizationController'
import AppError from '../core/errorHandling/AppError'
import OrganisationModel from '../model/OrganisationModel'
import { _Iorganisation, _ImyRequest } from '../utility/interfaces'

class OrganisationMiddelware {
  organisation = new OrganisationModel()
  async resolveOrganisation(
    req: _ImyRequest,
    res: Response,
    next: NextFunction
  ) {
    if (typeof req.headers.organisation_id === 'string') {
      const getorganisation = await organizationController.organisation(
        req.headers.organisation_id
      )
      if (getorganisation) {
        req.organisation = getorganisation
        next()
      }
      next(new AppError('Invalid Organisation id.', 401))
    }
    next(new AppError('Unauthorized access', 401))
  }
}

export default new OrganisationMiddelware()
