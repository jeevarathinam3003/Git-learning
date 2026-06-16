import {Map, Record} from 'immutable';

export interface MeetingState extends Map<string, any> {
    createMeeting : any;
    createMeetingLoading : boolean;

    updateMeeting : any;
    updateMeetingLoading : boolean;

    meetingList : any;
    meetingListLoading : boolean;

    deleteMeeting : any;
    deleteMeetingLoading : boolean;

    viewAttendance : any;
    viewAttendanceLoading : boolean;

    geoLocation : any;
    geoLocationLoading : boolean;

}

export const meetingStateRecord = Record({
    createMeeting : [],
    createMeetingLoading : false,

    updateMeeting : [],
    updateMeetingLoading : false,

    meetingList : [],
    meetingListLoading : false,

    deleteMeeting : [],
    deleteMeetingLoading : false,

    viewAttendance : [],
    viewAttendanceLoading : false,

    geoLocation : [],
    geoLocationLoading : false,

});

