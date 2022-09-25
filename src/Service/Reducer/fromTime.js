const fromTodayDate = new Date().toISOString().slice(0,11)+"10:00.000Z"
// const initialState = {fromTodayDate,toTodayDate}

const fromTimeReducer = (state =fromTodayDate, action)=>{
    switch(action.type){
        case "FROMTIME" :
            return action.payload;
        default:
            return state;

    }
}

export default fromTimeReducer;