import mongoose from 'mongoose'
import { MONGO_URI } from '../constants/env'

export const connectDB = async () => {
  try {
    const mongoUri = MONGO_URI
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined')
    }
    await mongoose.connect(mongoUri)
    console.log('Database connected')
  } catch (err: Error | any) {
    console.error(`database error: ${err.message}`)

    process.exit(1)
  }
}
