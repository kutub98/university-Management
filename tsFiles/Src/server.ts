import mongoose from "mongoose";
import App from "../app";
import config from "../Src/config/index";
const port = 5000|| process.env.Url 

const dbConnection = async()=> {
    
    try{
        await mongoose.connect(config.DatabaseUrl as string)
        console.log("Successfully server is running");
        App.listen(config.port, ()=>{
            console.log(`Server is running from ${port}`);
        })
    }catch(error){
        console.log(error, "Something wen wrong!");
    }


    // await mongoose.connect("")
}

dbConnection().catch(error => console.log(error))