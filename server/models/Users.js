import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export const UsersModel = mongoose.model('users', UsersSchema);
