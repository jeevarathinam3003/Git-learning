import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../../app/app.state';

import * as MembersAction from '../members/actions/members.action'
import {
    membersList,
    membersListLoading,

    membersListCount,

    createMember,
    createMemberLoading,

    updateMember,
    updateMemberLoading,

    deleteMember,
    deleteMemberLoading,

    groupList,
    groupListLoading,

    roleList,
    roleListLoading,

    originList,
    originListLoading,

    
} from './reducer/members.selector';

import { Subscription } from 'rxjs';

@Injectable()
export class MembersSandbox {

    private subscriptions: Array<Subscription> = [];

    public membersList$: any
    public membersListLoading$: any

    public membersListCount$: any

    public createMember$: any
    public createMemberLoading$: any

    public updateMember$: any
    public updateMemberLoading$: any

    public deleteMember$: any
    public deleteMemberLoading$: any

    public groupList$: any
    public groupListLoading$: any

    public roleList$: any
    public roleListLoading$: any

    public originList$: any
    public originListLoading$: any


    constructor(
        protected appState: Store<store.AppState>
    ) {
        this.membersList$ = this.appState.select(membersList);
        this.membersListLoading$ = this.appState.select(membersListLoading);
        
        this.membersListCount$ = this.appState.select(membersListCount);

        this.createMember$ = this.appState.select(createMember);
        this.createMemberLoading$ = this.appState.select(createMemberLoading);

        this.updateMember$ = this.appState.select(updateMember);
        this.updateMemberLoading$ = this.appState.select(updateMemberLoading);

        this.deleteMember$ = this.appState.select(deleteMember);
        this.deleteMemberLoading$ = this.appState.select(deleteMemberLoading);

        this.groupList$ = this.appState.select(groupList);
        this.groupListLoading$ = this.appState.select(groupListLoading);

        this.roleList$ = this.appState.select(roleList);
        this.roleListLoading$ = this.appState.select(roleListLoading);

        this.originList$ = this.appState.select(originList);
        this.originListLoading$ = this.appState.select(originListLoading);
    }

    // Members List
    membersList(params:any) {
        this.appState.dispatch(new MembersAction.MembersList(params));
    }

    // Create Member
    createMember(params:any){
        this.appState.dispatch(new MembersAction.CreateMember(params));
    }

    // Update member
    updateMember(params:any){
        this.appState.dispatch(new MembersAction.UpdateMember(params));
    }

    // Delete member
    deleteMember(params:any){
        this.appState.dispatch(new MembersAction.DeleteMember(params));
    }

    // get group list
    getGroupList(){
        this.appState.dispatch(new MembersAction.GetGroupList());
    }

    // Get role list
    getRoleList(){
        this.appState.dispatch(new MembersAction.GetRoleList());
    }

    // Get origin list
    getOriginList(){
        this.appState.dispatch(new MembersAction.GetOriginList());
    }
}
