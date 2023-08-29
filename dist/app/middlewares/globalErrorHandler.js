'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.globalErrorHandler = void 0
const globalErrorHandler = (err, req, res, next) => {
  res.status(400).json({ hello: err })
  next()
}
exports.globalErrorHandler = globalErrorHandler
