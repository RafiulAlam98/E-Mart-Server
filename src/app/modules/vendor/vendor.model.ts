import { Schema, model } from 'mongoose'
import { IVendor, VendorModel } from './vendor.interface'

const VendorSchema = new Schema<IVendor, VendorModel>(
  {
    brand: {
      type: String,
      required: true,
    },
    contactPerson: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)
export const Vendor = model<IVendor, VendorModel>('vendor', VendorSchema)
