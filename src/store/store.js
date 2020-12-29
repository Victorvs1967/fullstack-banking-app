import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools'
import authReducer from '../reducers/auth';

const composeEnhancers = composeWithDevTools({
    realtime: true,
    name: 'Your Instance Name',
    hostname: 'localhost',
    port: 3000 // the port your remotedev server is running at
}) || compose;

const store = createStore(
    combineReducers({
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;