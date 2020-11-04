import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import loadingReducer from './reducers/loadingReducer';
import youtubeReducer from './reducers/youtubeReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  youtube: youtubeReducer
})

const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;