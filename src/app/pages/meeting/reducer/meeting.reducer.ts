import { MeetingState, meetingStateRecord } from './meeting.state';
import * as actions from '../actions/meeting.action';

export const initialState: MeetingState = new meetingStateRecord() as unknown as MeetingState;

export function reducer(state = initialState, { type, payload }: any): MeetingState {
    if (!type) {
        return state;
    }

    switch (type) {

        // Create meeting
        case actions.ActionTypes.CREATE_MEETING:
            return Object.assign({}, state, {
                createMeeting: [],
                createMeetingLoading: true
            });

        case actions.ActionTypes.CREATE_MEETING_SUCCESS:
            return Object.assign({}, state, {
                createMeeting: payload,
                createMeetingLoading: false,
            });

        case actions.ActionTypes.CREATE_MEETING_FAIL:
            return Object.assign({}, state, {
                createMeeting: [],
                createMeetingLoading: false,
            });

            // Update meeting
        case actions.ActionTypes.UPDATE_MEETING:
            return Object.assign({}, state, {
                updateMeeting: [],
                updateMeetingLoading: true
            });

        case actions.ActionTypes.UPDATE_MEETING_SUCCESS:
            return Object.assign({}, state, {
                updateMeeting: payload,
                updateMeetingLoading: false,
            });

        case actions.ActionTypes.UPDATE_MEETING_FAIL:
            return Object.assign({}, state, {
                updateMeeting: [],
                updateMeetingLoading: false,
            });


        // Meeting List
        case actions.ActionTypes.MEETING_LIST:
            return Object.assign({}, state, {
                meetingList: [],
                meetingListLoading: true
            });

        case actions.ActionTypes.MEETING_LIST_SUCCESS:
            return Object.assign({}, state, {
                meetingList: payload,
                meetingListLoading: false,
            });

        case actions.ActionTypes.MEETING_LIST_FAIL:
            return Object.assign({}, state, {
                meetingList: [],
                meetingListLoading: false,
            });

        // Delete Meeting 
        case actions.ActionTypes.DELETE_MEETING:
            return Object.assign({}, state, {
                deleteMeeting: [],
                deleteMeetingLoading: true
            });

        case actions.ActionTypes.DELETE_MEETING_SUCCESS:
            return Object.assign({}, state, {
                deleteMeeting: payload,
                deleteMeetingLoading: false,
            });

        case actions.ActionTypes.DELETE_MEETING_FAIL:
            return Object.assign({}, state, {
                deleteMeeting: [],
                deleteMeetingLoading: false,
            });



            // View attendance
        case actions.ActionTypes.VIEW_ATTENDANCE:
            return Object.assign({}, state, {
                viewAttendance: [],
                viewAttendanceLoading: true
            });

        case actions.ActionTypes.VIEW_ATTENDANCE_SUCCESS:
            return Object.assign({}, state, {
                viewAttendance: payload,
                viewAttendanceLoading: false,
            });

        case actions.ActionTypes.VIEW_ATTENDANCE_FAIL:
            return Object.assign({}, state, {
                viewAttendance: [],
                viewAttendanceLoading: false,
            });


            // Get geo location
        case actions.ActionTypes.GET_GEO_LOCATION:
            return Object.assign({}, state, {
                geoLocation: [],
                geoLocationLoading: true
            });

        case actions.ActionTypes.GET_GEO_LOCATION_SUCCESS:
            return Object.assign({}, state, {
                geoLocation: payload,
                geoLocationLoading: false,
            });

        case actions.ActionTypes.GET_GEO_LOCATION_FAIL:
            return Object.assign({}, state, {
                geoLocation: [],
                geoLocationLoading: false,
            });



        default: {
            return state;
        }
    }
}


/**
 * export values
 */

export const createMeeting = (state: MeetingState) => state.createMeeting;
export const createMeetingLoading = (state: MeetingState) => state.createMeetingLoading;

export const meetingList = (state: MeetingState) => state.meetingList;
export const meetingListLoading = (state: MeetingState) => state.meetingListLoading;



export const deleteMeeting = (state: MeetingState) => state.deleteMeeting;
export const deleteMeetingLoading = (state: MeetingState) => state.deleteMeetingLoading;

export const updateMeeting = (state: MeetingState) => state.updateMeeting;
export const updateMeetingLoading = (state: MeetingState) => state.updateMeetingLoading;

export const viewAttendance = (state: MeetingState) => state.viewAttendance;
export const viewAttendanceLoading = (state: MeetingState) => state.viewAttendanceLoading;

export const geoLocation = (state: MeetingState) => state.geoLocation;
export const geoLocationLoading = (state: MeetingState) => state.geoLocationLoading;