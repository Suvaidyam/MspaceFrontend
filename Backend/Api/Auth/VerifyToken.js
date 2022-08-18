const LoginHistory = require('../../Model/LoginHistory');
const JWT = require('jsonwebtoken');
const JWT_SECRET = 'fhjkdfghdfgjkdfjkhgjkdfgj';

module.exports = async (req, res, next) => {
    try {
        JWT.verify(req.headers.authorization, JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized: Invalid token' });
            } else {
                let { lhId } = decoded;
                let loginHistory = await LoginHistory.findById(lhId);
                if (!loginHistory) {
                    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
                };
                if (loginHistory.logoutTime) {
                    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
                }
                req.decoded = decoded;
                next();
            }
        });
    } catch (error) {
        //#region
        return res.status(500).json({ message: error.message });
    }
}