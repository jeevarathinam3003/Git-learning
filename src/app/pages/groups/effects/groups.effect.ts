import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as actions from '../actions/groups.action';
import { GroupsService } from '../groups.service';

@Injectable({
    providedIn: 'root'
})

export class GroupsEffect implements OnDestroy {

    private subscriptions: Subscription = new Subscription();

    constructor(
        private action$: Actions,
        protected groupsService: GroupsService,
        public router: Router,
        private store: Store,
        private Router: Router
    ) {
        // Get groups list
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.GET_GROUPS_LIST),
                map((action: actions.GetGroupsList) => action.payload),
                switchMap((state: any) =>
                    this.groupsService.getGroupsList(state).pipe(
                        map((result: any) => new actions.GetGroupsListSuccess(result)),
                        catchError(error => of(new actions.GetGroupsListFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );


        // Get groups list
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.CREATE_GROUP),
                map((action: actions.CreateGroup) => action.payload),
                switchMap((state: any) =>
                    this.groupsService.createGroup(state).pipe(
                        map((result: any) => new actions.CreateGroupSuccess(result)),
                        catchError(error => of(new actions.CreateGroupFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );


        // Update group
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.UPDATE_GROUP),
                map((action: actions.UpdateGroup) => action.payload),
                switchMap((state: any) =>
                    this.groupsService.updateGroup(state).pipe(
                        map((result: any) => new actions.UpdateGroupSuccess(result)),
                        catchError(error => of(new actions.UpdateGroupFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // delete group
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.DELETE_GROUP),
                map((action: actions.DeleteGroup) => action.payload),
                switchMap((state: any) =>
                    this.groupsService.deleteGroup(state).pipe(
                        map((result: any) => new actions.DeleteGroupSuccess(result)),
                        catchError(error => of(new actions.DeleteGroupFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // get group members
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.GET_GROUP_MEMBERS),
                map((action: actions.GetGroupMembers) => action.payload),
                switchMap((state: any) =>
                    this.groupsService.getGroupMembers(state).pipe(
                        map((result: any) => new actions.GetGroupMembersSuccess(result)),
                        catchError(error => of(new actions.GetGroupMembersFail(error.error)))
                    )
                )
            ).subscribe((action: any) => {
                this.store.dispatch(action)
            })
        );

        // remove group member
        this.subscriptions.add(
            this.action$.pipe(
                ofType(actions.ActionTypes.REMOVE_GROUP_MEMBER),
                map((action: actions.RemoveGroupMember) => action.payload),
                switchMap((state: any) =>
                    this.groupsService.removeGroupMembers(state).pipe(
                        map((result: any) => new actions.RemoveGroupMemberSuccess(result)),
                        catchError(error => of(new actions.RemoveGroupMemberFail(error.error)))
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
