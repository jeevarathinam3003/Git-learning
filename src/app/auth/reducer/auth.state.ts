import {Map, Record} from 'immutable';

export interface AuthState extends Map<string, any> {
    validateUser : any;
    validateUserLoading : boolean;
    validateUserLoaded : boolean;

    initiateOTP : any;

    validateOTP : any;
    validateOTPLoading : boolean;

}

export const authStateRecord = Record({
    validateUser : [],
    validateUserLoading : false,
    validateUserLoaded : true,

    initiateOTP : [],
    
    validateOTP:[],
    validateOTPLoading : false
});

