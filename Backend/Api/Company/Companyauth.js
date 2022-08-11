const Company = require('../../Module/Company');
const JWT = require('jsonwebtoken');
const JWT_SECRET = "guyhngybvguyjgbnjhum"
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
    },

    login: async (req, res) => {
        try {
            let { companyId, password } = req.body;
            if (!companyId || !password) {
                return res.status(400).json({ massage: 'Bed request compantId and password required' });

            }
            let user = await Company.findOne({ companyId, password });
            if (user) {
                let token = JWT.sign({ _id: user._id, companyName: user.companyName }, JWT_SECRET);

                return res.json({
                    message: 'User Login  Successful',
                    token: token
                });

            } else {
                return res.status(400).json({
                    massage: 'Bed request :CompanyId and password is incorrect'
                })
            }

        } catch (error) {
            return res.status(500).json({ massage: error.massage });
        }
    },
    verifyToken: async (req, res, next) => {
        try {
            // console.log('veryToken');
            let { token } = req.headers;
            // console.log('veryToken', token);
            if (token) {
                let decoded = JWT.verify(token, JWT_SECRET);
                // console.log('veryToken', decoded);
                req.user = decoded;
                next();
            } else {
                return res.status(401).json({ message: 'Unauthorized: token required' });
            }
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
    }
}