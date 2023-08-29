import { Request, RequestHandler, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { UserService } from './user.service'

const addVendor = catchAsync(async (req: Request, res: Response) => {
  const { vendor, ...user } = req.body
  console.log(req.body)
  const result = await UserService.addVendor(user, vendor)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vendor Added Successfully',
    data: result,
  })
})
const addBuyer: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { buyer, ...user } = req.body
    console.log(buyer)
    const result = await UserService.addBuyer(user, buyer)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Buyer Added Successfully',
      data: result,
    })
  }
)
const addAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { admin, ...user } = req.body
    console.log(admin)
    const result = await UserService.addAdmin(user, admin)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin Added Successfully',
      data: result,
    })
  }
)

export const UserController = {
  addVendor,
  addBuyer,
  addAdmin,
}
