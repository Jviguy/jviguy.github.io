import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch(err) {
        throw new Error(process.env.MONGODB_URI)
    }
}

export default connect;