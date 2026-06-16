

// membersList(): Observable<ResponseInterface> {
// return this.http.post<ResponseInterface>(this.URL+'/setup/validate-mobile-number');
// }



import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../../shared/interfaces/interface';
import { Api } from '../../providers/api/api';

@Injectable()
export class MembersService extends Api {

    private URL: string = this.getBaseUrl();

    membersList(payload: any): Observable<any> {
        return this.http.get<any>(this.URL + '/setup/get-members',{params: payload});
    }

    createMember(payload: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/setup/create-member', payload);
    }

    
    updateMember(payload: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/setup/update-member-details', payload);
    } 

    getMember(params:any): Observable<any> {
        return this.http.get<any>(this.URL + '/setup/get-members/',{params: params});
    }

    deleteMember(params: any): Observable<ResponseInterface> {
        return this.http.delete<ResponseInterface>(this.URL + '/setup/delete-member/'+ params);
    }


    getGroupList(): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/setup/get-groups');
    }

    getRoleList(): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/setup/get-type-list');
    }
    
    getOriginList(): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/setup/get-origin-list');
    }
}