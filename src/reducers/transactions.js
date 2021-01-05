import { SET_TRANSACTIONS, ADD_TRANSACTIONS } from '../utils/constatnts';

const transactionsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_TRANSACTIONS:
            return [...action.transactions];
        case ADD_TRANSACTIONS:
            return [...state, action.transaction];
        default: return state;
    }
};

export default transactionsReducer;