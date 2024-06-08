import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://aslahafaisal:zoeya2023@cluster0.qsf1plt.mongodb.net/food-delivery-app').then(()=>console.log('db connected'))
}