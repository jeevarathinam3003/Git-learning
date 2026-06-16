import { createSelector } from 'reselect';

import * as commonreducer from './common.reducer';
import { AppState } from '../../app.state';

// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getCommonState = (state: AppState) => state.common;

export const getS3PreSignedUrl = createSelector(getCommonState, commonreducer.getS3PreSignedUrl);
export const getS3PreSignedUrlLoading = createSelector(getCommonState, commonreducer.getS3PreSignedUrlLoading);
