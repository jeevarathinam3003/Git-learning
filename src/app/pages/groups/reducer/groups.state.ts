import {Map, Record} from 'immutable';

export interface GroupsState extends Map<string, any> {
    groupsList : any;
    groupsListLoading : boolean;

    createGroup : any;
    createGroupLoading : boolean;

    updateGroup : any;
    updateGroupLoading : boolean;


    deleteGroup : any;
    deleteGroupLoading : boolean;

    groupMembers : any;
    groupMembersLoading : boolean;
    
    removeGroupMember : any;
    removeGroupMemberLoading : boolean;
}

export const groupsStateRecord = Record({
    groupsList : [],
    groupsListLoading : false,

    createGroup : [],
    createGroupLoading : false,

    updateGroup : [],
    updateGroupLoading : false,

    deleteGroup : [],
    deleteGroupLoading : false,

    groupMembers : [],
    groupMembersLoading : false,

    removeGroupMember : [],
    removeGroupMemberLoading : false,
});

