import mongoose from "mongoose";

export default async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch(err) {
        throw new Error(process.env.MONGODB_URI)
    }
}