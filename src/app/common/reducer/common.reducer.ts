import { CommonState, commonStateRecord } from './common.state';
import * as actions from '../actions/common.action';

export const initialState: CommonState = (new commonStateRecord() as unknown) as CommonState;

export function reducer(
    state = initialState,
    { type, payload }: any
): CommonState {
    if (!type) {
        return state;
    }

    switch (type) {
       

        case actions.ActionTypes.GET_S3_PRE_SIGNED_URL:
            return Object.assign({}, state, {
                getS3PreSignedUrl: {},
                getS3PreSignedUrlLoading: true,
            });

        case actions.ActionTypes.GET_S3_PRE_SIGNED_URL_SUCCESS:
            return Object.assign({}, state, {
                getS3PreSignedUrl: payload,
                getS3PreSignedUrlLoading: false,
            });

        case actions.ActionTypes.GET_S3_PRE_SIGNED_URL_FAIL:
            return Object.assign({}, state, {
                getS3PreSignedUrl: payload,
                getS3PreSignedUrlLoading: false,
            });

        default: {
            return state;
        }
    }
}

/**
 * export values
 */
export const getS3PreSignedUrl = (state: CommonState) => state.getS3PreSignedUrl;
export const getS3PreSignedUrlLoading = (state: CommonState) => state.getS3PreSignedUrlLoading;



