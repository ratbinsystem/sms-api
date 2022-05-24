import mongoose, { Schema, model, Types } from 'mongoose'
import { baseSchema, name } from './../utility/interfaces'
export interface IAddressModal extends baseSchema, name {
  address_line_1: string
  address_line_2?: string
  lankmark?: string
  pin?: Types.ObjectId
  address_type?: Types.ObjectId
}
const AddressModal = new Schema<IAddressModal>(
  {
    name: {
      type: String,
      default: 'self'
    },
    address_line_1: {
      type: String,
      required: [true, 'Address line 1 is required.']
    },
    address_line_2: String,
    lankmark: String,
    pin: { type: mongoose.Schema.Types.ObjectId, ref: 'pinModal' },
    address_type: { type: mongoose.Schema.Types.ObjectId, ref: 'typeModal' },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'organisationModal'
    },
    description: {
      type: String,
      default: 'This is address'
    }
  },
  { timestamps: true }
)
export default model<IAddressModal>('address', AddressModal)
