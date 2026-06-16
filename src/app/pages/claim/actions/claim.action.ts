import { Action } from '@ngrx/store';
import { type } from '../../../shared/utility'; 
import { ResponseInterface } from '../../../shared/interfaces/interface'; 


export const ActionTypes = {
    GET_CLAIM_LIST: type('[claim] GET_CLAIM_LIST'),
    GET_CLAIM_LIST_SUCCESS: type('[claim] GET_CLAIM_LIST_SUCCESS'),
    GET_CLAIM_LIST_FAIL: type('[claim] GET_CLAIM_LIST_FAIL'),

    GET_CLAIM_DETAILS: type('[claim] GET_CLAIM_DETAILS'),
    GET_CLAIM_DETAILS_SUCCESS: type('[claim] GET_CLAIM_DETAILS_SUCCESS'),
    GET_CLAIM_DETAILS_FAIL: type('[claim] GET_CLAIM_DETAILS_FAIL'),

    GET_MEETING_LIST: type('[claim] GET_MEETING_LIST'),
    GET_MEETING_LIST_SUCCESS: type('[claim] GET_MEETING_LIST_SUCCESS'),
    GET_MEETING_LIST_FAIL: type('[claim] GET_MEETING_LIST_FAIL'),

};

// Get Claim list
export class GetClaimList implements Action {
    type = ActionTypes.GET_CLAIM_LIST;
    constructor(public payload: any) {
    }
}
export class GetClaimListSuccess implements Action {
    type = ActionTypes.GET_CLAIM_LIST_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class GetClaimListFail implements Action {
    type = ActionTypes.GET_CLAIM_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// Get Claim details
export class GetClaimDetails implements Action {
    type = ActionTypes.GET_CLAIM_DETAILS;
    constructor(public payload: any) {
    }
}
export class GetClaimDetailsSuccess implements Action {
    type = ActionTypes.GET_CLAIM_DETAILS_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class GetClaimDetailsFail implements Action {
    type = ActionTypes.GET_CLAIM_DETAILS_FAIL;
    constructor(public payload: any) {
    }
}

// Get meeting list
export class GetMeetingList implements Action {
    type = ActionTypes.GET_MEETING_LIST;
    constructor(public payload: any) {
    }
}
export class GetMeetingListSuccess implements Action {
    type = ActionTypes.GET_MEETING_LIST_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class GetMeetingListFail implements Action {
    type = ActionTypes.GET_MEETING_LIST_FAIL;
    constructor(public payload: any) {
    }
}


export type Actions =
    | GetClaimList
    | GetClaimListSuccess
    | GetClaimListFail

    | GetClaimDetails
    | GetClaimDetailsSuccess
    | GetClaimDetailsFail

    | GetMeetingList
    | GetMeetingListSuccess
    | GetMeetingListFail




