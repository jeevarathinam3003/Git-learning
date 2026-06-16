import { Map, Record } from 'immutable';

export interface CommonState extends Map<string, any> {
    getS3PreSignedUrl: any;
    getS3PreSignedUrlLoading: boolean;
}

export const commonStateRecord = Record({
    getS3PreSignedUrl: [],
    getS3PreSignedUrlLoading: false,
});
