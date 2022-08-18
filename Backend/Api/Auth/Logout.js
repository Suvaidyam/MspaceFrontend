const LoginHistory = require("../../Model/LoginHistory");
module.exports = async (req, res, next) => {
    try {
        let { lhId } = req.decoded;
        let loginHistory = await LoginHistory.findById(lhId);
        if (!loginHistory) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        };
        let lhLogoutTime = await LoginHistory.findByIdAndUpdate(lhId, { logoutTime: Date.now() });
        return res.status(200).json({ message: 'Logout Successful' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}