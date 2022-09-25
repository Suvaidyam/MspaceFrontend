import { combineReducers} from 'redux'
import fromTimeReducer from './fromTime';
import toTimeReducer from './toTime';

const allReducers = combineReducers({
    fromtime : fromTimeReducer,
    toTime:toTimeReducer
});

export default allReducers;