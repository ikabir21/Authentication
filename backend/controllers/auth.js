import User from "../models/user.js";
import validate from '../validation/auth.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

export const signup = async (req, res) => {
  const { error } = validate(req.body, "signup");
  if(error) res.status(400).json({ message: error.details[0].message });
  try {
    const isUserExist = await User.findOne({ email: req.body.email });
    if(isUserExist) res.status(400).json({message: "User already exists"});
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.  password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    const result = await User.create(newUser);
    const token = jwt.sign({ _id: result._id, email: result.id}, process.env.SECRET_KEY);

    return res.status(201).json({ result, token });

  } catch (error) {
    return res.send(error.message)
  }
}

export const signin = async (req, res) => {
  const { error } = validate(req.body, "signin");
  if(error) res.status(400).json({ message: error.details[0].message });
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user) res.status(400).json({message: "Use not found"});

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if(!isPasswordValid) return res.status(400).json({ message: "password is incorrect" });

    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.SECRET_KEY);

    return res.status(200).json({ user, token });

  } catch (error) {
    return res.send(error.message);
  }
}
