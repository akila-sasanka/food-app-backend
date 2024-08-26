import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";


//app config
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB()

//API end point
app.use("/api/food",foodRouter)
app.use("/images",express.static('upload'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://akila:akila1230@cluster0.itnc5.mongodb.net/?