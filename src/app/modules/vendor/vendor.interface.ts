import { Model } from 'mongoose'

export type IVendor = {
  brand: string
  address: string
  city: string
  postalCode: string
  country: string
}

export type VendorModel = Model<IVendor, object>
