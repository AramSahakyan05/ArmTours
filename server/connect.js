import mongoose, { mongo } from "mongoose";

export const connectDB = (url) => {
    return mongoose.connect(url)
}