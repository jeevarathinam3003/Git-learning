import { MembersState, membersStateRecord } from './members.state';
import * as actions from '../actions/members.action';

export const initialState: MembersState = new membersStateRecord() as unknown as MembersState;

export function reducer(state = initialState, { type, payload }: any): MembersState {
    if (!type) {
        return state;
    }

    switch (type) {

        // Members List
        case actions.ActionTypes.MEMBERS_LIST:
            return Object.assign({}, state, {
                membersList: [],
                membersListLoading: true,
            });

        case actions.ActionTypes.MEMBERS_LIST_SUCCESS:
            console.log('membersListCount', payload.count)
            return Object.assign({}, state, {
                membersList: payload,
                membersListCount: payload.count,
                membersListLoading: false,
            });

        case actions.ActionTypes.MEMBERS_LIST_FAIL:
            return Object.assign({}, state, {
                membersList: [],
                membersListLoading: false,
            });


        // Create Member
        case actions.ActionTypes.CREATE_MEMBER:
            return Object.assign({}, state, {
                createMember: [],
                createMemberLoading: true,
            });

        case actions.ActionTypes.CREATE_MEMBER_SUCCESS:
            return Object.assign({}, state, {
                createMember: payload,
                createMemberLoading: false,
            });

        case actions.ActionTypes.CREATE_MEMBER_FAIL:
            return Object.assign({}, state, {
                createMember: [],
                createMemberLoading: false,
            });

        // Update Member
        case actions.ActionTypes.UPDATE_MEMBER:
            return Object.assign({}, state, {
                updateMember: [],
                updateMemberLoading: true,
            });

        case actions.ActionTypes.UPDATE_MEMBER_SUCCESS:
            return Object.assign({}, state, {
                updateMember: payload,
                updateMemberLoading: false,
            });

        case actions.ActionTypes.UPDATE_MEMBER_FAIL:
            return Object.assign({}, state, {
                updateMember: [],
                updateMemberLoading: false,
            });



        // Delete member
        case actions.ActionTypes.DELETE_MEMBER:
            return Object.assign({}, state, {
                deleteMember: [],
                deleteMemberLoading: true,
            });

        case actions.ActionTypes.DELETE_MEMBER_SUCCESS:
            return Object.assign({}, state, {
                deleteMember: payload,
                deleteMemberLoading: false,
            });

        case actions.ActionTypes.DELETE_MEMBER_FAIL:
            return Object.assign({}, state, {
                deleteMember: [],
                deleteMemberLoading: false,
            });


        // Get group list
        case actions.ActionTypes.GET_GROUP_LIST:
            return Object.assign({}, state, {
                groupList: [],
                groupListLoading: true,
            });

        case actions.ActionTypes.GET_GROUP_LIST_SUCCESS:
            return Object.assign({}, state, {
                groupList: payload,
                groupListLoading: false,
            });

        case actions.ActionTypes.GET_GROUP_LIST_FAIL:
            return Object.assign({}, state, {
                groupList: [],
                groupListLoading: false,
            });

        // Get role list
        case actions.ActionTypes.GET_ROLE_LIST:
            return Object.assign({}, state, {
                roleList: [],
                roleListLoading: true,
            });

        case actions.ActionTypes.GET_ROLE_LIST_SUCCESS:
            return Object.assign({}, state, {
                roleList: payload,
                roleListLoading: false,
            });

        case actions.ActionTypes.GET_ROLE_LIST_FAIL:
            return Object.assign({}, state, {
                roleList: [],
                roleListLoading: false,
            });


             // Get origin list
        case actions.ActionTypes.GET_ORIGIN_LIST:
            return Object.assign({}, state, {
                originList: [],
                originListLoading: true,
            });

        case actions.ActionTypes.GET_ORIGIN_LIST_SUCCESS:
            return Object.assign({}, state, {
                originList: payload,
                originListLoading: false,
            });

        case actions.ActionTypes.GET_ORIGIN_LIST_FAIL:
            return Object.assign({}, state, {
                originList: [],
                originListLoading: false,
            });








        default: {
            return state;
        }
    }
}


/**
 * export values
 */

export const membersList = (state: MembersState) => state.membersList;
export const membersListCount = (state: MembersState) => state.membersListCount;
export const membersListLoading = (state: MembersState) => state.membersListLoading;

export const createMember = (state: MembersState) => state.createMember;
export const createMemberLoading = (state: MembersState) => state.createMemberLoading;

export const updateMember = (state: MembersState) => state.updateMember;
export const updateMemberLoading = (state: MembersState) => state.updateMemberLoading;

export const deleteMember = (state: MembersState) => state.deleteMember;
export const deleteMemberLoading = (state: MembersState) => state.deleteMemberLoading;

export const groupList = (state: MembersState) => state.groupList;
export const groupListLoading = (state: MembersState) => state.groupListLoading;

export const roleList = (state: MembersState) => state.roleList;
export const roleListLoading = (state: MembersState) => state.roleListLoading;


export const originList = (state: MembersState) => state.originList;
export const originListLoading = (state: MembersState) => state.originListLoading;