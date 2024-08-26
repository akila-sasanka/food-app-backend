import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://akila:akila1230@cluster0.itnc5.mongodb.net/food_app_backend').then(()=>console.log("DB connected"))
}