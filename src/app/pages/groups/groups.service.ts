import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../../shared/interfaces/interface';
import { Api } from '../../providers/api/api';

@Injectable()
export class GroupsService extends Api {

    private URL: string = this.getBaseUrl();

    getGroupsList(payload: any): Observable<any> {
        debugger
        return this.http.get<any>(this.URL + '/setup/get-groups',{params: payload});
    }

    createGroup(payload: any): Observable<any> {
        debugger
        return this.http.post<any>(this.URL + '/setup/create-group',payload);
    }

    updateGroup(payload: any): Observable<any> {
        return this.http.put<any>(this.URL + '/setup/update-group',payload);
    }

    getParticularGroup(payload: any){
        return this.http.get<any>(this.URL + '/setup/get-groups',{params: payload});
    }

    deleteGroup(payload: any){
        return this.http.delete<any>(this.URL + '/setup/delete-group/'+ payload);
    }

    
    getGroupMembers(payload: any){
        return this.http.get<any>(this.URL + '/setup/get-members',{params: payload});
    }


    removeGroupMembers(payload: any){
        return this.http.delete<any>(this.URL + '/setup/delete-member/'+ payload);
    }
}
