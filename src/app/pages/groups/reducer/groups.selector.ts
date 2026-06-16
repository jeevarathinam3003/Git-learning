import { createSelector } from 'reselect';

import * as groupsreducer from './groups.reducer';
import { AppState } from '../../../app.state';


// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getGroupsState = (state: AppState) => state.groups;

export const groupsList = createSelector(getGroupsState,  groupsreducer.groupsList);
export const groupsListLoading = createSelector(getGroupsState, groupsreducer.groupsListLoading);


export const createGroup = createSelector(getGroupsState,  groupsreducer.createGroup);
export const createGroupLoading = createSelector(getGroupsState, groupsreducer.createGroupLoading);


export const updateGroup = createSelector(getGroupsState,  groupsreducer.updateGroup);
export const updateGroupLoading = createSelector(getGroupsState, groupsreducer.updateGroupLoading);

export const deleteGroup = createSelector(getGroupsState,  groupsreducer.deleteGroup);
export const deleteGroupLoading = createSelector(getGroupsState, groupsreducer.deleteGroupLoading);

export const groupMembers = createSelector(getGroupsState,  groupsreducer.groupMembers);
export const groupMembersLoading = createSelector(getGroupsState, groupsreducer.groupMembersLoading);

export const removeGroupMember = createSelector(getGroupsState,  groupsreducer.removeGroupMember);
export const removeGroupMemberLoading = createSelector(getGroupsState, groupsreducer.removeGroupMemberLoading);