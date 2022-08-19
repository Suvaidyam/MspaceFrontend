const User = require('../../Model/User');
module.exports = {
    findAll: async (req, res) => {
        try {
            let user = await User.find();
            return res.status(200).json({ message: "user List", user: user });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    findById: async (req, res) => {
        try {
            let user = await User.findById(req.params.id);
            return res.status(200).json({ message: "user", user: user });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    //  pending 
    create: async (req, res) => { 
        try {
            let { name, password, email, company } = req.body;
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: "User Code is already exists" });
            } else {
                user = await User.create({name, password, email, company  });
                return res.status(200).json({ message: "Company Successfully Created", user: user });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    updateOne: async (req, res) => {
        try {
            let { name, password, email, company } = req.body;
            let user = await User.findByIdAndUpdate(req.params.id, {name, password, email, company });
            return res.status(200).json({ message: "Company Successfully Updated", user: user });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}