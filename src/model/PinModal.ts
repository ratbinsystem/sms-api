import { Schema, model } from 'mongoose'
import { IMongooseDefault } from './../utility/interfaces'
export interface IPinModal extends IMongooseDefault {
  state: string
  district: string
  subDistrict: string
  pin: number
}
const PinModal = new Schema<IPinModal>(
  {
    state: {
      type: String,
      required: [true, 'State is required field.']
    },
    district: {
      type: String,
      required: [true, 'District is required field.']
    },
    subDistrict: {
      type: String,
      required: [true, 'Sub district is required field.']
    },
    pin: {
      type: Number,
      required: [true, 'Pin is required field.']
    }
  },
  { timestamps: true }
)
export default model<IPinModal>('pin', PinModal)
