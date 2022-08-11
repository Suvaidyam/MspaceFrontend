const Company = require('../../Module/Company');

module.exports = {
    register: async (req, res) => {
        try {
            let { companyName, password, email, companyId } = req.body;
            if (!companyName || !password || !email || !companyId) {
                return res.status(400).json({ message: 'Bad request companyName,password,email,companyId is require' });
            }
            let user = await Company.findOne({ companyName, password, email, companyId });
            if (user) {
                return res.status(400).json({ message: 'Dublicate ' });

            } else {
                user = await Company.create(req.body);
                return res.status(200).json({ massage: 'user successfully created', user: user })
            }
        } catch (error) {
            return res.status(500).json({ massage: error.massage });
        }
    }
}