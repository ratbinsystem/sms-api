import { NextFunction, Request, Response } from 'express'
import organizationController from '../controller/organizationController'
import OrganisationModel from '../model/OrganisationModel'
import { _Iorganisation, _ImyRequest } from '../utility/interfaces'

class OrganisationMiddelware {
  organisation = new OrganisationModel()
  async resolveOrganisation(req: _ImyRequest, res: Response, next: NextFunction) {
    if (typeof req.headers.organisation_id === 'string') {
      const organisation = await organizationController.organisation(
        req.headers.organisation_id
      )
      req.organisation = organisation
    }
    next()
  }
}

export default new OrganisationMiddelware()
