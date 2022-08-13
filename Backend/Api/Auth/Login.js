const User = require("../../Model/User");
const JWT = require('jsonwebtoken');
const JWT_SECRET = 'fhjkdfghdfgjkdfjkhgjkdfgj';

const Login= async(req, res)=>{
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Bad Request: email and password are required' });
        };
        let user = await User.findOne({ email, password });
        if (user) {
            let token = JWT.sign({ _id: user._id, mobileNo: user.mobileNo }, JWT_SECRET);
            return res.json({
                message: 'Login Successful',
                token: token
            });
        } else {
            return res.status(400).json({ message: 'Bad Request: mobileNo and password are incorrect' });
        };
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}   

module.exports = Login;