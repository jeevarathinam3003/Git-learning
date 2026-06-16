import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseInterface } from '../shared/interfaces/interface'; 
import { Api } from '../providers/api/api'; 


@Injectable()

export class AuthService extends Api {

    private URL: string = this.getBaseUrl();

    validateUser(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL+'/setup/validate-mobile-number', params);
    }

    
    initiateOTP(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL+'/setup/initiate-otp', params);
    }

    validateOTP(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL+'/setup/validate-user', params);
    }


}
 


