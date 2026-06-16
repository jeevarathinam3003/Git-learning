import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {get} from 'lodash';
import {AuthGuard} from './auth.guard';
import {menu} from '../../shared/components/sidebars/side-menu';
@Injectable()
export class RouterAuthGard implements CanActivate {
    tempMenu: any;
    isAccess: any;
    menuItem: any;
    userMenu: any;
    admin: any;
    finalMenu:any = [];

    constructor(private router: Router, public authGuard: AuthGuard) {
        this.userMenu = JSON.parse(localStorage.getItem('userMenu') || '{}');
        this.admin = localStorage.getItem('superAdmin');
        this.menuItem = JSON.parse(JSON.stringify(menu));
        this.disableMenu();
    }
    disableMenu() {
        if (this.userMenu && this.userMenu.length > 0) {
            this.userMenu.forEach((value:any) => {
                this.menuItem.forEach((data:any) => {
                    if (get(value, 'child.length') > 0) {
                        if (data.slug === value.menuSlug) {
                            let tempArray:any = [];
                            data['is_access'] = value['is_access'] || 0;
                            data['sortOrder'] = value['sortOrder'];
                            value.child.forEach((child:any) => {
                                data.submenu.forEach((sub:any) => {
                                    if (sub.slug === child.menuSlug) {
                                        sub['is_access'] = child['is_access'] || 0;
                                        sub['sortOrder'] = child['sortOrder'];
                                        tempArray.push(sub);
                                    }
                                });
                            });
                            data.submenu = tempArray;
                            this.finalMenu.push(data);
                        }
                    } else {
                        if (value.menuSlug === data.slug) {
                            data['is_access'] = value['is_access'] || 0;
                            data['sortOrder'] = value['sortOrder'];
                            this.finalMenu.push(data);
                        }
                    }
                });
            });
        } else {
            this.finalMenu = [];
        }
        if (this.admin && this.admin === 'yes') {
            const obj = {
                path: '',
                title: 'Exit',
                image: 'assets/imgs/support.svg',
                actImg: 'assets/imgs/support-active.svg',
                submenu: [],
                class: '',
                extralink: false,
                is_access: 1,
                sortOrder: 100,
            };
            this.finalMenu.push(obj);
        }
        this.finalMenu =  this.finalMenu.sort((a:any , b:any) => a['sortOrder'] - b['sortOrder']);
        this.finalMenu = this.finalMenu.map((order:any) => {
            if (get(order , 'submenu.length') > 0) {
                order.submenu.sort((a:any, b:any) => a['sortOrder'] - b['sortOrder']);
            }
            return order;
        });
        this.menuItem = this.finalMenu;

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        const feeDiscount = '/fees-management/discount';
        const feePayment = '/fees-management/payment';
        const routeMaster = '/vehicle-management/route-master';
        const driver = '/vehicle-management/driver';
        const scheduleVoice = '/messages/schedule';
        const student = '/student-management';
        const preAdmission = '/admission/pre-admission';
        const mainAdmission = '/admission/main-admission';
        const subject = '/master-setup/subjects';
        const group = '/master-setup/group';
        const previleges = '/master-setup/user-previleges';
        const wishList = '/master-setup/wishlist';
        const staff = '/staff-management';
        const ccList = '/master-setup/cclist';
        if (this.menuItem && this.menuItem.length > 0) {
            this.menuItem.forEach((mainMenu:any) => {
                if (get(mainMenu, 'submenu.length') > 0) {
                    mainMenu.submenu.forEach((submenu:any) => {
                        if (state.url === submenu.path) {
                            if (+get(submenu, 'is_access') === 1) {
                                this.isAccess = true;
                            } else {
                                this.isAccess = false;
                            }
                        } else {
                            if (+get(submenu, 'is_access') === 1) {
                                if (state.url.includes('/fees-management/discount')) {
                                    if (state.url.includes(feeDiscount)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                                }
                                if (state.url.includes('/fees-management/payment')) {
                                    if (state.url.includes(feePayment)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                                }
                                if (state.url.includes('/vehicle-management/route-master')) {
                                    if (state.url.includes(routeMaster)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                                }
                                if (state.url.includes('/vehicle-management/driver')) {
                                    if (state.url.includes(driver)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                            }
                                if (state.url.includes('/messages/schedule')) {
                                    if (state.url.includes(scheduleVoice)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                            }
                                if (state.url.includes('/student-management')) {
                                    if (state.url.includes(student)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                            }
                                if (state.url.includes('/admission/pre-admission')) {
                                    if (state.url.includes(preAdmission)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                            }
                                if (state.url.includes('/admission/main-admission')) {
                                    if (state.url.includes(mainAdmission)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                            }
                                if (state.url.includes('/master-setup/subjects')) {
                                    if (state.url.includes(subject)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                            }
                                if (state.url.includes('/master-setup/group')) {
                                    if (state.url.includes(group)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                            }
                                if (state.url.includes('/master-setup/user-previleges')) {
                                    if (state.url.includes(previleges)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                            }
                                if (state.url.includes('/master-setup/wishlist')) {
                                    if (state.url.includes(wishList)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                            }
                                if (state.url.includes('/master-setup/cclist')) {
                                    if (state.url.includes(ccList)) {
                                        this.isAccess = true;
                                    }  else {
                                        this.isAccess = false;
                                    }
                            }
                        } else {
                                this.isAccess = false;
                            }
                    }});
                } else {
                    if (state.url === mainMenu.path) {
                        if (+get(mainMenu, 'is_access') === 1) {
                            this.isAccess = true;
                        } else {
                            this.isAccess = false;
                        }
                    } else {
                        if (+get(mainMenu, 'is_access') === 1) {
                            if (state.url.includes('/staff-management')) {
                                if (state.url.includes(staff)) {
                                    this.isAccess = true;
                                }  else {
                                    this.isAccess = false;
                                }
                            }
                        } else {
                            this.isAccess = false;
                        }
                    }
                }
            });
        }
        return true;
    }
}
