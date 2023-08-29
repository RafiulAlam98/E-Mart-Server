import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.post('/add-vendor', UserController.addVendor)

export const UserRoutes = { router }
