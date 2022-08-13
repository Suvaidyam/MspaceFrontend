const User = require("../../Model/User");

module.exports= async(req, res)=>{
    try {
        let {email , password} = req.body;
        if(!email || !password){
            
        }
        let user = await User.findOne();
        if(user){

        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}   