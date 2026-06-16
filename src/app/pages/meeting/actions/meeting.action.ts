import { Action } from '@ngrx/store';
import { type } from '../../../shared/utility'; 
import { ResponseInterface } from '../../../shared/interfaces/interface'; 


export const ActionTypes = {
    CREATE_MEETING: type('[meeting] CREATE_MEETING LIST'),
    CREATE_MEETING_SUCCESS: type('[meeting] CREATE_MEETING_SUCCESS LIST'),
    CREATE_MEETING_FAIL: type('[meeting] CREATE_MEETING_FAIL LIST'),

    UPDATE_MEETING: type('[meeting] UPDATE_MEETING'),
    UPDATE_MEETING_SUCCESS: type('[meeting] UPDATE_MEETING_SUCCESS'),
    UPDATE_MEETING_FAIL: type('[meeting] UPDATE_MEETING_FAIL'),

    MEETING_LIST: type('[meeting] MEETING_LIST'),
    MEETING_LIST_SUCCESS: type('[meeting] MEETING_LIST_SUCCESS'),
    MEETING_LIST_FAIL: type('[meeting] MEETING_LIST_FAIL'),

    DELETE_MEETING: type('[meeting] DELETE_MEETING'),
    DELETE_MEETING_SUCCESS: type('[meeting] DELETE_MEETING_SUCCESS'),
    DELETE_MEETING_FAIL: type('[meeting] DELETE_MEETING_FAIL'),

    VIEW_ATTENDANCE: type('[meeting] VIEW_ATTENDANCE'),
    VIEW_ATTENDANCE_SUCCESS: type('[meeting] VIEW_ATTENDANCE_SUCCESS'),
    VIEW_ATTENDANCE_FAIL: type('[meeting] VIEW_ATTENDANCE_FAIL'),

    GET_GEO_LOCATION: type('[meeting] GET_GEO_LOCATION'),
    GET_GEO_LOCATION_SUCCESS: type('[meeting] GET_GEO_LOCATION_SUCCESS'),
    GET_GEO_LOCATION_FAIL: type('[meeting] GET_GEO_LOCATION_FAIL'),
};

// Create meeting
export class CreateMeeting implements Action {
    type = ActionTypes.CREATE_MEETING;
    constructor(public payload: any) {
    }
}
export class CreateMeetingSuccess implements Action {
    type = ActionTypes.CREATE_MEETING_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class CreateMeetingFail implements Action {
    type = ActionTypes.CREATE_MEETING_FAIL;
    constructor(public payload: any) {
    }
}


// Update meeting
export class UpdateMeeting implements Action {
    type = ActionTypes.UPDATE_MEETING;
    constructor(public payload: any) {
    }
}
export class UpdateMeetingSuccess implements Action {
    type = ActionTypes.UPDATE_MEETING_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class UpdateMeetingFail implements Action {
    type = ActionTypes.UPDATE_MEETING_FAIL;
    constructor(public payload: any) {
    }
}

// Meeting list
export class MeetingList implements Action {
    type = ActionTypes.MEETING_LIST;
    constructor(public payload: any) {
    }
}
export class MeetingListSuccess implements Action {
    type = ActionTypes.MEETING_LIST_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class MeetingListFail implements Action {
    type = ActionTypes.MEETING_LIST_FAIL;
    constructor(public payload: any) {
    }
}



//Delete Meeting
export class deleteMeeting implements Action {
    type = ActionTypes.DELETE_MEETING;
    constructor(public payload: any) {
        debugger
    }
}
export class deleteMeetingSuccess implements Action {
    type = ActionTypes.DELETE_MEETING_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class deleteMeetingFail implements Action {
    type = ActionTypes.DELETE_MEETING_FAIL;
    constructor(public payload: any) {
    }
}

// View attendance details
export class ViewAttendance implements Action {
    type = ActionTypes.VIEW_ATTENDANCE;
    constructor(public payload: any) {
    }
}
export class ViewAttendanceSuccess implements Action {
    type = ActionTypes.VIEW_ATTENDANCE_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class ViewAttendanceFail implements Action {
    type = ActionTypes.VIEW_ATTENDANCE_FAIL;
    constructor(public payload: any) {
    }
}


// Get geo location
export class GetGeoLocation implements Action {
    type = ActionTypes.GET_GEO_LOCATION;
}
export class GetGeoLocationSuccess implements Action {
    type = ActionTypes.GET_GEO_LOCATION_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class GetGeoLocationFail implements Action {
    type = ActionTypes.GET_GEO_LOCATION_FAIL;
    constructor(public payload: any) {
    }
}





export type Actions =
    | CreateMeeting
    | CreateMeetingSuccess
    | CreateMeetingFail

    | MeetingList
    | MeetingListSuccess
    | MeetingListFail

    | deleteMeeting
    | deleteMeetingSuccess
    | deleteMeetingFail
    

    | ViewAttendance
    | ViewAttendanceSuccess
    | ViewAttendanceFail

    | GetGeoLocation
    | GetGeoLocationSuccess
    | GetGeoLocationFail




