import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../app.state';

import * as GroupsAction from '../groups/actions/groups.action'
import {
    groupsList,
    groupsListLoading,

    createGroup,
    createGroupLoading,

    updateGroup,
    updateGroupLoading,

    deleteGroup,
    deleteGroupLoading,

    groupMembers,
    groupMembersLoading,

    removeGroupMember,
    removeGroupMemberLoading,
} from './reducer/groups.selector';

import { Subscription } from 'rxjs';

@Injectable()
export class GroupsSandbox {

    private subscriptions: Array<Subscription> = [];

    public groupsList$: any
    public groupsListLoading$: any

    public createGroup$: any
    public createGroupLoading$: any

    public updateGroup$: any
    public updateGroupLoading$: any

    public deleteGroup$: any
    public deleteGroupLoading$: any

    public groupMembers$: any
    public groupMembersLoading$: any

    public removeGroupMember$: any
    public removeGroupMemberLoading$: any

    constructor(
        protected appState: Store<store.AppState>
    ) {
        this.groupsList$ = this.appState.select(groupsList);
        this.groupsListLoading$ = this.appState.select(groupsListLoading);  

        this.createGroup$ = this.appState.select(createGroup);
        this.createGroupLoading$ = this.appState.select(createGroupLoading); 

        this.updateGroup$ = this.appState.select(updateGroup);
        this.updateGroupLoading$ = this.appState.select(updateGroupLoading); 

        this.deleteGroup$ = this.appState.select(deleteGroup);
        this.deleteGroupLoading$ = this.appState.select(deleteGroupLoading);

        this.groupMembers$ = this.appState.select(groupMembers);
        this.groupMembersLoading$ = this.appState.select(groupMembersLoading);

        this.removeGroupMember$ = this.appState.select(removeGroupMember);
        this.removeGroupMemberLoading$ = this.appState.select(removeGroupMemberLoading);
    }

    // Get group list
    getGroupsList(params: any) {
        this.appState.dispatch(new GroupsAction.GetGroupsList(params));
    }

    // Create group
    createGroup(params: any) {
        this.appState.dispatch(new GroupsAction.CreateGroup(params));
    }

    // Update group
    updateGroup(params: any) {
        this.appState.dispatch(new GroupsAction.UpdateGroup(params));
    }

    
    // delete group
    deleteGroup(params: any) {
        this.appState.dispatch(new GroupsAction.DeleteGroup(params));
    }

    // get group members
    getMembers(params: any){
        this.appState.dispatch(new GroupsAction.GetGroupMembers(params));
    }

    // Remove member
    removeMember(params: any){
        this.appState.dispatch(new GroupsAction.RemoveGroupMember(params));
    }



}
