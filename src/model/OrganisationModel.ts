import mongoose, { Schema, model } from 'mongoose'
import { _Iorganisation, IUserModal } from '../utility/interfaces'

const OrganisationModal = new Schema<_Iorganisation>(
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
export default model<_Iorganisation>('organisationModal', OrganisationModal)
