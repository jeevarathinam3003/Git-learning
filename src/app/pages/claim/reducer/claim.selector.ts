import { createSelector } from 'reselect';

import * as claimreducer from './claim.reducer';
import { AppState } from '../../../app.state';


// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getClaimState = (state: AppState) => state.claim;

export const claimList = createSelector(getClaimState,  claimreducer.claimList);
export const claimListLoading = createSelector(getClaimState, claimreducer.claimListLoading);

export const claimDetails = createSelector(getClaimState,  claimreducer.claimDetails);
export const claimDetailsLoading = createSelector(getClaimState, claimreducer.claimDetailsLoading);

export const meetingList = createSelector(getClaimState,  claimreducer.meetingList);
export const meetingListLoading = createSelector(getClaimState, claimreducer.meetingListLoading);