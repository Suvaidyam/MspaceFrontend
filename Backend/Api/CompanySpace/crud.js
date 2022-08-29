const CompanySpace = require('../../Model/CompanySpace');
module.exports = {
    findAll: async (req, res) => {
        try {
            let companyspace = await CompanySpace.find();
            return res.status(200).json({ message: "companyspace List", companyspace: companyspace });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    findById: async (req, res) => {
        try {
            let companyspace = await CompanySpace.findById(req.params._id);
            return res.status(200).json({ message: "companyspace", companyspace: companyspace });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    create: async (req, res) => { 
        try {
            const url = req.file?.path;
            let { code, spaceType, company, maxParticipant } = req.body;
            let companyspace = await CompanySpace.findOne({ code, spaceType });
            if (companyspace) {
                return res.status(400).json({ message: "companyspace is already exists" });
            } else {
                if(!code || !spaceType || !company || !maxParticipant){
                    return res.status(400).json({ message: "code , spaceType(SEAT, MEETING_ROOM) , maxParticipant and company(company_Id) is required" });
                }
                companyspace = await CompanySpace.create({code, spaceType, company ,maxParticipant, url });
                return res.status(200).json({ message: "Company Successfully Created", companyspace: companyspace });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    updateOne: async (req, res) => {
        try {
            let { code, spaceType, company, maxParticipant } = req.body;
            let companyspace = await CompanySpace.updateOne(req.params, { code, spaceType, company, maxParticipant });
            // console.log(req.params)
            return res.status(200).json({ message: "CompanySpace Successfully Updated", companyspace: companyspace });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    deleteOne: async (req, res)=>{
        try {
            const companyspace = await CompanySpace.deleteOne(req.params); 
            return res.json(companyspace);
        } catch (error) {
            return res.status(400).json({"message": error.message});
        }
    }
}