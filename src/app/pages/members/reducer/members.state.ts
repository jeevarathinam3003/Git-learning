import {Map, Record} from 'immutable';

export interface MembersState extends Map<string, any> {
    membersList : any;
    membersListCount : any;
    membersListLoading : boolean;

    createMember:any;
    createMemberLoading:boolean

    updateMember:any;
    updateMemberLoading:boolean

    deleteMember:any
    deleteMemberLoading:boolean

    groupList:any
    groupListLoading:boolean

    roleList:any
    roleListLoading:boolean

    originList:any
    originListLoading:boolean

}

export const membersStateRecord = Record({
    membersList : [],
    membersListCount : [],
    membersListLoading : false,

    createMember:[],
    createMemberLoading:false,

    updateMember:[],
    updateMemberLoading:false,

    deleteMember:[],
    deleteMemberLoading:false,

    groupList:[],
    groupListLoading:false,

    roleList:[],
    roleListLoading:false,

    originList:[],
    originListLoading:false

});

