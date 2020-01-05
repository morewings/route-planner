import {combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import {RouteReducer} from './Redux/route';

const rootReducer = combineReducers({
  route: RouteReducer,
});

/* eslint-disable no-underscore-dangle */
const reduxDevtoolsEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const store = createStore(rootReducer, reduxDevtoolsEnhancer);

export default store;
