import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    }
})

export const UsersModel = mongoose.model('users', UsersSchema);
