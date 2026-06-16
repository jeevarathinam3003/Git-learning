import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../app/app.state';


import * as CommonActions from './actions/common.action'
import {
    getS3PreSignedUrl,
    getS3PreSignedUrlLoading,
} from './reducer/common.selector';

import { Subscription } from 'rxjs';

@Injectable()
export class CommonSandbox {

    private subscriptions: Array<Subscription> = [];

    public getS3PreSignedUrl$: any
    public getS3PreSignedUrlLoading$: any

    constructor(
        protected appState: Store<store.AppState>
    ) {
        this.getS3PreSignedUrl$ = this.appState.select(getS3PreSignedUrl);
        this.getS3PreSignedUrlLoading$ = this.appState.select(getS3PreSignedUrlLoading);
    }

    public getS3PreSignedUrl(params: any) {
        this.appState.dispatch(new CommonActions.getS3PreSignedUrl(params));
    }


}
