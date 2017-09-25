import { combineReducers } from 'redux'
import ReducerData from './reducer_data'

const rootReducers = combineReducers({
    data: ReducerData
});

export default rootReducers