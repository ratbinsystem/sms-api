import { Schema, model } from 'mongoose'
export interface ITypeModal {
  l1: string
  l2?: string
  l3?: string
  l4?: string
  description: string
}

const TypeModal = new Schema<ITypeModal>(
  {
    l1: {
      type: String,
      required: true
    },
    l2: String,
    l3: String,
    l4: String,
    description: String
  },
  { timestamps: true }
)
export default model<ITypeModal>('type', TypeModal)
