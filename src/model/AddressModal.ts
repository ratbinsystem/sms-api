import mongoose, { Schema, model } from 'mongoose'
import { IAddressModal } from '../utility/interfaces'

const AddressModal = new Schema<IAddressModal>(
  {
    name: {
      type: String,
      default: 'self'
    },
    address_line_1: String,
    address_line_2: {
      type: String,
      required: false
    },
    lankmark: String,
    pin: { type: mongoose.Schema.Types.ObjectId, ref: 'pinModal' },
    address_type: { type: mongoose.Schema.Types.ObjectId, ref: 'typeModal' },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'organisationModal'
    },
    description: String
  },
  { timestamps: true }
)
export default model<IAddressModal>('addressModal', AddressModal)
