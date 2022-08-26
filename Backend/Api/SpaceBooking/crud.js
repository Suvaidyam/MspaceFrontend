const SpaceBooking = require('../../Model/SpaceBooking');
module.exports = {
    findAll: async (req, res) => {
        try {
            let spaceBooking = await SpaceBooking.find();
            return res.status(200).json({ message: "companyspace List", spaceBooking: spaceBooking });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    findById: async (req, res) => {
        try {
            let spaceBooking = await SpaceBooking.findById(req.params._id);
            return res.status(200).json({ message: "companyspace", spaceBooking: spaceBooking });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    create: async (req, res) => { 
        try {
            let { company, user, companySpace, fromTime, toTime, participants } = req.body;
            let spaceBooking = await SpaceBooking.findOne({ companySpace, fromTime,toTime  });
            if (spaceBooking) {
                return res.status(400).json({ message: "spaceBooking is already exists" });
            } else {
                if(!company || !user || !companySpace || !fromTime || !toTime || !participants){
                    return res.status(400).json({ message: "company(companyREF_Id), user(userREF_Id),companySpace(REF_Id)  , fromTime , toTime and participants is required" });
                }
                spaceBooking = await SpaceBooking.create({company, user, companySpace, fromTime, toTime, participants });
                return res.status(200).json({ message: "Company Successfully Created", spaceBooking: spaceBooking });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    updateOne: async (req, res) => {
        try {
            let {company, user, companySpace, fromTime, toTime, participants } = req.body;
            let spaceBooking = await SpaceBooking.updateOne(req.params, { company, user, companySpace, fromTime, toTime, participants });
            // console.log(req.params)
            return res.status(200).json({ message: "spaceBooking Successfully Updated", spaceBooking: spaceBooking });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    deleteOne: async (req, res)=>{
        try {
            const spaceBooking = await SpaceBooking.updateOne(req.params, {deleted:true}); 
            return res.json(spaceBooking);
        } catch (error) {
            return res.status(400).json({"message": error.message});
        }
    }
}