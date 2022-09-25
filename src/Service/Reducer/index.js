import { combineReducers} from 'redux'
import fromTimeReducer from './fromTime';
import toTimeReducer from './toTime';

const allReducers = combineReducers({
    fromTime : fromTimeReducer,
    toTime : toTimeReducer
});

export default allReducers;