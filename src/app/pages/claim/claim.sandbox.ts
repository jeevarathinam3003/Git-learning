import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../app.state';

import * as ClaimAction from './actions/claim.action'
import {
    claimList,
    claimListLoading,

    claimDetails,
    claimDetailsLoading,

    meetingList,
    meetingListLoading
} from './reducer/claim.selector';

import { Subscription } from 'rxjs';

@Injectable()
export class ClaimSandbox {

    private subscriptions: Array<Subscription> = [];

    public claimList$: any
    public claimListLoading$: any

    public claimDetails$: any
    public claimDetailsLoading$: any

    public meetingList$: any
    public meetingListLoading$: any

    constructor(
        protected appState: Store<store.AppState>
    ) {
        this.claimList$ = this.appState.select(claimList);
        this.claimListLoading$ = this.appState.select(claimListLoading);
        
        this.claimDetails$ = this.appState.select(claimDetails);
        this.claimDetailsLoading$ = this.appState.select(claimDetailsLoading);

        this.meetingList$ = this.appState.select(meetingList);
        this.meetingListLoading$ = this.appState.select(meetingListLoading);
    }

    // Get claim list
    getClaimList(params :any){
        this.appState.dispatch(new ClaimAction.GetClaimList(params));
    }

    // Get particular claim details
    getClaimDetails(param : any){
        this.appState.dispatch(new ClaimAction.GetClaimDetails(param));
    }

    // Get meeting list
    getMeetingList(param : any){
        this.appState.dispatch(new ClaimAction.GetMeetingList(param));
    }

   
}
