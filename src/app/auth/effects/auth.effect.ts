import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as actions from '../actions/auth.action';
import { AuthService } from '../auth.service';


@Injectable({
    providedIn: 'root'
})

export class AuthEffect implements OnDestroy {

    private subscriptions: Subscription = new Subscription();


    constructor(
        private action$: Actions,
        protected authService: AuthService,
        public router: Router,
        private store: Store,
        private Router: Router
    ) {

        // Validate user
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.VALIDATE_USER),
                map((action: actions.ValidateUser) => action.payload),
                switchMap(payload =>
                    this.authService.validateUser(payload).pipe(
                        map((result: any) => new actions.ValidateUserSuccess(result)),
                        catchError(error => of(new actions.ValidateUserFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // InitiateOTP
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.INITIATE_OTP),
                map((action: actions.InitiateOTP) => action.payload),
                switchMap(payload =>
                    this.authService.initiateOTP(payload).pipe(
                        map((result: any) => new actions.InitiateOTPSuccess(result)),
                        catchError(error => of(new actions.InitiateOTPFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Validate OTP
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.VALIDATE_OTP),
                map((action: actions.ValidateOTP) => action.payload),
                switchMap(payload =>
                    this.authService.validateOTP(payload).pipe(
                        map((result: any) => new actions.ValidateOTPSuccess(result)),
                        catchError(error => of(new actions.ValidateOTPFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );
    }

    // Validate User
    // validateUser$ = createEffect(() =>
    //     this.action$.pipe(
    //         ofType(actions.ActionTypes.VALIDATE_USER),
    //         map((action: actions.ValidateUser) => action.payload),
    //         switchMap(state => {
    //             console.log("value",state);

    //             return this.authService.validateUser(state).pipe(
    //                 map(user => new actions.ValidateUserSuccess(user)),
    //                 catchError(error => of(new actions.ValidateUserFail(error.error)))
    //             );
    //         })
    //     )
    // );



    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}