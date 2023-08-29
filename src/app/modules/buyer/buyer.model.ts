import { Schema, model } from 'mongoose'
import { BuyerModel, IBuyer } from './buyer.interface'

const BuyerSchema = new Schema<IBuyer>({
  phone: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
})

export const Buyer = model<IBuyer, BuyerModel>('buyer', BuyerSchema)
