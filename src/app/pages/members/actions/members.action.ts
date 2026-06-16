import { Action } from '@ngrx/store';
import { type } from '../../../shared/utility';
import { ResponseInterface } from '../../../shared/interfaces/interface';


export const ActionTypes = {
    MEMBERS_LIST: type('[members] MEMBERS_LIST'),
    MEMBERS_LIST_SUCCESS: type('[members] MEMBERS_LIST_SUCCESS'),
    MEMBERS_LIST_FAIL: type('[members] MEMBERS_LIST_FAIL'),

    CREATE_MEMBER: type('[members] CREATE_MEMBER'),
    CREATE_MEMBER_SUCCESS: type('[members] CREATE_MEMBER_SUCCESS'),
    CREATE_MEMBER_FAIL: type('[members] CREATE_MEMBER_FAIL'),

    UPDATE_MEMBER: type('[members] UPDATE_MEMBER'),
    UPDATE_MEMBER_SUCCESS: type('[members] UPDATE_MEMBER_SUCCESS'),
    UPDATE_MEMBER_FAIL: type('[members] UPDATE_MEMBER_FAIL'),

    DELETE_MEMBER: type('[members] DELETE_MEMBER'),
    DELETE_MEMBER_SUCCESS: type('[members] DELETE_MEMBER_SUCCESS'),
    DELETE_MEMBER_FAIL: type('[members] DELETE_MEMBER_FAIL'),

    GET_GROUP_LIST: type('[members] GET_GROUP_LIST'),
    GET_GROUP_LIST_SUCCESS: type('[members] GET_GROUP_LIST_SUCCESS'),
    GET_GROUP_LIST_FAIL: type('[members] GET_GROUP_LIST_FAIL'),

    GET_ROLE_LIST: type('[members] GET_ROLE_LIST'),
    GET_ROLE_LIST_SUCCESS: type('[members] GET_ROLE_LIST_SUCCESS'),
    GET_ROLE_LIST_FAIL: type('[members] GET_ROLE_LIST_FAIL'),

    GET_ORIGIN_LIST: type('[members] GET_ORIGIN_LIST'),
    GET_ORIGIN_LIST_SUCCESS: type('[members] GET_ORIGIN_LIST_SUCCESS'),
    GET_ORIGIN_LIST_FAIL: type('[members] GET_ORIGIN_LIST_FAIL'),
};

// Get members list
export class MembersList implements Action {
    type = ActionTypes.MEMBERS_LIST;
    constructor(public payload: any) {
    }
}
export class MembersListSuccess implements Action {
    type = ActionTypes.MEMBERS_LIST_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class MembersListFail implements Action {
    type = ActionTypes.MEMBERS_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// Create member
export class CreateMember implements Action {
    type = ActionTypes.CREATE_MEMBER;
    constructor(public payload: any) {
    }
}
export class CreateMemberSuccess implements Action {
    type = ActionTypes.CREATE_MEMBER_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class CreateMemberFail implements Action {
    type = ActionTypes.CREATE_MEMBER_FAIL;
    constructor(public payload: any) {
    }
}

// Update member
export class UpdateMember implements Action {
    type = ActionTypes.UPDATE_MEMBER;
    constructor(public payload: any) {
    }
}
export class UpdateMemberSuccess implements Action {
    type = ActionTypes.UPDATE_MEMBER_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class UpdateMemberFail implements Action {
    type = ActionTypes.UPDATE_MEMBER_FAIL;
    constructor(public payload: any) {
    }
}

// Delete member

export class DeleteMember implements Action {
    type = ActionTypes.DELETE_MEMBER;
    constructor(public payload: any) {
    }
}
export class DeleteMemberSuccess implements Action {
    type = ActionTypes.DELETE_MEMBER_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class DeleteMemberFail implements Action {
    type = ActionTypes.DELETE_MEMBER_FAIL;
    constructor(public payload: any) {
    }
}

// Get group list
export class GetGroupList implements Action {
    type = ActionTypes.GET_GROUP_LIST;
    
}
export class GetGroupListSuccess implements Action {
    type = ActionTypes.GET_GROUP_LIST_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class GetGroupListFail implements Action {
    type = ActionTypes.GET_GROUP_LIST_FAIL;
    constructor(public payload: any) {
    }
}


// Get role list
export class GetRoleList implements Action {
    type = ActionTypes.GET_ROLE_LIST;
    
}
export class GetRoleListSuccess implements Action {
    type = ActionTypes.GET_ROLE_LIST_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class GetRoleListFail implements Action {
    type = ActionTypes.GET_ROLE_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// Get origin list
export class GetOriginList implements Action {
    type = ActionTypes.GET_ORIGIN_LIST;
    
}
export class GetOriginListSuccess implements Action {
    type = ActionTypes.GET_ORIGIN_LIST_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class GetOriginListFail implements Action {
    type = ActionTypes.GET_ORIGIN_LIST_FAIL;
    constructor(public payload: any) {
    }
}


export type Actions =
    | MembersList
    | MembersListSuccess
    | MembersListFail

    | CreateMember
    | CreateMemberSuccess
    | CreateMemberFail

    | DeleteMember
    | DeleteMemberSuccess
    | DeleteMemberFail

    | UpdateMember
    | UpdateMemberSuccess
    | UpdateMemberFail

    
    | GetGroupList
    | GetGroupListSuccess
    | GetGroupListFail

    | GetRoleList
    | GetRoleListSuccess
    | GetRoleListFail


