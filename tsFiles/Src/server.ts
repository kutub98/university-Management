import { Server } from 'http';
import mongoose from 'mongoose'
import App from '../app'
import config from './config'
import { infologger, errorlogger, signalInfo, UncaughtError } from './Share/logger'
const port = process.env.PORT || 5000


// Uncaught code exception is detection
process.on("uncaughtException", error => {
  // console.log("Uncaught code exception is detected ....", error)
  UncaughtError.error("uncaught code Exception is detected", error)
  process.exit(1)
})

// server
let myServer: Server;

const dbConnection = async () => {

  try {
    await mongoose.connect(config.DatabaseUrl as string)
    infologger.info('Server successfully connected to the database')
    myServer = App.listen(port, () => {
      infologger.info(`Server is running on port ${port}`)
    })
  } catch (error) {
    errorlogger.error('Something went wrong!', error)
  }

  process.on("unhandledRejection", (error) => {
    // errorlogger.error("Unhandled error rejection, we are closing the server");
    if (myServer) {
      myServer.close(() => {
        errorlogger.error("Unhandled error rejection, we are closing the server,", error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });

}

dbConnection().catch(error => (error))

// Get single if there any problem or clossed something.
process.on("SIGTERM", (error) => {
  signalInfo.error("got signle form server", error)
  if (myServer) {
    myServer.close()
  }
})