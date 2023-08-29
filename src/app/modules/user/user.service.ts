import httpStatus from 'http-status'
import mongoose from 'mongoose'
import { IVendor } from '../vendor/vendor.interface'
import { IUser } from './user.interface'
import { Vendor } from '../vendor/vendor.model'
import ApiError from '../../errors/ApiError'
import { User } from './user.model'
import { IBuyer } from '../buyer/buyer.interface'
import { Buyer } from '../buyer/buyer.model'
import { IAdmin } from '../admin/admin.interface'

const addVendor = async (user: IUser, vendor: IVendor) => {
  user.role = 'vendor'
  let newUserAllData
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const newVendor = await Vendor.create([vendor], { session })
    if (!newVendor.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To Create')
    }
    user.vendor = newVendor[0]._id
    const newUser = await User.create([user], { session })
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To Create')
    }
    newUserAllData = newUser[0]
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
  return newUserAllData
}
const addBuyer = async (user: IUser, buyer: IBuyer) => {
  user.role = 'buyer'
  let newUserAllData
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const newVendor = await Buyer.create([buyer], { session })
    if (!newVendor.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To Create')
    }
    user.vendor = newVendor[0]._id
    const newUser = await User.create([user], { session })
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To Create')
    }
    newUserAllData = newUser[0]
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
  return newUserAllData
}
const addAdmin = async (user: IUser, admin: IAdmin) => {
  user.role = 'admin'
  let newUserAllData
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const newVendor = await Buyer.create([admin], { session })
    if (!newVendor.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To Create')
    }
    user.vendor = newVendor[0]._id
    const newUser = await User.create([user], { session })
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To Create')
    }
    newUserAllData = newUser[0]
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
  return newUserAllData
}

export const UserService = {
  addVendor,
  addBuyer,
  addAdmin,
}
