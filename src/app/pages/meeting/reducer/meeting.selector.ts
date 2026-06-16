import { createSelector } from 'reselect';

import * as meetingreducer from './meeting.reducer';
import { AppState } from '../../../app.state';


// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getMeetingState = (state: AppState) => state.meeting;

export const createMeeting = createSelector(getMeetingState,  meetingreducer.createMeeting);
export const createMeetingLoading = createSelector(getMeetingState, meetingreducer.createMeetingLoading);

export const updateMeeting = createSelector(getMeetingState,  meetingreducer.updateMeeting);
export const updateMeetingLoading = createSelector(getMeetingState, meetingreducer.updateMeetingLoading);

export const meetingList = createSelector(getMeetingState,  meetingreducer.meetingList);
export const meetingListLoading = createSelector(getMeetingState, meetingreducer.meetingListLoading);


export const deleteMeeting = createSelector(getMeetingState,  meetingreducer.deleteMeeting);
export const deleteMeetingLoading = createSelector(getMeetingState, meetingreducer.deleteMeetingLoading);

export const viewAttendance = createSelector(getMeetingState,  meetingreducer.viewAttendance);
export const viewAttendanceLoading = createSelector(getMeetingState, meetingreducer.viewAttendanceLoading);

export const geoLocation = createSelector(getMeetingState,  meetingreducer.geoLocation);
export const geoLocationLoading = createSelector(getMeetingState, meetingreducer.geoLocationLoading);