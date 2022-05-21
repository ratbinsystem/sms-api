import mongoose, { Schema, model } from 'mongoose'
import { IContactModal } from '../utility/interfaces'

const ContactModal = new Schema<IContactModal>(
  {
    name: {
      type: String,
      default: 'self'
    },
    contact: {
      type: String,
      required: [true, 'Name is required']
    },
    contact_type: { type: mongoose.Schema.Types.ObjectId, ref: 'type' },
    isActive: {
      type: Boolean,
      default: true
    },
    description: String
  },

  { timestamps: true }
)
export default model<IContactModal>('contactModal', ContactModal)
