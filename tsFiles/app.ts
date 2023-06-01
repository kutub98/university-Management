import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const App: Application = express()

// parse
        App.use(cors())
                App.use(express.json())
 App.use(express.urlencoded({ extended: true }))

//testing
App.get('/', (req: Request, res: Response) => {
  res.send('Server is running by get Request')
})

export default App
