import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import errorsReducer from '../reducers/errors';
import profileReducer from '../reducers/profile';
import accountReducer from '../reducers/account';
import transactionsReducer from '../reducers/transactions';

const composeEnhancers = compose;

const store = createStore(
    combineReducers({
        auth: authReducer,
        errors: errorsReducer,
        profile: profileReducer,
        transactions: transactionsReducer,
        account: accountReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;