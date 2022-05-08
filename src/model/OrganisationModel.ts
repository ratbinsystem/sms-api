import mongoose from 'mongoose'

const Organisation = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Organization name is requires']
    },
    estd: Number,
    registration_number: String,
    affliation_number: String,
    // organization_type: { type: mongoose.Schema.Types.ObjectId, ref: 'type' },
    // contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'contact' }],
    // addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'address' }],
    // users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    description: String,
  },
  { timestamps: true }
)
export default mongoose.model('organisation', Organisation)
