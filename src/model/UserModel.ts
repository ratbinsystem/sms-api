import mongoose, { Schema, model } from 'mongoose'
import { IUserModal } from '../utility/interfaces'

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
export default model<IUserModal>('userModal', UserModal)
