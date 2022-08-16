const User = require('../../Model/User');


const Register= async(req, res)=>{
    try {
        let { name, password, email, company, userType} = req.body;
        if (!name || !password || !email || !company || !userType) {
            return res.status(400).json({ message: "name  company,password,email,userType is require" })
        };
        let user = await User.findOne({ email, password });
        if (user) {
            return res.status(400).json({ message: "Dublicate User" });
        } else {
            user = await User.create(req.body);
            return res.status(200).json({ message: "User Successfully Created", user: user });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



module.exports = Register;