const ProfileDetailsReducer = (state="", action)=>{
    switch(action.type){
        case "PROFILEDETAILS" :
            return action.payload;
        default:
            return state;

    }
}

export default ProfileDetailsReducer;