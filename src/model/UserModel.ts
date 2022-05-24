import mongoose, { Schema, model, Types } from 'mongoose'
import { baseSchema, name, email } from '../utility/interfaces'
export interface IUserModal extends baseSchema, name, email {
  avatar?: string
  contacts: Types.ObjectId[]
  addresses: Types.ObjectId[]
}


const UserModal = new Schema<IUserModal>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
    contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'contactModal' }],
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'addressModal' }],
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'organisationModal'
    },
    description: String
  },
  { timestamps: true }
)
export default model<IUserModal>('user', UserModal)
