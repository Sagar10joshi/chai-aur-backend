import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"

dotenv.config({
    path: "./env"
})

const app = express();

(async()=>{
    try {
        const connectiondb = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`DATABASE connected SUCCESSFULLY : ${connectiondb.connection.host}`);

        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error;
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`App is listning on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(" DATABASE connection FAILED",error);
    }
})()