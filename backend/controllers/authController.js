import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        //hashing password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            photo: req.body.photo,
        });
        await newUser.save();
        res.status(201).json({success: true, message: "User registered successfully"})
    } catch (err) {
        res.status(500).json({success: false, message: "Failed to register user"})
    }
}

export const login = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({email})

        // if user is not found
        if (!user) {
            return res.status(404).json({success: false, message: "User not found"})
        }

        // if password is incorrect and compare with hashed password
        const validPassword = await bcrypt.compare(req.body.password, user.password)

        // if password is incorrect
        if (!validPassword) {
            return res.status(401).json({success: false, message: "Password or Email is incorrect"})
        }

        const {password, role, ...rest} = user._doc

        // create token
        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {expiresIn: "15d"});

        // set token in cookie and send response to client
        res.cookie("accessToken", token, {
            httpOnly: true,
            expire: token.expiresIn
        }).status(200).json({token, success: true, message: "User logged in successfully", data:{...rest}, role,});
    } catch (err) {
        res.status(500).json({success: false, message: "Failed to login user"})
    }
}