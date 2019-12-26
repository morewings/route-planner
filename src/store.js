import {applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './Redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk, promiseMiddleware))
);

export default store;
