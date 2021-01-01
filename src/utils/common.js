import jwt_decoded from 'jwt-decode';
import store from '../store/store';
import { itnitiateGetProfile } from '../actions/profile';
import { signIn } from '../actions/auth';
import { history } from '../router/AppRouter';

export const validateFields = (fieldsToValidate) => {
    return fieldsToValidate.every((field) => Object.values(field)[0] !== '');
};

export const maintainSession = () => {
    const user_token = localStorage.getItem('user_token');
    if (user_token) {
        const decoded = jwt_decoded(user_token);
        updateStore(decoded);
    } else {
        history.push('/')
    }
};

export const updateStore = (user) => {
    const { userid, email } = user;
    store.dispatch(signIn({ userid, email }));
    store.dispatch(itnitiateGetProfile(email));
};
