import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../../shared/interfaces/interface';
import { Api } from '../../providers/api/api';

@Injectable()
export class MeetingService extends Api {

    private URL: string = this.getBaseUrl();

    createmeeting(payload: any): Observable<any> {
        return this.http.post<any>(this.URL + '/setup/create-meeting',payload);
    }

    updatemeeting(payload: any): Observable<any> {
        return this.http.post<any>(this.URL + '/setup/update-meeting-details',payload);
    }

    meetingList(payload: any): Observable<any> {
        console.log('meetingList')
        return this.http.get<any>(this.URL + '/setup/get-meeting-details-history',{params: payload});
    }

    
    getMeeting(payload: any){
        return this.http.get<any>(this.URL + '/setup/get-meeting-details-list',{params: payload});
    }

    deleteMeeting(params: any): Observable<any> {
        console.log('deleteMeetingNewservice', params);
        return this.http.delete<any>(this.URL + '/setup/delete-meeting/' + params);
    }

    viewAttendance(params: any): Observable<any> {
        debugger
        return this.http.get<any>(this.URL + '/setup/get-meeting-members',{params: params});
    }

    getGeoLocation(): Observable<any> {
        return this.http.get<any>(this.URL + '/setup/get-location-history');
    }

}
