import { Action } from '@ngrx/store';
import { type } from '../../../shared/utility'; 
import { ResponseInterface } from '../../../shared/interfaces/interface'; 


export const ActionTypes = {
    GET_GROUPS_LIST: type('[groups] GET_GROUPS_LIST'),
    GET_GROUPS_LIST_SUCCESS: type('[groups] GET_GROUPS_LIST_SUCCESS'),
    GET_GROUPS_LIST_FAIL: type('[groups] GET_GROUPS_LIST_FAIL'),

    CREATE_GROUP: type('[groups] CREATE_GROUP'),
    CREATE_GROUP_SUCCESS: type('[groups] CREATE_GROUP_SUCCESS'),
    CREATE_GROUP_FAIL: type('[groups] CREATE_GROUP_FAIL'),

    UPDATE_GROUP: type('[groups] UPDATE_GROUP'),
    UPDATE_GROUP_SUCCESS: type('[groups] UPDATE_GROUP_SUCCESS'),
    UPDATE_GROUP_FAIL: type('[groups] UPDATE_GROUP_FAIL'),

    DELETE_GROUP: type('[groups] DELETE_GROUP'),
    DELETE_GROUP_SUCCESS: type('[groups] DELETE_GROUP_SUCCESS'),
    DELETE_GROUP_FAIL: type('[groups] DELETE_GROUP_FAIL'),

    GET_GROUP_MEMBERS: type('[groups] GET_GROUP_MEMBERS'),
    GET_GROUP_MEMBERS_SUCCESS: type('[groups] GET_GROUP_MEMBERS_SUCCESS'),
    GET_GROUP_MEMBERS_FAIL: type('[groups] GET_GROUP_MEMBERS_FAIL'),

    REMOVE_GROUP_MEMBER: type('[groups] REMOVE_GROUP_MEMBER'),
    REMOVE_GROUP_MEMBER_SUCCESS: type('[groups] REMOVE_GROUP_MEMBER_SUCCESS'),
    REMOVE_GROUP_MEMBER_FAIL: type('[groups] REMOVE_GROUP_MEMBER_FAIL'),
    
};

// Get group list
export class GetGroupsList implements Action {
    type = ActionTypes.GET_GROUPS_LIST;
    constructor(public payload: any) {
    }
}
export class GetGroupsListSuccess implements Action {
    type = ActionTypes.GET_GROUPS_LIST_SUCCESS;
    constructor(public payload: ResponseInterface) {
        debugger
    }
}
export class GetGroupsListFail implements Action {
    type = ActionTypes.GET_GROUPS_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// create group 
export class CreateGroup implements Action {
    type = ActionTypes.CREATE_GROUP;
    constructor(public payload: any) {
    }
}
export class CreateGroupSuccess implements Action {
    type = ActionTypes.CREATE_GROUP_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class CreateGroupFail implements Action {
    type = ActionTypes.CREATE_GROUP_FAIL;
    constructor(public payload: any) {
    }
}

// update group 
export class UpdateGroup implements Action {
    type = ActionTypes.UPDATE_GROUP;
    constructor(public payload: any) {
    }
}
export class UpdateGroupSuccess implements Action {
    type = ActionTypes.UPDATE_GROUP_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class UpdateGroupFail implements Action {
    type = ActionTypes.UPDATE_GROUP_FAIL;
    constructor(public payload: any) {
    }
}


// update group 
export class DeleteGroup implements Action {
    type = ActionTypes.DELETE_GROUP;
    constructor(public payload: any) {
    }
}
export class DeleteGroupSuccess implements Action {
    type = ActionTypes.DELETE_GROUP_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class DeleteGroupFail implements Action {
    type = ActionTypes.DELETE_GROUP_FAIL;
    constructor(public payload: any) {
    }
}

// Get group members
export class GetGroupMembers implements Action {
    type = ActionTypes.GET_GROUP_MEMBERS;
    constructor(public payload: any) {
    }
}
export class GetGroupMembersSuccess implements Action {
    type = ActionTypes.GET_GROUP_MEMBERS_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class GetGroupMembersFail implements Action {
    type = ActionTypes.GET_GROUP_MEMBERS_FAIL;
    constructor(public payload: any) {
    }
}

// Remove group members
export class RemoveGroupMember implements Action {
    type = ActionTypes.REMOVE_GROUP_MEMBER;
    constructor(public payload: any) {
    }
}
export class RemoveGroupMemberSuccess implements Action {
    type = ActionTypes.REMOVE_GROUP_MEMBER_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class RemoveGroupMemberFail implements Action {
    type = ActionTypes.REMOVE_GROUP_MEMBER_FAIL;
    constructor(public payload: any) {
    }
}

export type Actions =
    | GetGroupsList
    | GetGroupsListSuccess
    | GetGroupsListFail

    | CreateGroup
    | CreateGroupSuccess
    | CreateGroupFail

    | UpdateGroup
    | UpdateGroupSuccess
    | UpdateGroupFail

    | DeleteGroup
    | DeleteGroupSuccess
    | DeleteGroupFail

    | GetGroupMembers
    | GetGroupMembersSuccess
    | GetGroupMembersFail

    | RemoveGroupMember
    | RemoveGroupMemberSuccess
    | RemoveGroupMemberFail






