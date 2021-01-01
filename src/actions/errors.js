import { GET_ERRORS, RESET_ERRORS } from '../utils/constatnts';

export const getErrors = (errors) => ({
    type: GET_ERRORS,
    errors
});

export const resetErrors = () => ({
    type: RESET_ERRORS
});