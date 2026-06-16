import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../app.state';

import * as MeetingAction from '../meeting/actions/meeting.action'
import {
    createMeeting,
    createMeetingLoading,

    updateMeeting,
    updateMeetingLoading,

    meetingList,
    meetingListLoading,

    deleteMeeting,
    deleteMeetingLoading,

    viewAttendance,
    viewAttendanceLoading,

    geoLocation,
    geoLocationLoading,

} from './reducer/meeting.selector';

import { Subscription } from 'rxjs';

@Injectable()
export class MeetingSandbox {

    private subscriptions: Array<Subscription> = [];

    public createMeeting$: any
    public createMeetingLoading$: any

    public updateMeeting$: any
    public updateMeetingLoading$: any

    public meetingList$: any
    public meetingListLoading$: any


    public deleteMeeting$: any
    public deleteMeetingLoading$: any

    public viewAttendance$: any
    public viewAttendanceLoading$: any

    public geoLocation$: any
    public geoLocationLoading$: any


    constructor(
        protected appState: Store<store.AppState>
    ) {
        this.createMeeting$ = this.appState.select(createMeeting);
        this.createMeetingLoading$ = this.appState.select(createMeetingLoading);

        this.updateMeeting$ = this.appState.select(updateMeeting);
        this.updateMeetingLoading$ = this.appState.select(updateMeetingLoading);

        this.meetingList$ = this.appState.select(meetingList);
        this.meetingListLoading$ = this.appState.select(meetingListLoading);

        this.deleteMeeting$ = this.appState.select(deleteMeeting);
        this.deleteMeetingLoading$ = this.appState.select(deleteMeetingLoading);

        this.viewAttendance$ = this.appState.select(viewAttendance);
        this.viewAttendanceLoading$ = this.appState.select(viewAttendanceLoading);

        this.geoLocation$ = this.appState.select(geoLocation);
        this.geoLocationLoading$ = this.appState.select(geoLocationLoading);


     
        
    }

    // Create meeting
    createMeeting(params: any) {
        this.appState.dispatch(new MeetingAction.CreateMeeting(params));
    }

    // Update meeting
    updateMeeting(params: any) {
        this.appState.dispatch(new MeetingAction.CreateMeeting(params));
    }

    // Meeting List
    meetingList(params: any) {
        this.appState.dispatch(new MeetingAction.MeetingList(params));
    }

    // Delete Meeting 
    deleteMeeting(params: any) {
        this.appState.dispatch(new MeetingAction.deleteMeeting(params));
    }

    // View attendance details
    viewAttendanceDetails(params: any){
        this.appState.dispatch(new MeetingAction.ViewAttendance(params));
    }

    // Get geo location
    getGeoLocation(){
        this.appState.dispatch(new MeetingAction.GetGeoLocation());
    }

}
