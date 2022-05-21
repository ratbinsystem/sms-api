import { Request } from 'express'
import { Types } from 'mongoose'
import { num_2_dig, long_short, long_short_narrow } from './types'
interface _ImongooseDefault {
  createdAt?: Date
  updatedAt?: Date
  _id?: Types.ObjectId
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
export interface _ImyRequest extends Request {
  organisation?: _Iorganisation
}
interface baseSchema {
  organisation: Types.ObjectId
  description: string
}
interface name {
  name: string
}
interface email {
  email: string
}
export interface IUserModal extends baseSchema, name, email {
  avatar?: string
  contacts: Types.ObjectId[]
  addresses: Types.ObjectId[]
}
export interface IAddressModal extends baseSchema, name {
  address_line_1: string
  address_line_2: string
  lankmark: string
  pin: Types.ObjectId
  address_type: Types.ObjectId
  description: string
}
export interface IContactModal extends baseSchema, name {
  contact: string
  contact_type: Types.ObjectId
  isActive: boolean
}
export interface _Iorganisation extends _ImongooseDefault {
  name: string
  estd: number
  registration_number: string
  affliation_number: string
  description: string
  contacts?: []
  addresses?: []
  users?: []
  organization_type?: Types.ObjectId
}
export interface ITypeModal {
  l1: string
  l2: string
  l3: string
  l4: string
  description: string
}
