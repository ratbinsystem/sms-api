import mongoose, { Schema, model, Types } from 'mongoose'
import { baseSchema, name } from '../utility/interfaces'
import { ITypeModal } from './TypeModel'
export interface IContactModal extends baseSchema, name {
  contact: string
  contact_type: Types.ObjectId | ITypeModal | null
}
const ContactModal = new Schema<IContactModal>(
  {
    name: {
      type: String,
      default: 'self'
    },
    contact: {
      type: String,
      required: [true, 'Contact is required']
    },
    contact_type: { type: mongoose.Schema.Types.ObjectId, ref: 'type' },
    description: String,
    organisation : { type: mongoose.Schema.Types.ObjectId, ref: 'organisation' }
  },

  { timestamps: true }
)
export default model<IContactModal>('contact', ContactModal)
