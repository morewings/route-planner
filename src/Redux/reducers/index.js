import {combineReducers} from 'redux';
import RouteReducer from 'Redux/reducers/RouteReducer';

const rootReducer = combineReducers({
  route: RouteReducer,
});

export default rootReducer;
