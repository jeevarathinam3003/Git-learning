

import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as actions from '../actions/common.action';
import { CommonService } from '../common.service';

@Injectable({
    providedIn: 'root'
})

export class CommonEffect implements OnDestroy {

    private subscriptions: Subscription = new Subscription();

    constructor(
        private action$: Actions,
        protected commonService: CommonService,
        public router: Router,
        private store: Store,
        private Router: Router
    ) {
        // Get Claim list
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.GET_S3_PRE_SIGNED_URL),
                map((action: actions.getS3PreSignedUrl) => action.payload),
                switchMap((state) =>
                    this.commonService.getS3PreSignedUrl(state).pipe(
                        map((result: any) => new actions.getS3PreSignedUrlSuccess(result)),
                        catchError(error => of(new actions.getS3PreSignedUrlFail(error.error)))
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


