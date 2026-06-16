// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import * as store from '../../app.state';
// import * as dashBoardActions from './actions/dashBoard.action';
// import { Subscription } from 'rxjs/index';
// import {
//   dashboardCount, dashboardCountLoading, studentCountList, studentCountListLoading, renewalDetails, renewalDetailsLoading,
//   scrollList, scrollListLoading, exportRollData, exportRollDataLoading, newUpdateDetailsLoading, newUpdateDetails
// } from './reducer/dashboard.selector';

// @Injectable()
// export class DashboardSandbox {

//   public dashboardCount$
//   public dashboardCountLoading$
//   public studentCountList$
//   public studentCountListLoading$
//   public renewalDetails$
//   public renewalDetailsLoading$
//   public scrollList$
//   public scrollListLoading$
//   public exportRollData$
//   public exportRollDataLoading$
//   public newUpdateDetails$
//   public newUpdateDetailsLoading$




  
//   constructor(protected appState: Store<store.AppState>) {
//     this.dashboardCount$ = this.appState.select(dashboardCount);
//     this.dashboardCountLoading$ = this.appState.select(dashboardCountLoading);
//     this.studentCountList$ = this.appState.select(studentCountList);
//     this.studentCountListLoading$ = this.appState.select(studentCountListLoading);
//     this.renewalDetails$ = this.appState.select(renewalDetails);
//     this.renewalDetailsLoading$ = this.appState.select(renewalDetailsLoading);
//     this.scrollList$ = this.appState.select(scrollList);
//     this.scrollListLoading$ = this.appState.select(scrollListLoading);

//     this.exportRollData$ = this.appState.select(exportRollData);
//     this.exportRollDataLoading$ = this.appState.select(exportRollDataLoading);

//     this.newUpdateDetails$ = this.appState.select(newUpdateDetails);
//     this.newUpdateDetailsLoading$ = this.appState.select(newUpdateDetailsLoading);

//   }





//   private subscriptions: Array<Subscription> = [];







//   public getDashBoardCount(value: any) {
//     this.appState.dispatch(new dashBoardActions.Dashboard(value));
//   }
//   public getRenewalDetails(value: any) {
//     this.appState.dispatch(new dashBoardActions.RenewalDetails(value));
//   }
//   public getStudentCountList(value: any) {
//     this.appState.dispatch(new dashBoardActions.StudentCountList(value));
//   }
//   public getScrollList(value: any) {
//     this.appState.dispatch(new dashBoardActions.ScrollList(value));
//   }
//   public ExportRollData(params:any) {
//     this.appState.dispatch(new dashBoardActions.ExportRollData(params));
//   }
//   public readStatusUpdate(params:any) {
//     this.appState.dispatch(new dashBoardActions.ReadStatusUpdate(params));
//   }
//   public newUpdateDetails(params:any) {
//     this.appState.dispatch(new dashBoardActions.newUpdateDetails(params));
//   }
// }
