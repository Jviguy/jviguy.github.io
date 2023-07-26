import mongoose, {Schema} from "mongoose";

export default mongoose.model("User",new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        required: true
    },
},{timestamps: true}));