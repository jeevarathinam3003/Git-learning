import { createSelector } from 'reselect';

import * as authreducer from './auth.reducer';
import { AppState } from '../../app.state';


// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getAuthState = (state: AppState) => state.auth;

export const validateUser = createSelector(getAuthState, authreducer.validateUser);
export const validateUserLoading = createSelector(getAuthState, authreducer.validateUserLoading);
export const validateUserLoaded = createSelector(getAuthState, authreducer.validateUserLoaded);

export const initiateOTP = createSelector(getAuthState, authreducer.initiateOTP);

export const validateOTP = createSelector(getAuthState, authreducer.validateOTP);
export const validateOTPLoading = createSelector(getAuthState, authreducer.validateOTPLoading);



