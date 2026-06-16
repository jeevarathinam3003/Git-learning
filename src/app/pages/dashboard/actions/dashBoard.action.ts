// import { Action } from '@ngrx/store';
// import { type } from '../../../shared/utility';
// import {ResponseInterface} from '../../../shared/interfaces/interface';

// export const ActionTypes = {
//   DASHBOARD_LIST: type('[DASHBOARD] DASHBOARD_LIST'),
//   DASHBOARD_LIST_SUCCESS: type('[DASHBOARD] DASHBOARD_LIST Success'),
//   DASHBOARD_LIST_FAIL: type('[DASHBOARD] DASHBOARD_LIST Fail'),
//   // renewal details
//   RENEWAL_DETAILS_LIST: type('[DASHBOARD] RENEWAL_DETAILS_LIST'),
//   RENEWAL_DETAILS_LIST_SUCCESS: type('[DASHBOARD] RENEWAL_DETAILS_LIST Success'),
//   RENEWAL_DETAILS_LIST_FAIL: type('[DASHBOARD] RENEWAL_DETAILS_LIST Fail'),
//   // Student Count List
//   STUDENT_COUNT_LIST: type('[DASHBOARD] STUDENT_COUNT_LIST'),
//   STUDENT_COUNT_LIST_SUCCESS: type('[DASHBOARD] STUDENT_COUNT_LIST Success'),
//   STUDENT_COUNT_LIST_FAIL: type('[DASHBOARD] STUDENT_COUNT_LIST Fail'),
//   // Student Count List
//   SCROLL_LIST: type('[DASHBOARD] SCROLL_LIST'),
//   SCROLL_LIST_SUCCESS: type('[DASHBOARD] SCROLL_LIST Success'),
//   SCROLL_LIST_FAIL: type('[DASHBOARD] SCROLL_LIST Fail'),
    
//   EXPORT_ROLL_DATA: type('[admission] export roll data'),
//   EXPORT_ROLL_DATA_SUCCESS: type('[admission] export roll data Success'),
//   EXPORT_ROLL_DATA_FAIL: type('[admission] export roll data Fail'),

//   READ_STATUS_UPDATE: type('[admission] READ_STATUS_UPDATE'),
//   READ_STATUS_UPDATE_SUCCESS: type('[admission] READ_STATUS_UPDATE_SUCCESS'),
//   READ_STATUS_UPDATE_FAIL: type('[admission] READ_STATUS_UPDATE_FAIL'),

//   NEW_UPDATE_DETAILS: type('[admission] NEW_UPDATE_DETAILS'),
//   NEW_UPDATE_DETAILS_SUCCESS: type('[admission] NEW_UPDATE_DETAILS_SUCCESS'),
//   NEW_UPDATE_DETAILS_FAIL: type('[admission] NEW_UPDATE_DETAILS_FAIL'),
// };

// /**
//  *  get school detail actions.
//  */
// export class Dashboard implements Action {
//   type = ActionTypes.DASHBOARD_LIST;
//   constructor(public payload: any) {}
// }

// export class DashboardSuccess implements Action {
//   type = ActionTypes.DASHBOARD_LIST_SUCCESS;
//   constructor(public payload: ResponseInterface) {
//   }
// }
// export class DashboardFail implements Action {
//   type = ActionTypes.DASHBOARD_LIST_FAIL;
//   constructor(public payload: any) {}
// }
// // renewal details
// export class RenewalDetails implements Action {
//   type = ActionTypes.RENEWAL_DETAILS_LIST;
//   constructor(public payload: any) {}
// }

// export class RenewalDetailsSuccess implements Action {
//   type = ActionTypes.RENEWAL_DETAILS_LIST_SUCCESS;
//   constructor(public payload: ResponseInterface) {
//   }
// }
// export class RenewalDetailsFail implements Action {
//   type = ActionTypes.RENEWAL_DETAILS_LIST_FAIL;
//   constructor(public payload: any) {}
// }
// // Student Count List
// export class StudentCountList implements Action {
//   type = ActionTypes.STUDENT_COUNT_LIST;
//   constructor(public payload: any) {}
// }

// export class StudentCountListSuccess implements Action {
//   type = ActionTypes.STUDENT_COUNT_LIST_SUCCESS;
//   constructor(public payload: ResponseInterface) {
//   }
// }
// export class StudentCountListFail implements Action {
//   type = ActionTypes.STUDENT_COUNT_LIST_FAIL;
//   constructor(public payload: any) {}
// }
// // Scroll Content List
// export class ScrollList implements Action {
//   type = ActionTypes.SCROLL_LIST;
//   constructor(public payload: any) {}
// }

// export class ScrollListSuccess implements Action {
//   type = ActionTypes.SCROLL_LIST_SUCCESS;
//   constructor(public payload: ResponseInterface) {
//   }
// }
// export class ScrollListFail implements Action {
//   type = ActionTypes.SCROLL_LIST_FAIL;
//   constructor(public payload: any) {}
// }

// // download student template
// export class ExportRollData implements Action {
//   type = ActionTypes.EXPORT_ROLL_DATA;
//   constructor(public payload: any) {}
// }
// export class ExportRollDataSuccess implements Action {
//   type = ActionTypes.EXPORT_ROLL_DATA_SUCCESS;

//   constructor(public payload: ResponseInterface) {}
// }
// export class ExportRollDataFail implements Action {
//   type = ActionTypes.EXPORT_ROLL_DATA_FAIL;

//   constructor(public payload: any) {}
// }

// export class ReadStatusUpdate implements Action {
//   type = ActionTypes.READ_STATUS_UPDATE;
//   constructor(public payload: any) {}
// }
// export class ReadStatusUpdateSuccess implements Action {
//   type = ActionTypes.READ_STATUS_UPDATE_SUCCESS;

//   constructor(public payload: ResponseInterface) {}
// }
// export class ReadStatusUpdateFail implements Action {
//   type = ActionTypes.READ_STATUS_UPDATE_FAIL;

//   constructor(public payload: any) {}
// }

// export class newUpdateDetails implements Action {
//   type = ActionTypes.NEW_UPDATE_DETAILS;
//   constructor(public payload: any) {}
// }
// export class newUpdateDetailsSuccess implements Action {
//   type = ActionTypes.NEW_UPDATE_DETAILS_SUCCESS;

//   constructor(public payload: ResponseInterface) {}
// }
// export class newUpdateDetailsFail implements Action {
//   type = ActionTypes.NEW_UPDATE_DETAILS_FAIL;

//   constructor(public payload: any) {}
// }

// export type Actions =
//   | Dashboard
//   | DashboardSuccess
//   | DashboardFail
//   | StudentCountList 
//   | StudentCountListSuccess
//   | StudentCountListFail
//   | ScrollList
//   | ScrollListSuccess
//   | ScrollListFail
//   | ExportRollData
//   | ExportRollDataSuccess
//   | ExportRollDataFail
//   | ReadStatusUpdate
//   | ReadStatusUpdateSuccess
//   | ReadStatusUpdateFail
