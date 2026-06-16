/*
 * spurtcommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Subject } from 'rxjs';
import { OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { PermissionServices } from '../../shared/services/permission.services';

@Injectable()
export class AuthGuard implements CanActivate {
  public menuValue = new Subject<any>();
  constructor(
    private router: Router,
    public permissionServices: PermissionServices,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    return this.checkLogin(state.url, route.data['permission']);
  }
  // CheckLogin
  checkLogin(url: string, rolePermission: string = '', ): Promise<boolean> | boolean {
    let currentUser: any;
      currentUser = localStorage.getItem('instituteToken');
   

    if (currentUser) {
      
      if (url === '/auth' || url === '/auth/forgot-password') {
        // Navigate to the login page with extras
        
        const isGroupHeadLogin = localStorage.getItem('isGroupHead'); 
        if(isGroupHeadLogin == 'yes'){
          const isSubGroupHeadlogin = localStorage.getItem('isSubGroupHead'); 
          if(isSubGroupHeadlogin == 'yes'){
            this.router.navigate(['/group-fee-management/payment']);
            return false;
          } else {
            this.router.navigate(['/school-dashboard']);
            return false;
          }
        } else {
          this.router.navigate(['/dashboard']);
          return false;
        }
      }
      if (rolePermission && rolePermission !== '') {
        if (this.permissionServices.hasPermission(rolePermission)) {
            return true;
        } else  {
          return false;
        }
      }
      return true;
    } else {
      if (url === '/auth' || url === '/auth/forgot-password' || url.includes('/auth/reset-password')) {
        return true;
      }
    }
    // Navigate to the login page with extras
    this.router.navigate(['/homepage']);
    return false;
  }
}
