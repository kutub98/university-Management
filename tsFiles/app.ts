import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './Src/app/Modules/Users/Router/user.router'
const App: Application = express()
// import UserService from './Src/app/Modules/Users/Services/UserService'
// parse
App.use(cors())
App.use(express.json())
App.use(express.urlencoded({ extended: true }))

console.log("Checking", App.get("env"))

// Application Routes
App.use('/api/v1/users', router)
//testing
App.get('/', async (req: Request, res: Response) => {
  // await UserService.CreatingUsers({
  //   id: "999",
  //   role: "student",
  //   password: "1234"
  // })

  res.send('Server is running by get Request')
})

export default App
