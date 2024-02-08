import express from 'express';
import session from 'express-session';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { connectDB } from './connect.js';
import { UsersModel } from './models/Users.js';
import passport from 'passport';
import passportLocal from 'passport-local';
import { checkSignUp, findUserByEmail } from './signup.js';
import { checkLogin } from './login.js';


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(findUserByEmail));

passport.serializeUser((user, done) => {
  done(null, user._id);
  console.log("serializeUser function called");
});
passport.deserializeUser(async (_id, done) => {
try {
  const find_user_by_id = await UsersModel.findById(_id);

  if (!find_user_by_id) {
    return done(null, false);
  }

  done(null, find_user_by_id);
} catch (error) {
  done(error);
}
console.log("deserializeUser function called");
});

app.post('/armtours/signup', async (req, res) => {
  await checkSignUp(req, res);
});

app.post('/armtours/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await checkLogin(email, password);

    if (userExists) {
      res.status(200).json({ success: true, route: '/armtours/home' });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ route: '/armtours/error', message: "Something went wrong, try again" });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    } else {
      res.clearCookie('connect.sid');
      res.status(200).json({ route: '/armtours/login' });
    }
  });
});

const start = async () => {
    try {
      await connectDB(process.env.db_url);
      app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`)
      })
    } catch (error) {
        throw new Error(error);
    }
}
start();