import e, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express'

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(`PATH:${req.path}`, err)
  res.status(500).json({ message: 'Internal Server Error' })
  return
}
