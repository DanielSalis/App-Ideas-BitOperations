import { combineReducers } from 'redux';

import inputs from './inputs';
import operations from './operations';

export default combineReducers({
    inputs,
    operations
});