import 'dotenv/config'
import express, { Request, Response } from 'express'
import { connectDB } from './config/db'
import { NODE_ENV, APP_ORIGIN, PORT } from './constants/env'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { errorHandler } from './middleware/errorHandler'
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
)
app.use(cookieParser())
//Routes
app.use('/auth', authRoutes)
//Error handler

app.use(errorHandler)

// Server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} environment`)
  await connectDB()
})
