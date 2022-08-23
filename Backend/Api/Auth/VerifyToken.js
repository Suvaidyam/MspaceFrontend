const LoginHistory = require('../../Model/LoginHistory');
const JWT = require('jsonwebtoken');
const JWT_SECRET = 'fhjkdfghdfgjkdfjkhgjkdfgj';

module.exports = async (req, res, next) => {
    // console.log("1")
    // try {
    //     JWT.verify(req.headers.authorization, JWT_SECRET, async ( decoded, err) => {
    //         if (err) {
    //             // console.log("2")
    //             return res.status(401).json({ message: err });
    //         } else {
    //             // console.log("3")
    //             let { lhId } = decoded;
    //             let loginHistory = await LoginHistory.findById(lhId);
    //             // console.log(loginHistory)
    //             if (!loginHistory) {
    //                 return res.status(401).json({ message: 'Unauthorized: Invalid token2' });
    //             };
    //             if (loginHistory.logoutTime) {
    //                 return res.status(401).json({ message: 'Unauthorized: Invalid token3' });
    //             }
    //             req.decoded = decoded;
    //             next();
    //         }
    //     });
    // } catch (error) {
    //     //#region
    //     return res.status(500).json({ message: error.message });
    // }
    try {
        let { token } = req.headers;
        if (token) {
            let decoded = JWT.verify(token, JWT_SECRET);
            // console.log('veryToken', decoded);
            let { lhId, userType , company, email, _id} = decoded;
            // console.log(decoded)

            let loginHistory = await LoginHistory.findById(lhId);
            if(!loginHistory){
                return res.status(401).json({ message: 'Unauthorized: Login history not found' });
            }else if (loginHistory.logoutTime) {
            return res.status(401).json({ message: 'Unauthorized: Invalid logoutTime' });
            }
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized: token required' });
        }
    } catch (error) {
        return res.status(401).json({ message: error  });
    }
}