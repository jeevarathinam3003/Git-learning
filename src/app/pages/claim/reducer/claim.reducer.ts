import { ClaimState, claimStateRecord } from './claim.state';
import * as actions from '../actions/claim.action';

export const initialState: ClaimState = new claimStateRecord() as unknown as ClaimState;

export function reducer(state = initialState, { type, payload }: any): ClaimState {
    if (!type) {
        return state;
    }

    switch (type) {

        // Get claim List
        case actions.ActionTypes.GET_CLAIM_LIST:
            return Object.assign({}, state, {
                claimList: [],
                claimListLoading: true,
            });

        case actions.ActionTypes.GET_CLAIM_LIST_SUCCESS:
            return Object.assign({}, state, {
                claimList: payload,
                claimListLoading: false,
            });

        case actions.ActionTypes.GET_CLAIM_LIST_FAIL:
            return Object.assign({}, state, {
                claimList: [],
                claimListLoading: false,
            });

            // Get claim Details
        case actions.ActionTypes.GET_CLAIM_DETAILS:
            return Object.assign({}, state, {
                claimDetails: [],
                claimDetailsLoading: true,
            });

        case actions.ActionTypes.GET_CLAIM_DETAILS_SUCCESS:
            return Object.assign({}, state, {
                claimDetails: payload,
                claimDetailsLoading: false,
            });

        case actions.ActionTypes.GET_CLAIM_DETAILS_FAIL:
            return Object.assign({}, state, {
                claimDetails: [],
                claimDetailsLoading: false,
            });

            // Get meeting list
        case actions.ActionTypes.GET_MEETING_LIST:
            return Object.assign({}, state, {
                meetingList: [],
                meetingListLoading: true,
            });

        case actions.ActionTypes.GET_MEETING_LIST_SUCCESS:
            return Object.assign({}, state, {
                meetingList: payload,
                meetingListLoading: false,
            });

        case actions.ActionTypes.GET_MEETING_LIST_FAIL:
            return Object.assign({}, state, {
                meetingList: [],
                meetingListLoading: false,
            });





        default: {
            return state;
        }
    }
}


/**
 * export values
 */

export const claimList = (state: ClaimState) => state.claimList;
export const claimListLoading = (state: ClaimState) => state.claimListLoading;

export const claimDetails = (state: ClaimState) => state.claimDetails;
export const claimDetailsLoading = (state: ClaimState) => state.claimDetailsLoading;

export const meetingList = (state: ClaimState) => state.meetingList;
export const meetingListLoading = (state: ClaimState) => state.meetingListLoading;



