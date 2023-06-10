import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'


import { UserRouter } from './Src/app/Modules/Users/Router/user.router'
import GlobalErrorHandler from './Src/Share/Errors/GlobalError'



const App: Application = express()

// parse
App.use(cors())
App.use(express.json())
App.use(express.urlencoded({ extended: true }))


// Application Routes
App.use('/api/v1/users', UserRouter)



// testing
App.get('/', async (req: Request, res: Response, next: NextFunction) => {
  throw new Error("testing error")
});

//global Error
App.use(GlobalErrorHandler)


export default App