import { Request, Response } from 'express'
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
export const organizations = catchAsync(async (req: Request, res: Response) => {
  res.send(await newOrganisation.organisations())
})

export const createOrganisation = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body)
    res.send(await newOrganisation.createOrganisation(req.body))
  }
)

export const organization = catchAsync(
  async (req: _ImyRequest, res: Response) => {
    res.send(await newOrganisation.organisation(req.params._id))
  }
)
export default new OrganisationController()
