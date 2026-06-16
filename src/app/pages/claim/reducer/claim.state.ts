import {Map, Record} from 'immutable';

export interface ClaimState extends Map<string, any> {
    claimList : any;
    claimListLoading : boolean;

    claimDetails : any;
    claimDetailsLoading : boolean;

    meetingList : any;
    meetingListLoading : boolean;
}

export const claimStateRecord = Record({
    claimList : [],
    claimListLoading : false,

    claimDetails : [],
    claimDetailsLoading : false,

    meetingList : [],
    meetingListLoading : false,
});

