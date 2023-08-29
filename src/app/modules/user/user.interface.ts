import { Model, Types } from 'mongoose'
import { IVendor } from '../vendor/vendor.interface'
import { IBuyer } from '../buyer/buyer.interface'
import { IAdmin } from '../admin/admin.interface'

export type IUser = {
  name: string
  email: string
  role: string
  password: string
  vendor?: Types.ObjectId | IVendor
  buyer?: Types.ObjectId | IBuyer
  admin?: Types.ObjectId | IAdmin
}
export type UserModel = Model<IUser>
