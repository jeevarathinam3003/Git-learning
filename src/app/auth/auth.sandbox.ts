import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../app/app.state'

import * as AuthAction from './actions/auth.action'
import {
    validateUser,
    validateUserLoading,
    validateUserLoaded,

    initiateOTP,

    validateOTP,
    validateOTPLoading


} from './reducer/auth.selector';

import { Subscription } from 'rxjs';

@Injectable()
export class AuthSandbox {

    private subscriptions: Array<Subscription> = [];

    public validateUser$: any
    public validateUserLoading$: any
    public validateUserLoaded$: any

    public initiateOTP$ :any

    public validateOTP$: any
    public validateOTPLoading$: any


    constructor(
        protected appState: Store<store.AppState>
    ) {
        this.validateUser$ = this.appState.select(validateUser);
        this.validateUserLoading$ = this.appState.select(validateUserLoading);

        this.initiateOTP$ = this.appState.select(initiateOTP);


        this.validateOTP$ = this.appState.select(validateOTP);
        this.validateUserLoaded$ = this.appState.select(validateUserLoaded);
    }

    // Validate User
    validateUser(params: any) {
        this.appState.dispatch(new AuthAction.ValidateUser(params));
    }

    // InitiateOTP
    initiateOTP(params: any) {
        this.appState.dispatch(new AuthAction.InitiateOTP(params));
    }

    // validateOtp
    validateOtp(params: any) {
        this.appState.dispatch(new AuthAction.ValidateOTP(params));
    }

    ClearData() {
        this.appState.dispatch(new AuthAction.ClearData());
    }


}
