import { Action } from '@ngrx/store';
import { type } from '../../shared/utility';
import { ResponseInterface } from '../../shared/interfaces/interface';


export const ActionTypes = {
    VALIDATE_USER: type('[auth] VALIDATE_USER'),
    VALIDATE_USER_SUCCESS: type('[auth] VALIDATE_USER_SUCCESS'),
    VALIDATE_USER_FAIL: type('[auth] VALIDATE_USER_FAIL'),

    INITIATE_OTP: type('[auth] INITIATE_OTP'),
    INITIATE_OTP_SUCCESS: type('[auth] INITIATE_OTP_SUCCESS'),
    INITIATE_OTP_FAIL: type('[auth] INITIATE_OTP_FAIL'),

    VALIDATE_OTP: type('[auth] VALIDATE_OTP'),
    VALIDATE_OTP_SUCCESS: type('[auth] VALIDATE_OTP_SUCCESS'),
    VALIDATE_OTP_FAIL: type('[auth] VALIDATE_OTP_FAIL'),

    CLEAR_DATA: type('[auth] CLEAR_DATA'),


};

// Validate user
export class ValidateUser implements Action {
    type = ActionTypes.VALIDATE_USER;
    constructor(public payload: any) {
    }
}
export class ValidateUserSuccess implements Action {
    type = ActionTypes.VALIDATE_USER_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class ValidateUserFail implements Action {
    type = ActionTypes.VALIDATE_USER_FAIL;
    constructor(public payload: any) {
    }
}

// Initiate OTP
export class InitiateOTP implements Action {
    type = ActionTypes.INITIATE_OTP;
    constructor(public payload: any) {
    }
}
export class InitiateOTPSuccess implements Action {
    type = ActionTypes.INITIATE_OTP_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class InitiateOTPFail implements Action {
    type = ActionTypes.INITIATE_OTP_FAIL;
    constructor(public payload: any) {
    }
}

// Validate OTP
export class ValidateOTP implements Action {
    type = ActionTypes.VALIDATE_OTP;
    constructor(public payload: any) {
    }
}
export class ValidateOTPSuccess implements Action {
    type = ActionTypes.VALIDATE_OTP_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}
export class ValidateOTPFail implements Action {
    type = ActionTypes.VALIDATE_OTP_FAIL;
    constructor(public payload: any) {
    }
}

// Clear data
export class ClearData implements Action {
    type = ActionTypes.CLEAR_DATA;
    
}




export type Actions =
    | ValidateUser
    | ValidateUserSuccess
    | ValidateUserFail

    | InitiateOTP
    | InitiateOTPSuccess
    | InitiateOTPFail

    | ValidateOTP
    | ValidateOTPSuccess
    | ValidateOTPFail
    |  ClearData



