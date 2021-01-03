import { SET_TRANSACTION, ADD_TRANSACTION } from '../utils/constatnts';

const transactionsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_TRANSACTION:
            return [...action.transactions];
        case ADD_TRANSACTION:
            return [...state, action.transaction];
        default: return state;
    }
}

export default transactionsReducer;