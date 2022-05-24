import { NextFunction, Request, Response } from 'express'
import UserModel, { IUserModal } from '../model/UserModel'
import { catchAsync } from '../utility/common'

class UserConroller {
  users!: IUserModal | IUserModal[]
  async get() {}

  async getAll() {
    return await UserModel.find({})
  }
  async create() {}
  async update() {}
  async delete() {}
}
const userController = new UserConroller()

export const users = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(await userController.getAll())
  }
)
