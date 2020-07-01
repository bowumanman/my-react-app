import {combineReducers} from 'redux';
import user from './user';
import count from './count';
const reducer = combineReducers({
    user,
    count
})
export default reducer;