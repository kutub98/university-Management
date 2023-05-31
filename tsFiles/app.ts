import express, { Application } from "express"
const App: Application = express()


App.get("/", (req, res)=>{
    res.send("Server is running by get Request")
})

export default App