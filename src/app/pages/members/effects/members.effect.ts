import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as actions from '../actions/members.action';
import { MembersService } from '../members.service';

@Injectable({
    providedIn: 'root'
})

export class MembersEffect implements OnDestroy {

    private subscriptions: Subscription = new Subscription();

    constructor(
        private action$: Actions,
        protected membersService: MembersService,
        public router: Router,
        private store: Store,
        private Router: Router
    ) {
        // Members list
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.MEMBERS_LIST),
                map((action: actions.MembersList) => action.payload),
                switchMap((state:any) =>
                    this.membersService.membersList(state).pipe(
                        map((result: any) => new actions.MembersListSuccess(result)),
                        catchError(error => of(new actions.MembersListFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Create member
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.CREATE_MEMBER),
                map((action: actions.CreateMember) => action.payload),
                switchMap((state: any) =>
                    this.membersService.createMember(state).pipe(
                        map((result: any) => new actions.CreateMemberSuccess(result)),
                        catchError(error => of(new actions.CreateMemberFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Update member
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.UPDATE_MEMBER),
                map((action: actions.UpdateMember) => action.payload),
                switchMap((state: any) =>
                    this.membersService.updateMember(state).pipe(
                        map((result: any) => new actions.UpdateMemberSuccess(result)),
                        catchError(error => of(new actions.UpdateMemberFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Delete member
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.DELETE_MEMBER),
                map((action: actions.DeleteMember) => action.payload),
                switchMap((state: any) =>
                    this.membersService.deleteMember(state).pipe(
                        map((result: any) => new actions.DeleteMemberSuccess(result)),
                        catchError(error => of(new actions.DeleteMemberFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Get group list
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.GET_GROUP_LIST),
                map((action: actions.GetGroupList) => action),
                switchMap(() =>
                    this.membersService.getGroupList().pipe(
                        map((result: any) => new actions.GetGroupListSuccess(result)),
                        catchError(error => of(new actions.GetGroupListFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Get role list
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.GET_ROLE_LIST),
                map((action: actions.GetRoleList) => action),
                switchMap(() =>
                    this.membersService.getRoleList().pipe(
                        map((result: any) => new actions.GetRoleListSuccess(result)),
                        catchError(error => of(new actions.GetRoleListFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // Get origin list
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.GET_ORIGIN_LIST),
                map((action: actions.GetOriginList) => action),
                switchMap(() =>
                    this.membersService.getOriginList().pipe(
                        map((result: any) => new actions.GetOriginListSuccess(result)),
                        catchError(error => of(new actions.GetOriginListFail(error.error)))
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


// Members list
// this.subscriptions.add(
//     this.action$.pipe(
//         ofType(actions.ActionTypes.MEMBERS_LIST),
//         map((action: actions.MembersList) => action),
//         switchMap(() =>
//             this.membersService.membersList().pipe(
//                 map((result: any) => new actions.MembersListSuccess(result)),
//                 catchError(error => of(new actions.MembersListFail(error.error)))
//             )
//         )
//     ).subscribe((action: any) => {
//         this.store.dispatch(action)
//     })
// );

// Create member
// this.subscriptions.add(
//     this.action$.pipe(
//         ofType(actions.ActionTypes.CREATE_MEMBER),
//         map((action: actions.CreateMember) => action.payload),
//         switchMap((state:any) =>
//             this.membersService.createMember(state).pipe(
//                 map((result: any) => new actions.CreateMemberSuccess(result)),
//                 catchError(error => of(new actions.CreateMemberFail(error.error)))
//             )
//         )
//     ).subscribe((action: any) => {
//         this.store.dispatch(action)
//     })
// );


// Members list
// membersList$ = createEffect(() =>
// this.action$.pipe(
// ofType(actions.ActionTypes.MEMBERS_LIST),
// map((action: actions.MembersList) => action),
// switchMap(state => {
// return this.membersService.membersList().pipe(
//     map((user:any) => new actions.MembersListSuccess(user)),
//     catchError(error => of(new actions.MembersListFail(error.error)))
// );
// })
// )
// );