const toTodayDate = new Date().toISOString().slice(0,11)+"18:00.000Z"

const toTimeReducer = (state =toTodayDate, action)=>{
    switch(action.type){
        case "TOTIME" :
            return action.payload;
        default:
            return state;

    }
}

export default toTimeReducer;