import { Schema, model } from 'mongoose'
import { AdminModel, IAdmin } from './admin.interface'

const AdminSchema = new Schema<IAdmin>({
  phone: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
})
export const Admin = model<IAdmin, AdminModel>('admin', AdminSchema)
