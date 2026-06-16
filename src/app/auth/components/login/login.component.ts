import { Component, OnInit } from '@angular/core';
import { AuthSandbox } from '../../auth.sandbox';
import { AuthService } from '../../auth.service';
import { Subscription } from 'rxjs';


import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private subscriptions: Array<Subscription> = [];


  isAllowLogin: any = 0;
  allowToDashboard: any = false;

  validateOtpLoading: any = false;

  userMobile: any = "";

  mobileNumberError: any;
  callInitiateOTP: any = false;

  otp1: any = ''; otp2: any = ''; otp3: any = ''; otp4: any = ''; otp5: any = ''; otp6: any = '';


  constructor(
    public authSandbox: AuthSandbox,
    public authService: AuthService,
    public router: Router,
    private cookieService: CookieService

  ) { }


  ngOnInit() {

  }

  validateUser() {
    this.authSandbox.ClearData();


    if (this.userMobile == "") {
      this.mobileNumberError = "Please enter Mobile number."
    }
    else if (this.userMobile.length < 10) {
      this.mobileNumberError = "Please enter valid Mobile number."
    }
    else {
      let isAllow = 1;
      // API
      this.mobileNumberError = "";
      let params: any = {
        mobile_number: +this.userMobile
      }
      this.authSandbox.validateUser(params);



      this.subscriptions.push(
        this.authSandbox.validateUser$.subscribe((response: any) => {
          debugger
          if (response && response.status == true && isAllow == 1) {

            isAllow = 0;

            this.callInitiateOTP = true;
            if (this.callInitiateOTP == true) {
              debugger
              let params: any = {
                mobile_number: +this.userMobile
              }
              this.authSandbox.initiateOTP(params);
              this.subscriptions.push(
                this.authSandbox.initiateOTP$.subscribe((response: any) => {
                  if (response && response.status == true) {
                    debugger
                    this.allowToDashboard = response.data[0].isExpired == 0 ? true : false;

                    if (this.allowToDashboard == true) {
                      this.router.navigate(['dashboard']);
                    }
                    else {
                      this.isAllowLogin = 1
                    }
                  }
                })
              );
            }
          }

        })
      );





    }
  }

  changeEvent(event: any, last: any, field: any, previous: any) {

    if (event.keyCode === 8) {
      document.getElementById(previous)!.focus();
    }
    if (event.target && event.target.value && event.target.value.length) {
      if (field == 1) { this.otp1 = event.target.value }
      if (field == 2) { this.otp2 = event.target.value }
      if (field == 3) { this.otp3 = event.target.value }
      if (field == 4) { this.otp4 = event.target.value }
      if (field == 5) { this.otp5 = event.target.value }
      if (field == 6) { this.otp6 = event.target.value }
      if (field != 6) {
        document.getElementById(last)!.focus();
      }
    }
  }

  validateOTP() {


    // this.router.navigate(['dashboard']);
    if (this.otp1 == '' || this.otp2 == '' || this.otp3 == '' || this.otp4 == '' || this.otp5 == '' || this.otp6 == '') {
      return;
    }

    let params: any = {
      mobile_number: +this.userMobile,
      otp: this.otp1 + this.otp2 + this.otp3 + this.otp4 + this.otp5 + this.otp6
    }

    this.authSandbox.validateOtp(params);
    this.subscriptions.push(
      this.authSandbox.validateOTP$.subscribe((data: any) => {
        if (data && data.status == true) {
          let token: any = data.token
          this.setCookie(token)
          this.router.navigate(['dashboard']);
        } 
      })
    );
  }
  setCookie(token: any) {
    this.cookieService.set('user_token', token);
  }

  backTologin() {
    this.isAllowLogin = 0;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }

}



