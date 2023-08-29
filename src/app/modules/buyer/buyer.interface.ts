import { Model } from 'mongoose'

export type IBuyer = {
  phone: string
  img?: string
}

export type BuyerModel = Model<IBuyer>
