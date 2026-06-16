import { Injectable } from '@angular/core';
// import { Promise } from 'es6-promise';
import { Api } from '../../providers/api/api';  
import { environment } from '../../../environments/environment';


import { ResponseInterface } from '../interfaces/interface';

@Injectable()
export class PermissionServices extends Api {
  private URL = environment.baseUrl;
  permissions: any = []; // Store the actions for which this user has permission
  currentUser: any;
  role: any;
  hasPermission(authGroup: string): Promise<any> | any {
    this.permissions = localStorage.getItem('permissions')
      ? JSON.parse(localStorage.getItem('permissions')!)
      : {};
    this.role = '';
    const permissionKeys = this.permissions
    ? Object.keys(this.permissions)
    : [];
    if (this.role.slugName === 'super_admin') {
        return true;
      } else if (
        permissionKeys.length > 0 &&
        permissionKeys.indexOf(authGroup) > -1 &&
        this.permissions[authGroup]
      ) {
        return true;
      }
  }
  initializePermissions() {

    return new Promise((resolve:any, reject:any) => {
        this.http
        .get<ResponseInterface>(this.URL + '/user/user-permissions')
        .subscribe(
          (response:any) => {
          const permissions = response.data;
          const permissionsKeys = {};
          permissions.forEach((element:any) => {
            if (element.menuSlug) {
              if(element.hasOwnProperty('viewPriv')){
                let permissionsKeys: Record<string, any> = {};
                permissionsKeys[element.menuSlug + '_add'] = element.viewPriv;
            }
            if(element.hasOwnProperty('addPriv')){
              let permissionsKeys: Record<string, any> = {};
              permissionsKeys[element.menuSlug + '_view'] = element.addPriv;
            }
            if(element.hasOwnProperty('editPriv')){
              let permissionsKeys: Record<string, any> = {};
              permissionsKeys[element.menuSlug + '_edit'] = element.editPriv;
            }
            if(element.hasOwnProperty('deletePriv')){
              let permissionsKeys: Record<string, any> = {};
              permissionsKeys[element.menuSlug + '_delete'] = element.deletePriv;
            }
            if(element.hasOwnProperty('exportPriv')){
              let permissionsKeys: Record<string, any> = {};
              permissionsKeys[element.menuSlug + '_export'] = element.exportPriv;
            }
            }
          });
          localStorage.setItem(
            'permissions',
            JSON.stringify(permissionsKeys)
          );
          });
    });
  }
}
