import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
const authRouter = express.Router();

mongoose.connect('mongodb://localhost:27017/amazon_clone').then(() => {
    console.log('connection to database successful');
}).catch((e) => {
    console.log(e);
})

authRouter.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ msg: "this email exists try to login or another email" });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        let user = new User({
            name,
            email,
            password:hashedPassword
        })

        user = await user.save();
        res.json(user);
    } catch (e) {

        return res.status(500).json({ error: e.message });
    };

})
authRouter.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist. Please register." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid password credentials. Please try again." });
        }

        const token = jwt.sign({ id: user._id , email:user.email, password:user.password}, 'secret', { expiresIn: '1h' });

        // Send the token in the response
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
});

export default authRouter;