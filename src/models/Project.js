import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
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

export default mongoose.models.Project || mongoose.model("Project", schema);