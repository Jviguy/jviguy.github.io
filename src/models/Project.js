import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    tile: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    type: {
        type: String,
        required: true
    },
},{timestamps: true});

export default mongoose.model("Project", schema);