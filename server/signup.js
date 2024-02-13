import { UsersModel } from "./models/Users.js";
import bcrypt from 'bcrypt';

export const addUser = async (name, email, hashedPwd, role) => {
    try {
      const newUser = new UsersModel({name, email, password: hashedPwd, role})
      const result = await newUser.save();
      console.log('User added: ', result);
    } catch (error) {
        console.log('Error: ', error);
    }
}

export const findUserByEmail = async (email, password, done) => {
  const users = await UsersModel.find({email: email})
  if(users.length === 0) {
    return done(null, false, { message: 'Incorrect username' });
  }
  const user = users[0];
  if(await bcrypt.compare(password, user.password)) {
      return done(null, user);
  }
  return done(null, false, { message: 'Incorrect password' });
}

export const checkSignUp = async (req, res) => {
    const { name, email, password, confirmPassword, role } = req.body;
    const hashedPwd = await bcrypt.hash(password, 10);
    try {
        const existingUser = await UsersModel.findOne({email: email});
        if(existingUser) {
            res.json({message: 'User already exists'});
        }
        if(password === confirmPassword) {
            await addUser(name, email, hashedPwd, role);
            res.json({success: true, route: '/armtours/login'});
        } else {
            res.json({message: 'Incorrect password'})
        }
    } catch (error) {
        console.log('Error during signup: ', error);
        return res.status(500).json({route: '/armtours/error', message: 'Internal server error'});
    } 
}