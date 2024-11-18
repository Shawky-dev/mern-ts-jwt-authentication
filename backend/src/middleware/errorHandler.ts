import { INTERNAL_SERVER_ERROR } from '../constants/http'
import { ErrorRequestHandler } from 'express'

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(`PATH:${req.path}`, err)
  res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' })
  return
}
