import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRouter.js"



// app config
const app = express()
const port = process.env.PORT || 4000


// middleware
app.use(express.json())
app.use(cors())


// db connection
connectDB()


// api endpoint
app.use("/api/food",foodRouter)
// ...to see image at the ui , /images/filename i the uploads folder...
app.use("/images",express.static('uploads'));
app.use("/api/user" , userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})


