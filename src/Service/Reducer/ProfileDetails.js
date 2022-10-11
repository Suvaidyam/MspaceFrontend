const localData = sessionStorage.getItem("paylode")

const ProfileDetailsReducer = (state= localData, action)=>{
    switch(action.type){
        case "PROFILEDETAILS" :
            return action.payload;
        default:
            return state;

    }
}

export default ProfileDetailsReducer;