import mongoose, {Schema} from "mongoose";

const model = mongoose.model("Post",new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    tile: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
},{timestamps: true}));

export default model;

