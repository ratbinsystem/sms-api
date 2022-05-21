import { Schema, model } from 'mongoose'
import { ITypeModal } from '../utility/interfaces'

const TypeModal = new Schema<ITypeModal>(
  {
    l1: String,
    l2: String,
    l3: String,
    l4: String,
    description: String
  },
  { timestamps: true }
)
export default model<ITypeModal>('typeModal', TypeModal)
