import { Request } from 'express'
import { num_2_dig, long_short, long_short_narrow } from './types'

interface _ImongooseDefault {
  createdAt?: Date
  updatedAt?: Date
  _id?: string
  __v?: number
}
export interface _IdateTimeFormat {
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
export interface _Iorganisation extends _ImongooseDefault {
  name: string
  estd: number
  registration_number: string
  affliation_number: string
  description: string
}

export interface _ImyRequest extends Request {
  organisation?: _Iorganisation
}
