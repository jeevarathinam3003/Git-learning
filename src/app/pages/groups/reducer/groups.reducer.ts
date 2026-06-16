import { GroupsState, groupsStateRecord } from './groups.state';
import * as actions from '../actions/groups.action';

export const initialState: GroupsState = new groupsStateRecord() as unknown as GroupsState;

export function reducer(state = initialState, { type, payload }: any): GroupsState {
    if (!type) {
        return state;
    }

    switch (type) {

        // Group list
        case actions.ActionTypes.GET_GROUPS_LIST:
            return Object.assign({}, state, {
                groupsList: [],
                groupsListLoading: true
            });

        case actions.ActionTypes.GET_GROUPS_LIST_SUCCESS:
            debugger
            return Object.assign({}, state, {
                groupsList: payload,
                groupsListLoading: false,
            });

        case actions.ActionTypes.GET_GROUPS_LIST_FAIL:
            return Object.assign({}, state, {
                groupsList: [],
                groupsListLoading: false,
            });

        // create Group 
        case actions.ActionTypes.CREATE_GROUP:
            return Object.assign({}, state, {
                createGroup: [],
                createGroupLoading: true
            });

        case actions.ActionTypes.CREATE_GROUP_SUCCESS:
            return Object.assign({}, state, {
                createGroup: payload,
                createGroupLoading: false,
            });

        case actions.ActionTypes.CREATE_GROUP_FAIL:
            return Object.assign({}, state, {
                createGroup: [],
                createGroupLoading: false,
            });

            // update Group 
        case actions.ActionTypes.UPDATE_GROUP:
            return Object.assign({}, state, {
                updateGroup: [],
                updateGroupLoading: true
            });

        case actions.ActionTypes.UPDATE_GROUP_SUCCESS:
            return Object.assign({}, state, {
                updateGroup: payload,
                updateGroupLoading: false,
            });

        case actions.ActionTypes.UPDATE_GROUP_FAIL:
            return Object.assign({}, state, {
                updateGroup: [],
                updateGroupLoading: false,
            });


            // delete Group 
        case actions.ActionTypes.DELETE_GROUP:
            return Object.assign({}, state, {
                deleteGroup: [],
                deleteGroupLoading: true
            });

        case actions.ActionTypes.DELETE_GROUP_SUCCESS:
            return Object.assign({}, state, {
                deleteGroup: payload,
                deleteGroupLoading: false,
            });

        case actions.ActionTypes.DELETE_GROUP_FAIL:
            return Object.assign({}, state, {
                deleteGroup: [],
                deleteGroupLoading: false,
            });


            // get Group members 
        case actions.ActionTypes.GET_GROUP_MEMBERS:
            return Object.assign({}, state, {
                groupMembers: [],
                groupMembersLoading: true
            });

        case actions.ActionTypes.GET_GROUP_MEMBERS_SUCCESS:
            return Object.assign({}, state, {
                groupMembers: payload,
                groupMembersLoading: false,
            });

        case actions.ActionTypes.GET_GROUP_MEMBERS_FAIL:
            return Object.assign({}, state, {
                groupMembers: [],
                groupMembersLoading: false,
            });


            // remove Group member 
        case actions.ActionTypes.REMOVE_GROUP_MEMBER:
            return Object.assign({}, state, {
                removeGroupMember: [],
                removeGroupMemberLoading: true
            });

        case actions.ActionTypes.REMOVE_GROUP_MEMBER_SUCCESS:
            return Object.assign({}, state, {
                removeGroupMember: payload,
                removeGroupMemberLoading: false,
            });

        case actions.ActionTypes.REMOVE_GROUP_MEMBER_FAIL:
            return Object.assign({}, state, {
                removeGroupMember: [],
                removeGroupMemberLoading: false,
            });



        default: {
            return state;
        }
    }
}

/**
 * export values
 */

export const groupsList = (state: GroupsState) => state.groupsList;
export const groupsListLoading = (state: GroupsState) => state.groupsListLoading;

export const createGroup = (state: GroupsState) => state.createGroup;
export const createGroupLoading = (state: GroupsState) => state.createGroupLoading;

export const updateGroup = (state: GroupsState) => state.updateGroup;
export const updateGroupLoading = (state: GroupsState) => state.updateGroupLoading;


export const deleteGroup = (state: GroupsState) => state.deleteGroup;
export const deleteGroupLoading = (state: GroupsState) => state.deleteGroupLoading;


export const groupMembers = (state: GroupsState) => state.groupMembers;
export const groupMembersLoading = (state: GroupsState) => state.groupMembersLoading;

export const removeGroupMember = (state: GroupsState) => state.removeGroupMember;
export const removeGroupMemberLoading = (state: GroupsState) => state.removeGroupMemberLoading;