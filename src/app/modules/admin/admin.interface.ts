import { Model } from 'mongoose'

export type IAdmin = {
  phone: string
  img?: string
}

export type AdminModel = Model<IAdmin>
