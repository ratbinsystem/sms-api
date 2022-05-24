import { NextFunction, Request, Response } from 'express'
import AppError from '../core/errorHandling/AppError'
import OrganisationModel, { IOrganisation } from '../model/OrganisationModel'
import { catchAsync } from '../utility/common'
import { IMyRequest } from '../utility/interfaces'
class OrganisationController {
  async get(id: string) {
    return await OrganisationModel.findById(id)
  }
  async getAll() {
    return await OrganisationModel.find({})
  }
  async create(org: IOrganisation) {
    return await OrganisationModel.create(org)
  }
  update() {}
  delete() {}
}
const newOrganisation = new OrganisationController()
export const organizations = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(await newOrganisation.getAll())
  }
)

export const createOrganisation = catchAsync(
  async (req: IMyRequest, res: Response) => {
    res.send(await newOrganisation.create(req.body))
  }
)

export const organization = catchAsync(
  async (req: IMyRequest, res: Response) => {
    res.send(await newOrganisation.get(req.params._id))
  }
)
