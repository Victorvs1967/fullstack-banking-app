import { UPDATE_PROFILE } from '../utils/constatnts';

const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE: return { ...action.profile };
        default: return state;
    }
};

export default profileReducer;