import { createSelector } from 'reselect';

import * as membersreducer from './members.reducer';
import { AppState } from '../../../app.state';


// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getMembersState = (state: AppState) => state.members;

export const membersList = createSelector(getMembersState,  membersreducer.membersList);
export const membersListCount = createSelector(getMembersState,  membersreducer.membersListCount);
export const membersListLoading = createSelector(getMembersState, membersreducer.membersListLoading);

export const createMember = createSelector(getMembersState,  membersreducer.createMember);
export const createMemberLoading = createSelector(getMembersState, membersreducer.createMemberLoading);

export const updateMember = createSelector(getMembersState,  membersreducer.updateMember);
export const updateMemberLoading = createSelector(getMembersState, membersreducer.updateMemberLoading);

export const deleteMember = createSelector(getMembersState,  membersreducer.deleteMember);
export const deleteMemberLoading = createSelector(getMembersState, membersreducer.deleteMemberLoading);

export const groupList = createSelector(getMembersState,  membersreducer.groupList);
export const groupListLoading = createSelector(getMembersState, membersreducer.groupListLoading);


export const roleList = createSelector(getMembersState,  membersreducer.roleList);
export const roleListLoading = createSelector(getMembersState, membersreducer.roleListLoading);


export const originList = createSelector(getMembersState,  membersreducer.originList);
export const originListLoading = createSelector(getMembersState, membersreducer.originListLoading);