import { Types } from 'mongoose'

export type ICategory =
  | 'Electronics'
  | 'Fashion'
  | 'Sports'
  | 'Gifts'
  | 'Garden'
  | 'Kitchen'
  | 'Furniture'

export type IFeatures = {
  description: string
  value: string
}
export type IProduct = {
  name: string
  description: string
  category: ICategory
  features: IFeatures[]
  img: string[]
  price: number
  vendor: string
  review?: Types.ObjectId
  stock: 'available' | 'unavailable'
  rating?: '1' | '2' | '3' | '4' | '5'
  quantity: number
}
