import { Request } from 'express'
import { Types } from 'mongoose'
import { IOrganisation } from '../model/OrganisationModel'
import { num_2_dig, long_short, long_short_narrow } from './types'
export interface IMongooseDefault {
  createdAt?: Date
  updatedAt?: Date
  _id?: Types.ObjectId
  __v?: number
}
export interface baseSchema extends IMongooseDefault {
  organisation?: Types.ObjectId
  description?: string
}

export interface IDateTimeFormat {
  era?: long_short_narrow
  year?: num_2_dig
  month?: num_2_dig | long_short_narrow
  weekday?: long_short_narrow
  day?: num_2_dig
  hour?: num_2_dig
  minute?: num_2_dig
  second?: num_2_dig
  timeZoneName?: long_short
}
export interface IMyRequest extends Request {
  organisation?: IOrganisation
}

export interface name {
  name: string
}

export interface email {
  email: string
}



