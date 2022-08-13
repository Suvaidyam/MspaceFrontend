const User = require('../../Model/User');


const register = async (req, res) => {
    try {
        let { name, password, email, company, userType } = req.body;
        if (!name || !password || !email || !userType || !company) {
            return res.status(400).json({ message: 'Bad request company,password,email,userType is require' });
        }
        let user = await User.findOne({ name, password, email, company, userType });
        if (user) {
            return res.status(400).json({ message: 'Dublicate ' });

        } else {
            user = await User.create(req.body);
            return res.status(200).json({ massage: 'user successfully created', user: user })
        }
    } catch (error) {
        return res.status(500).json({ massage: error.massage });
    }

}



module.exports = register;