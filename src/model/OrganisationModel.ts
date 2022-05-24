import mongoose, { Schema, model, Types } from 'mongoose'
import {baseSchema, name} from './../utility/interfaces'
export interface IOrganisation extends name {
  name: string
  estd: number
  registration_number: string
  affliation_number: string
  contacts?: any[]
  addresses?: []
  users?: []
  organization_type?: Types.ObjectId
  description: string
  createdAt?: Date
  updatedAt?: Date
  _id?: Types.ObjectId
  __v?: number
}

const OrganisationModal = new Schema<IOrganisation>(
  {
    name: {
      type: String,
      required: [true, 'Organization name is requires']
    },
    estd: Number,
    registration_number: String,
    affliation_number: String,
    organization_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'typeModal'
    },
    contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'contactModal' }],
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'addressModal' }],
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userModal' }],
    description: String
  },
  { timestamps: true }
)
export default model<IOrganisation>('organisation', OrganisationModal)
