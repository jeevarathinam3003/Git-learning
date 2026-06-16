import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../../shared/interfaces/interface';
import { Api } from '../../providers/api/api';

@Injectable()
export class ClaimService extends Api {

    private URL: string = this.getBaseUrl();

    getClaimList(params :any): Observable<any> {
        return this.http.get<any>(this.URL + '/setup/get-claim-list',{params : params});
    }

    getClaimDetails(param : any): Observable<any> {
        return this.http.get<any>(this.URL + '/setup/get-claim-list');
    }

    getMeetingList(param : any): Observable<any> {
        return this.http.get<any>(this.URL + '/setup/get-meeting-details-history',{params : param});
    }
    
}