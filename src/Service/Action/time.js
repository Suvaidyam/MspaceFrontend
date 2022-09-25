export const fromTimeAction = (time)=>{
    return{
        type: 'FROMTIME',
        payload: time
    }
}

export const toTimeAction = (time)=>{
    return{
        type: 'TOTIME',
        payload:time
    }
}