const User = require('../../Model/User');
const Company = require('../../Model/Company');

const Register = async (req, res) => {
    try {
        let { name, password, email, company, companyName, companyCode } = req.body;
        let userType = "EMPLOYEE";
        if (!name || !password || !email) {
            return res.status(400).json({ message: "name company_refId,password,email  is required" })
        };
        if (company || (companyName && companyCode)) {
        let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: "Dublicate User" });
            } else {

                if (!company) {
                    let com = await Company.findOne({ code: companyCode });
                    if (com) {
                        return res.status(400).json({ message: "Company Code is already exists" });
                    } else {
                        let newCompany = await Company.create({ name: companyName, code: companyCode });
                        userType = "COMPANY_ADMIN";
                        company = newCompany._id;
                    }
                }
                user = await User.create({ name, password, email, company, userType });
                return res.status(200).json({ message: "User Successfully Created", user: user });
            }
        } else {
            return res.status(400).json({ message: "campany (companyName,companyCode ) detail reqiured" })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = Register