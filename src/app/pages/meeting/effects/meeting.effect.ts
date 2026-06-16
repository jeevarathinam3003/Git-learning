import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as actions from '../actions/meeting.action';
import { MeetingService } from '../meeting.service';

@Injectable({
    providedIn: 'root'
})

export class MeetingEffect implements OnDestroy {

    private subscriptions: Subscription = new Subscription();

    constructor(
        private action$: Actions,
        protected meetingService: MeetingService,
        public router: Router,
        private store: Store,
        private Router: Router
    ) {
        // Create Meeting
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.CREATE_MEETING),
                map((action: actions.CreateMeeting) => action.payload),
                switchMap((state: any) =>
                    this.meetingService.createmeeting(state).pipe(
                        map((result: any) => new actions.CreateMeetingSuccess(result)),
                        catchError(error => of(new actions.CreateMeetingFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Update Meeting
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.UPDATE_MEETING),
                map((action: actions.UpdateMeeting) => action.payload),
                switchMap((state: any) =>
                    this.meetingService.updatemeeting(state).pipe(
                        map((result: any) => new actions.UpdateMeetingSuccess(result)),
                        catchError(error => of(new actions.UpdateMeetingFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Meeting List
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.MEETING_LIST),
                map((action: actions.MeetingList) => action.payload),
                switchMap((state: any) =>
                    this.meetingService.meetingList(state).pipe(
                        map((result: any) => new actions.MeetingListSuccess(result)),
                        catchError(error => of(new actions.MeetingListFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );


        // Delete Meeting 
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.DELETE_MEETING),
                map((action: actions.deleteMeeting) => action.payload),
                switchMap((state: any) =>
                    this.meetingService.deleteMeeting(state).pipe(
                        map((result: any) => new actions.deleteMeetingSuccess(result)),
                        catchError(error => of(new actions.deleteMeetingFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // View attendance
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.VIEW_ATTENDANCE),
                map((action: actions.ViewAttendance) => action.payload),
                switchMap((state: any) =>
                    this.meetingService.viewAttendance(state).pipe(
                        map((result: any) => new actions.ViewAttendanceSuccess(result)),
                        catchError(error => of(new actions.ViewAttendanceFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Get geo location
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.GET_GEO_LOCATION),
                map((action: actions.GetGeoLocation) => action),
                switchMap(() =>
                    this.meetingService.getGeoLocation().pipe(
                        map((result: any) => new actions.GetGeoLocationSuccess(result)),
                        catchError(error => of(new actions.GetGeoLocationFail(error.error)))
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
