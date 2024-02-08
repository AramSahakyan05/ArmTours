import { UsersModel } from "./models/Users.js";
import bcrypt from 'bcrypt';

export const checkLogin = async (user_email, passCode) => {
    const users = await UsersModel.find({});
    if(users.length !== 0) {
        for(const {email, password} of users) {
            const checkPassword = await bcrypt.compare(passCode, password);
            if(email === user_email && checkPassword) {
                return true;
            }
        }
    }
    return false
}