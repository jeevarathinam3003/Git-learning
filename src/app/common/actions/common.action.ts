


import { Action } from '@ngrx/store';
import { type } from '../../shared/utility';
import { ResponseInterface } from '../../shared/interfaces//interface';

export const ActionTypes = {
    GET_S3_PRE_SIGNED_URL: type('[common] GET_S3_PRE_SIGNED_URL'),
    GET_S3_PRE_SIGNED_URL_SUCCESS: type('[common] GET_S3_PRE_SIGNED_URL_SUCCESS'),
    GET_S3_PRE_SIGNED_URL_FAIL: type('[common] GET_S3_PRE_SIGNED_URL_FAIL'),

};

export class getS3PreSignedUrl implements Action {
    type = ActionTypes.GET_S3_PRE_SIGNED_URL;
    constructor(public payload: any) { }
  }
  
  export class getS3PreSignedUrlSuccess implements Action {
    type = ActionTypes.GET_S3_PRE_SIGNED_URL_SUCCESS;
    constructor(public payload: ResponseInterface) { }
  }
  
  export class getS3PreSignedUrlFail implements Action {
    type = ActionTypes.GET_S3_PRE_SIGNED_URL_FAIL;
    constructor(public payload: any) { }
  }


export type Actions =
    | getS3PreSignedUrl
    | getS3PreSignedUrlSuccess
    | getS3PreSignedUrlFail





