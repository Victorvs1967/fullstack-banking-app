import { BASE_API_URL, UPDATE_PROFILE } from '../utils/constatnts';
import { getErrors } from './errors';
import { get, post } from '../utils/api';

export const updateProfile = (profile) => ({
    type: UPDATE_PROFILE,
    profile
});

export const initiateUpdateProfile = (profileData) => {
    return async (dispatch) => {
        try {
            const profile = await post(`${BASE_API_URL}/profile`, profileData);
            dispatch(updateProfile(profile.data));
        } catch (error) {
            error.response && dispatch(getErrors(error.response.data))
        }
    };
};

export const itnitiateGetProfile = (email) => {
    return async (dispatch) => {
        try {
            const profile = await get(`${BASE_API_URL}/profile`);
            dispatch(updateProfile(profile.data));
        } catch (error) {
            error.response && dispatch(getErrors(error.response.data));
        }
    };
};