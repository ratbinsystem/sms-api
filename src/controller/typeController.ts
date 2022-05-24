import { NextFunction, Response, Request } from 'express'
import TypeModel from '../model/TypeModel'

class TypeConroller {
  async get(id: string) {
    return await TypeModel.findById(id)
  }
  async getAll() {
    return await TypeModel.find({})
  }
  async create() {}
  async update() {}
  async delete() {}
}
const typeController = new TypeConroller()

export const types = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(await typeController.getAll())
}
export const type = async (req: Request, res: Response, next: NextFunction) => {
  res.send(await typeController.get(req.params._id))
}
