// import { Injectable, OnDestroy } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Subscription, of } from 'rxjs';
// import { map, switchMap, catchError, tap } from 'rxjs/operators';
// import * as actions from '../actions/dashBoard.action';
// import { DashboardService } from '../dashboard..service';
// import { Store } from '@ngrx/store';

// @Injectable({
//   providedIn: 'root'
// })


// export class DashboardEffect implements OnDestroy {
//   private subscriptions: Subscription = new Subscription();
//   Router: any;

//   constructor(
//     private action$: Actions,
//     private api: DashboardService,
//     private store: Store
//   ) {}

//     //DASHBOARD_LIST
//     getDashboardCount$=createEffect(()=>
//       this.action$.pipe(
//         ofType(actions.ActionTypes.DASHBOARD_LIST),
//         map((action: actions.Dashboard) => action.payload),
//         switchMap(payload =>
//           this.api.getDashboardCount(payload).pipe(
//             map((result: any) => new actions.DashboardSuccess(result)),
//             catchError(error => of(new actions.DashboardFail(error.error)))
//           )
//         )
//       )
//     );

//     //RENEWAL_DETAILS_LIST
//     renewalDetails$= createEffect(()=>
//       this.action$.pipe(
//         ofType(actions.ActionTypes.RENEWAL_DETAILS_LIST),
//         map((action: actions.RenewalDetails) => action.payload),
//         switchMap(state =>
//           this.api.getRenewalDetails(state).pipe(
//             map((result: any) => new actions.RenewalDetailsSuccess(result)),
//             catchError(error => of(new actions.RenewalDetailsFail(error.error)))
//           )
//         )
//       )
//     );

//     //STUDENT_COUNT_LIST
//     studentCountList$ = createEffect(()=>
//       this.action$.pipe(
//         ofType(actions.ActionTypes.STUDENT_COUNT_LIST),
//         map((action: actions.StudentCountList) => action.payload),
//         switchMap(payload =>
//           this.api.studentCountList(payload).pipe(
//             map((result: any) => new actions.StudentCountListSuccess(result)),
//             catchError(error => of(new actions.StudentCountListFail(error.error)))
//           )
//         )
//       )
//     );

//     //READ_STATUS_UPDATE
//     ReadStatusUpdate$= createEffect(()=>
//       this.action$.pipe(
//         ofType(actions.ActionTypes.READ_STATUS_UPDATE),
//         map((action: actions.ReadStatusUpdate) => action.payload),
//         switchMap(payload =>
//           this.api.ReadStatusUpdate(payload).pipe(
//             map((result: any) => new actions.ReadStatusUpdateSuccess(result)),
//             catchError(error => of(new actions.ReadStatusUpdateFail(error.error)))
//           )
//         )
//       )
//     );

//     //SCROLL_LIST
//     getScrolllist$= createEffect(()=>

//       this.action$.pipe(
//         ofType(actions.ActionTypes.SCROLL_LIST),
//         map((action: actions.ScrollList) => action.payload),
//         switchMap(payload =>
//           this.api.getScrollList(payload).pipe(
//             map((result: any) => new actions.ScrollListSuccess(result)),
//             catchError(error => of(new actions.ScrollListFail(error.error)))
//           )
//         )
//       )
//     );

//     //EXPORT_ROLL_DATA
//     exportRollData$=createEffect(()=>
//       this.action$.pipe(
//         ofType(actions.ActionTypes.EXPORT_ROLL_DATA),
//         map((action: actions.ExportRollData) => action.payload),
//         switchMap(payload =>
//           this.api.exportrollData(payload)
//             .pipe(
//               map((result: any) => new actions.ExportRollDataSuccess(result)),
//               tap((res: any) => {
//                 if (res) {
//                   if (res.payload && res.payload.data && res.payload.data.idGroupHead == "true") {
//                     localStorage.setItem('groupHeadLoginDetails', JSON.stringify(res.payload.data));
//                     localStorage.setItem('instituteToken', res.payload.data.token);
//                     localStorage.setItem('userMenu', JSON.stringify(res.payload.data.userMenu));
//                     localStorage.setItem('instituteDetails', JSON.stringify(res.payload.data.institute));
//                     localStorage.setItem('isGroupHead', 'yes');
//                     this.Router.navigate(['/school-dashboard']);
//                   } else {
//                     localStorage.setItem('isGroupHead', 'no');
//                     window.open(res.payload.data.redirectUrl, '_self');
//                   }
//                 }
//               }),
//               catchError(error => of(new actions.ExportRollDataFail(error.error)))
//             )
//         )
//       )
//     );

//     //NEW_UPDATE_DETAILS
//     newUpdateDetails$ = createEffect(()=>
//       this.action$.pipe(
//         ofType(actions.ActionTypes.NEW_UPDATE_DETAILS),
//         map((action: actions.newUpdateDetails) => action.payload),
//         switchMap(payload =>
//           this.api.newUpdateDetails(payload).pipe(
//             map((result: any) => new actions.newUpdateDetailsSuccess(result)),
//             catchError(error => of(new actions.newUpdateDetailsFail(error.error)))
//           )
//         )
//       )
//     );

  

//   ngOnDestroy() {
//     this.subscriptions.unsubscribe();
//   }
// }