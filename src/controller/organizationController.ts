import { NextFunction, Request, Response } from 'express'
import AppError from '../core/errorHandling/AppError'
import OrganisationModel from '../model/OrganisationModel'
import { catchAsync } from '../utility/common'
import { _Iorganisation, _ImyRequest } from '../utility/interfaces'
class OrganisationController {
  async organisations() {
    return await OrganisationModel.find({})
  }
  async organisation(id: string) {
    return await OrganisationModel.findById(id)
  }
  async createOrganisation(org: _Iorganisation) {
    return await OrganisationModel.create(org)
  }
}
const newOrganisation = new OrganisationController()
export const organizations = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  next(new AppError('test', 401))
  res.send(await newOrganisation.organisations())
})

export const createOrganisation = catchAsync(
  async (req: _ImyRequest, res: Response) => {
    console.log(req.organisation)
    res.send(await newOrganisation.createOrganisation(req.body))
  }
)

export const organization = catchAsync(
  async (req: _ImyRequest, res: Response) => {
    console.log(req.organisation)
    res.send(await newOrganisation.organisation(req.params._id))
  }
)
export default new OrganisationController()
