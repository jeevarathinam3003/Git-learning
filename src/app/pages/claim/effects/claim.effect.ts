import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as actions from '../actions/claim.action';
import { ClaimService } from '../claim.service';

@Injectable({
    providedIn: 'root'
})

export class ClaimEffect implements OnDestroy {

    private subscriptions: Subscription = new Subscription();

    constructor(
        private action$: Actions,
        protected claimService: ClaimService,
        public router: Router,
        private store: Store,
        private Router: Router
    ) {
        // Get Claim list
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.GET_CLAIM_LIST),
                map((action: actions.GetClaimList) => action.payload),
                switchMap((state) =>
                    this.claimService.getClaimList(state).pipe(
                        map((result: any) => new actions.GetClaimListSuccess(result)),
                        catchError(error => of(new actions.GetClaimListFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Get Claim list
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.GET_CLAIM_DETAILS),
                map((action: actions.GetClaimDetails) => action.payload),
                switchMap((state:any) =>
                    this.claimService.getClaimDetails(state).pipe(
                        map((result: any) => new actions.GetClaimDetailsSuccess(result)),
                        catchError(error => of(new actions.GetClaimDetailsFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Get meeting list
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.GET_MEETING_LIST),
                map((action: actions.GetMeetingList) => action.payload),
                switchMap((state:any) =>
                    this.claimService.getMeetingList(state).pipe(
                        map((result: any) => new actions.GetMeetingListSuccess(result)),
                        catchError(error => of(new actions.GetMeetingListFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}


