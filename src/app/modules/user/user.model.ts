import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: 'vendor',
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'buyer',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'admin',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)
export const User = model<IUser, UserModel>('user', UserSchema)
