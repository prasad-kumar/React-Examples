import {combineReducers} from 'redux';
import changeNumber from './reducers';

const rootReducer = combineReducers({
    changeNumber,
});

export default rootReducer;

