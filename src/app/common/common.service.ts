import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../shared/interfaces/interface';
import { Api } from '../providers/api/api';

@Injectable()
export class CommonService extends Api {

    private URL: string = this.getBaseUrl();

    getS3PreSignedUrl(params:any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + "/jasper/get-s3-presigned-url", { params: params });
    }

}