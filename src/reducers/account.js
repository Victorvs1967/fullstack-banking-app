import { SET_ACCOUNT, UPDATE_ACCOUNT } from '../utils/constatnts';

const accountReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_ACCOUNT:
            return {
                ...action.accountDetails.account
            };
        case UPDATE_ACCOUNT:
            if (action.operation === 'withdraw') {
                return {
                    ...state,
                    total_balance: +state.total_balance - +action.amountToChange
                };
            } else if (action.operatio === 'deposit') {
                return {
                    ...state,
                    total_balance: +state.total_balance + +action.amountToChange
                };
            }
            break;
        default: return state;
    }
};

export default accountReducer;