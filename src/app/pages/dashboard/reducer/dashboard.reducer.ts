// import { DashboardState, dashBoardStateRecord } from './dashboard.state';
// import * as actions from '../actions/dashBoard.action';

// export const initialState: DashboardState = (new dashBoardStateRecord() as unknown) as DashboardState;

// export function reducer(
//   state = initialState,
//   { type, payload }: any
// ): DashboardState {
//   if (!type) {
//     return state;
//   }

//   switch (type) {
//     /**
//      * get school detail reducer case function
//      */
//     case actions.ActionTypes.DASHBOARD_LIST:
//       return Object.assign({}, state, {
//         dashboardCount: {},
//         dashboardCountLoading: true,
//         dashboardCountLoaded: false,
//         dashboardCountFailed: false,
//       });
//     case actions.ActionTypes.DASHBOARD_LIST_SUCCESS:
//       return Object.assign({}, state, {
//         dashboardCount: payload.data,
//         dashboardCountLoading: false,
//         dashboardCountLoaded: true,
//         dashboardCountFailed: false,
//       });
//     case actions.ActionTypes.DASHBOARD_LIST_FAIL:
//       return Object.assign({}, state, {
//         dashboardCountLoading: false,
//         dashboardCountLoaded: false,
//         dashboardCountFailed: true,
//       });

//       case actions.ActionTypes.RENEWAL_DETAILS_LIST:
//       return Object.assign({}, state, {
//         renewalDetailsLoading: true,
//         renewalDetailsLoaded: false,
//         renewalDetailsFailed: false,
//       });
//     case actions.ActionTypes.RENEWAL_DETAILS_LIST_SUCCESS:
//       return Object.assign({}, state, {
//         renewalDetails: payload.data,
//         renewalDetailsLoading: false,
//         renewalDetailsLoaded: true,
//         renewalDetailsFailed: false,
//       });
//     case actions.ActionTypes.RENEWAL_DETAILS_LIST_FAIL:
//       return Object.assign({}, state, {
//         renewalDetailsLoading: false,
//         renewalDetailsLoaded: false,
//         renewalDetailsFailed: true,
//       });

//       // student count list
//       case actions.ActionTypes.STUDENT_COUNT_LIST:
//       return Object.assign({}, state, {
//         studentCountListLoading: true,
//         studentCountListLoaded: false,
//         studentCountListFailed: false,
//       });
//     case actions.ActionTypes.STUDENT_COUNT_LIST_SUCCESS:
//       return Object.assign({}, state, {
//         studentCountList: payload,
//         studentCountListLoading: false,
//         studentCountListLoaded: true,
//         studentCountListFailed: false,
//       });
//     case actions.ActionTypes.STUDENT_COUNT_LIST_FAIL:
//       return Object.assign({}, state, {
//         studentCountListLoading: false,
//         studentCountListLoaded: false,
//         studentCountListFailed: true,
//       });
//        // scroll content list
//        case actions.ActionTypes.SCROLL_LIST:
//         return Object.assign({}, state, {
//           scrollListLoading: true,
//           scrollListLoaded: false,
//           scrollListFailed: false,
//         });
//       case actions.ActionTypes.SCROLL_LIST_SUCCESS:
//         return Object.assign({}, state, {
//           scrollList: payload.data,
//           scrollListLoading: false,
//           scrollListLoaded: true,
//           scrollListFailed: false,
//         });
//       case actions.ActionTypes.SCROLL_LIST_FAIL:
//         return Object.assign({}, state, {
//           scrollListLoading: false,
//           scrollListLoaded: false,
//           scrollListFailed: true,
//         });

//       case actions.ActionTypes.NEW_UPDATE_DETAILS:
//         return Object.assign({}, state, {
//           newUpdateDetails: [],
//           newUpdateDetailsLoading: true,
//         });
//       case actions.ActionTypes.NEW_UPDATE_DETAILS_SUCCESS:
//         return Object.assign({}, state, {
//           newUpdateDetails: payload.data,
//           newUpdateDetailsLoading: false,
//         });
//       case actions.ActionTypes.NEW_UPDATE_DETAILS_FAIL:
//         return Object.assign({}, state, {
//           newUpdateDetailsLoading: false,
//         });
//     default: {
//       return state;
//     }
//   }
// }

// /**
//  * export values
//  */

// export const dashboardCount = (state: DashboardState) => state.dashboardCount;
// export const dashboardCountLoading = (state: DashboardState) => state.dashboardCountLoading;
// export const dashboardCountLoaded = (state: DashboardState) => state.dashboardCountLoaded;
// export const dashboardCountFailed = (state: DashboardState) => state.dashboardCountFailed;

// export const renewalDetails = (state: DashboardState) => state.renewalDetails;
// export const renewalDetailsLoading = (state: DashboardState) => state.renewalDetailsLoading;
// export const renewalDetailsLoaded = (state: DashboardState) => state.renewalDetailsLoaded;
// export const renewalDetailsFailed = (state: DashboardState) => state.renewalDetailsFailed;

// export const studentCountList = (state: DashboardState) => state.studentCountList;
// export const studentCountListLoading = (state: DashboardState) => state.studentCountListLoading;
// export const studentCountListLoaded = (state: DashboardState) => state.studentCountListLoaded;
// export const studentCountListFailed = (state: DashboardState) => state.studentCountListFailed;

// export const scrollList = (state: DashboardState) => state.scrollList;
// export const scrollListLoading = (state: DashboardState) => state.scrollListLoading;
// export const scrollListLoaded = (state: DashboardState) => state.scrollListLoaded;
// export const scrollListFailed = (state: DashboardState) => state.scrollListFailed;

// export const exportRollData = (state: DashboardState) => state.exportRollData;
// export const exportRollDataLoading = (state: DashboardState) => state.exportRollDataLoading;
// export const exportRollDataLoaded = (state: DashboardState) => state.exportRollDataLoaded;
// export const exportRollDataFailed = (state: DashboardState) => state.exportRollDataFailed;

// export const newUpdateDetails = (state: DashboardState) => state.newUpdateDetails;
// export const newUpdateDetailsLoading = (state: DashboardState) => state.newUpdateDetailsLoading;
