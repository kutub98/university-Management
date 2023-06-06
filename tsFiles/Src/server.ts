import mongoose from 'mongoose'
import App from '../app'
import config from './config'
import { InfoLogger, errorLogger } from './Share/logger'

const port = 5000 || process.env.Url //PORT

// dbConnection
const dbConnection = async () => {
  try {
    await mongoose.connect(config.DatabaseUrl as string)
    InfoLogger.info('Successfully server is running')
    App.listen(config.port, () => {
      InfoLogger.info(`Server is running from ${port}`)
    })
  } catch (error) {
    errorLogger.error(error, 'Something wen wrong!')
  }

  // await mongoose.connect("")
}

dbConnection().catch(error => (error))
