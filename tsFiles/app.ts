import express, { Application } from 'express'
import cors from 'cors'


// import { UserRouter } from './Src/app/Modules/Users/Router/user.router'
import GlobalErrorHandler from './Src/Share/Errors/GlobalError'
import { AppRoutes } from './Src/app/AppRouter'
// import { SemesterRouter } from './Src/app/Modules/AcademicSemester/Router/AcademicSemester'



const App: Application = express()

// parse
App.use(cors())
App.use(express.json())
App.use(express.urlencoded({ extended: true }))




// Application Routes
// App.use('/api/v1/users', UserRouter)
// App.use('/api/v1/acdmcSemester', SemesterRouter)
App.use("/api/v1/", AppRoutes)


// testing
// App.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error("testing error")
// });

//global Error
App.use(GlobalErrorHandler)


export default App