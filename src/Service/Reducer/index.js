import { combineReducers} from 'redux'
import fromTimeReducer from './fromTime';
import toTimeReducer from './toTime';
import ProfileDetailsReducer from './ProfileDetails';

const allReducers = combineReducers({
    fromTime : fromTimeReducer,
    toTime : toTimeReducer,
    profileDetails :ProfileDetailsReducer
});

export default allReducers;