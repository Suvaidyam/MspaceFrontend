const SpaceBooking = require('../../Model/SpaceBooking');
const mongoose = require('mongoose')
module.exports = {
    findAll: async (req, res) => {
        // console.log(req.decoded)
        let condition = {}
        if(req.decoded.company){
            condition['company'] = mongoose.Types.ObjectId(req.decoded.company);
            condition['user'] = mongoose.Types.ObjectId(req.decoded._id);
        }
        let {fromDateTime ,toDateTime} = req.query;
        try {
            if(fromDateTime && toDateTime){
                condition["$or"]  = [
                    {
                      fromTime: {$gte:fromDateTime},
                      toTime:{$lte:toDateTime}
                    }
                  ]
            }
            //   console.log(JSON.stringify(condition))
            let spaceBooking = await SpaceBooking.find(condition);
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
        // console.log(req.decoded)
        let {company, _id} = req.decoded
        let user = _id
        let participants = _id
        try {
            let { companySpace, fromTime, toTime, participants } = req.body;
            let spaceBooking = await SpaceBooking.findOne({ companySpace, fromTime,toTime  });
            if (spaceBooking) {
                return res.status(400).json({ message: "spaceBooking is already exists" });
            } else {
                if( !companySpace || !fromTime || !toTime){
                    return res.status(400).json({ message: "companySpace(REF_Id)  , fromTime , toTime is required" });
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