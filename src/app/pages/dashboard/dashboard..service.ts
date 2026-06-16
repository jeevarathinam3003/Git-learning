// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ResponseInterface } from '../../shared/interfaces/interface';
// import { Api } from '../../providers/api/api';
// import { HttpParams } from '@angular/common/http';

// @Injectable()

// export class DashboardService extends Api {

//   private URL: string = this.getBaseUrl();

//   getDashboardCount(val:any): Observable<ResponseInterface> {
//     return this.http.get<ResponseInterface>(this.URL + '/dashboard');
//     // return this.http.get<ResponseInterface>(this.URL + '/dashboard/dashboardlist');
//   }
//   // getRenewalDetails(val): Observable<ResponseInterface> {
//   //   return this.http.get<ResponseInterface>(this.URL + '/dashboard/renewal-details');
//   // }
//   getRenewalDetails(params:any): Observable<ResponseInterface> {
//     return this.http.post<ResponseInterface>(this.URL + '/dashboard/renewal-details', params);
//   } 
//   studentCountList(params:any): Observable<ResponseInterface> {
//     return this.http.post<ResponseInterface>(this.URL + '/dashboard/GetSchoolStrengthBySchoolId',params);
//   }
//   getScrollList(params:any): Observable<ResponseInterface> {
//     return this.http.post<ResponseInterface>(this.URL + '/institute/dashboard-scroll',params);
//   }
//   exportrollData(params:any): Observable<any> {
//     const reqOpts: any = {};
//     reqOpts.responseType = 'arraybuffer';
//     if (params) {
//       reqOpts.params = new HttpParams();
//       for (const k in params) {
//         if (k) {
//           reqOpts.params = reqOpts.params.set(k, params[k]);
//         }
//       }
//     }
//     return this.http.get<ResponseInterface>(this.URL + '/dashboard/ExportRolldata', reqOpts);
//   }

//   ReadStatusUpdate(params:any): Observable<ResponseInterface> {
//     return this.http.get<ResponseInterface>(this.URL + '/dashboard/read-content-update',{params: params});
//   }
  
//   newUpdateDetails(params:any): Observable<ResponseInterface> {
//     return this.http.get<ResponseInterface>(this.URL + '/dashboard/new-update-details', {params: params});
//   } 
// }
