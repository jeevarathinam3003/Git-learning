import { AuthState, authStateRecord } from './auth.state';
import * as actions from '../actions/auth.action';

export const initialState: AuthState = new authStateRecord() as unknown as AuthState;

export function reducer(state = initialState, { type, payload }: any): AuthState {
    if (!type) {
        return state;
    }

    switch (type) {

        // Validate user
        case actions.ActionTypes.VALIDATE_USER:
            return Object.assign({}, state, {
                validateUser: [],
                validateUserLoading: true,
                validateUserLoaded: false,
            });

        case actions.ActionTypes.VALIDATE_USER_SUCCESS:
            return Object.assign({}, state, {
                validateUser: payload,
                validateUserLoading: false,
                validateUserLoaded: false,
            });

        case actions.ActionTypes.VALIDATE_USER_FAIL:
            return Object.assign({}, state, {
                validateUser: [],
                validateUserLoading: false,
                validateUserLoaded: true,
            });

        // Initiate OTP
        case actions.ActionTypes.INITIATE_OTP:
            return Object.assign({}, state, {
                initiateOTP: [],
            });

        case actions.ActionTypes.INITIATE_OTP_SUCCESS:
            return Object.assign({}, state, {
                initiateOTP: payload,
            });

        case actions.ActionTypes.INITIATE_OTP_FAIL:
            return Object.assign({}, state, {
                initiateOTP: [],
            });


            // Validate OTP
        case actions.ActionTypes.VALIDATE_OTP:
            return Object.assign({}, state, {
                validateOTP: [],
                validateOTPLoading: true,
            });

        case actions.ActionTypes.VALIDATE_OTP_SUCCESS:
            return Object.assign({}, state, {
                validateOTP: payload,
                validateOTPLoading: false,
            });

        case actions.ActionTypes.VALIDATE_OTP_FAIL:
            return Object.assign({}, state, {
                validateOTP: [],
                validateOTPLoading: false,            
            });

            // Clear Data

            case actions.ActionTypes.CLEAR_DATA:
            return Object.assign({}, state, {
                validateUser: [],
                initiateOTP:[],
                validateOTP:[]
            });



        default: {
            return state;
        }
    }
}

/**
 * export values
 */

export const validateUser = (state: AuthState) => state.validateUser;
export const validateUserLoading = (state: AuthState) => state.validateUserLoading;
export const validateUserLoaded = (state: AuthState) => state.validateUserLoaded;

export const initiateOTP = (state: AuthState) => state.initiateOTP;

export const validateOTP = (state: AuthState) => state.validateOTP;
export const validateOTPLoading = (state: AuthState) => state.validateOTPLoading;







