import {combineReducers} from 'redux';
import RouteReducer from './RouteReducer';

const rootReducer = combineReducers({
  route: RouteReducer,
});

export default rootReducer;
