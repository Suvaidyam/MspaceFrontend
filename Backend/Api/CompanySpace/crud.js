const CompanySpace = require('../../Model/CompanySpace');
const mongoose = require('mongoose')
module.exports = {
    findAll: async (req, res) => {
        // console.log(req.decoded.company)
        let condition = {}
        if(req.decoded.company){
            condition['company'] = mongoose.Types.ObjectId(req.decoded.company)
        }
        try {
            let companyspace = await CompanySpace.find(condition);
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
        let {userType} = req.decoded
        // console.log(userType)
        if(userType == "COMPANY_ADMIN"){
            try {
                const url = req.file?.path;
                let {company} = req.decoded
                let { code, spaceType, maxParticipant } = req.body;
                let companyspace = await CompanySpace.findOne({ code, spaceType });
                if (companyspace) {
                    return res.status(400).json({ message: "companyspace is already exists" });
                } else {
                    if(!code || !spaceType || !maxParticipant){
                        return res.status(400).json({ message: "code , spaceType(SEAT, MEETING_ROOM) , maxParticipant is required" });
                    }
                    companyspace = await CompanySpace.create({code, spaceType, company ,maxParticipant, url });
                    return res.status(200).json({ message: "Company Successfully Created", companyspace: companyspace });
                }
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }

        }else{
            return res.status(400).json({ message:"you are not company Admin"});
        }
       
    },
    updateOne: async (req, res) => {
        let {userType} = req.decoded
        if(userType == "COMPANY_ADMIN"){
            try {
                // let {company} = req.decoded
                let { code, spaceType, maxParticipant } = req.body;
                let companyspace = await CompanySpace.updateOne(req.params, { code, spaceType, maxParticipant });
                // console.log(req.params)
                return res.status(200).json({ message: "CompanySpace Successfully Updated", companyspace: companyspace });
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
        }else{
            return res.status(400).json({ message:"you are not company Admin you can't update"});
        }

        
    },
    deleteOne: async (req, res)=>{
        let {userType} = req.decoded
        if(userType == "COMPANY_ADMIN"){
            try {
                
                const companyspace = await CompanySpace.deleteOne(req.params); 
                return res.json(companyspace);
            } catch (error) {
                return res.status(400).json({"message": error.message});
            }
        }else{
            return res.status(400).json({ message:"you are not company Admin you can't delete"});
        }
      
    }
}