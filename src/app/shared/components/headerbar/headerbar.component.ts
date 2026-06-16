import { Component, Input,HostListener, ElementRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonSandbox } from '../../../common/common.sandbox';
import introJs from 'intro.js';
import { faArrowRightToBracket, faBell, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { AcademicYearDetailsComponent } from '../../popup/academic-year-details/academic-year-details.component';
import { WebNotificaionComponent } from '../../popup/web-notificaion/web-notificaion.component';
import { SchoolRenewalFormComponent } from '../../popup/school-renewal-form/school-renewal-form.component';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.scss',
})
export class HeaderbarComponent {

  timer: any;
  isExpanded: any = false;
  URL: any;
  @Input() userdetail: any;
  @Input() institutedetail: any;
  redirectUrl = environment.url;
  notificationList: any = [];
  notificationCount = 0;
  DisableSidebar = 0; // for expired institutes login
  academicYearLabel: any = 'Academic Year';
  private subscriptions: Array<Subscription> = [];
  loginType: any = 0; groupHeadDetails: any = '';
  btn:any;
  faInput = faArrowRightToBracket;
  faBell = faBell;
  InstDetails:any;
  constructor(
    private eRef: ElementRef,
    public router: Router,
    private modalService: NgbModal,
    public commonSandBox: CommonSandbox,

  ) { 
    this.InstDetails = JSON.parse(localStorage.getItem('instituteDetails')!);
    console.log('InstDetails',this.InstDetails)
    if(this.InstDetails.SAOrINST == 1){
      this.commonSandBox.getSchooldetail();
    } else {
      const loginType = localStorage.getItem('isGroupHead');
        if(loginType && loginType == 'yes'){
        } else {
          this.commonSandBox.getSchooldetail();
        }
    }

    setInterval(() => {
      this.URL = this.router.url
        if (this.URL == '/lesson-Plan/lesson-plan-template/add') {
          this.btn = 1;
        }
        else if (this.URL == '/lesson-Plan/all-class/add') {
          this.btn = 1;
        }
        else {
          this.btn = 0;
        }
      }, 1000)
  }

  ngOnInit() {
    this.checkSubscriptionTo();  // for expired institutes login 
    // const instituteDetails = localStorage.getItem('instituteDetails') || '';
    // const InstDetails = JSON.parse(instituteDetails);

    const InstDetails = JSON.parse(localStorage.getItem('instituteDetails')!);
    if (this.InstDetails.SAOrINST == 1) {
      this.loginType = 0;
      let param: any = {};
      param.count = 1;
      this.commonSandBox.GetNotificationList(param);
      this.subscriptions.push(this.commonSandBox.GetNotificationList$.subscribe(payload => {
        if (payload && payload.status && parseInt(payload.status) > 0) {
          this.notificationCount = payload.count;
        }
      }));

      this.subscriptions.push(this.commonSandBox.instituteSettingDetails$.subscribe(payload => {
        if (payload) {
          this.academicYearLabel = (payload && payload.acadamicYearId == payload.comm_acadamicYearId) ? 'Current Academic Year' : 'Academic Year';
        }
      }));
    } else {
      const loginType = localStorage.getItem('isGroupHead');
      if (loginType && loginType == 'yes') {
        const instituteDetails = localStorage.getItem('instituteDetails');
        this.loginType = 1;
        this.groupHeadDetails = JSON.parse(instituteDetails!);
      } else {
        this.loginType = 0;
        let param: any = {};
        param.count = 1;
        this.commonSandBox.GetNotificationList(param);
        this.subscriptions.push(this.commonSandBox.GetNotificationList$.subscribe(payload => {
          if (payload && payload.status && parseInt(payload.status) > 0) {
            this.notificationCount = payload.count;
          }
        }));

        this.subscriptions.push(this.commonSandBox.instituteSettingDetails$.subscribe(payload => {
          if (payload) {
            this.academicYearLabel = (payload && payload.acadamicYearId == payload.comm_acadamicYearId) ? 'Current Academic Year' : 'Academic Year';
          }
        }));
      }
    }
  }

  toggleDropdown() {
    this.isExpanded = !this.isExpanded;
}
@HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isExpanded = false;
    }
  }

  doLogout() {
    var loginId = JSON.parse(localStorage.getItem('LoginDetails')!);
    const params: any = {};
    params.module = 1;
    params.inputDetails = { loginId: loginId ? loginId.userLogin : '', tokenExpireType: 2 };
    this.commonSandBox.confirmationModel(params);

    if (localStorage.getItem('superAdmin') === 'yes') {
      localStorage.removeItem('instituteToken');
      localStorage.removeItem('superAdmin');
      localStorage.removeItem('instituteToken');
      localStorage.removeItem('roleSlug');
      localStorage.removeItem('instituteDetails');
      localStorage.removeItem('userMenu');
      window.open(this.redirectUrl, '_self');
    } else {
      localStorage.removeItem('userMenu');
      localStorage.removeItem('instituteToken');
      localStorage.removeItem('instituteDetails');
      localStorage.clear();
      this.router.navigate(['/auth']);

      setTimeout(() => { window.location.reload(); }, 1000);
    }
  }

  academicYear() {
    console.log('academicYear')
    const modalRef = this.modalService.open(AcademicYearDetailsComponent, { backdrop: 'static', windowClass: 'custom-term-other' });
    modalRef.componentInstance.requestDetails = 0;
    modalRef.result.then(result => {
      if (result) {

      }
    });

  }

  // starttour() {
  //   console.log('Start Tour');
  //   var url1 = localStorage.getItem('url1');
  //   console.log('url1', url1);
  //   this.URL = this.router.url
  //   console.log('this.URL', this.URL)
  //   if (localStorage.getItem('url1') == this.URL) {
  //     this.tourstart()
  //   }
  //   else if(localStorage.getItem('url2') == this.URL){
  //     this.tourstarts()
  //   }

  // }

  // tourstart() {
  //   setTimeout(() => {
  //     introJs().setOptions({
  //       steps: [
  //         {
  //           element: document.querySelector('.lp-Heading'),
  //           intro: 'You can create your own customised lessson plan'
  //         },
  //         {
  //           element: document.querySelector('.temp-field'),
  //           intro: 'We Have Multiple Pre-defined fields That Can Fit Into Your Template',
  //         },
  //         {
  //           element: document.querySelector('.alias-name'),
  //           intro: 'You Can Change The Name Of The Field as Per You Need'
  //         },
  //         {
  //           element: document.querySelector('.temp-fieldtype'),
  //           intro: 'Choose Whether The Field Should Be A Textbox/Dropdown/Datefield'
  //         },
  //         {
  //           element: document.querySelector('.temp-action'),
  //           intro: 'Click To Add The Field To Your Template'
  //         },
  //         {
  //           element: document.querySelector('.dd-template'),
  //           intro: 'Drag and Drop Fields To Change The Order'
  //         },
  //         {
  //           element: document.querySelector('.field-type'),
  //           intro: 'View Your Inputs Here'
  //         },
  //         {
  //           element: document.querySelector('.field-name'),
  //           intro: 'If You Have Missed Anything, You Can Always Edit By Clicking Here'
  //         },
  //         {
  //           element: document.querySelector('.field-remove'),
  //           intro: 'Click Here To Remove This Field From Template'
  //         }
  //       ]
  //     }).start();
  //   }, 500);
  // }

  // tourstarts() {
  //   introJs().setOptions({
  //     tooltipClass: 'customTooltip',
  //     steps: [
  //       {
  //         element: document.querySelector('.Progressbar'),
  //         intro: 'Precentage of Progress Done'
  //       },
  //     ]
  //   }).start();
  // }

  renewalSchool() {
    console.log('renewalSchool')
    const modalRef = this.modalService.open(SchoolRenewalFormComponent, {
      windowClass: 'renewDashboard',
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.generateReportDetails = '';
    modalRef.result.then(result => {
      if (result) {
      }
    });
  }

  click(id: any, page: any) {
    let param: any = {};
    param.idnotification = id;
    this.commonSandBox.UpdateNotification(param);
    this.subscriptions.push(this.commonSandBox.UpdateNotification$.subscribe(payload => {
      if (payload && parseInt(payload.status) > 0) {
        $('#chk').hide(); this.commonSandBox.GetNotificationList(param);
        this.subscriptions.push(this.commonSandBox.GetNotificationList$.subscribe(payload => {
          if (payload && payload.status && parseInt(payload.status) > 0) {
            this.notificationCount = payload.count;
            page == 'renew' ? this.renewalSchool() : this.router.navigate([page]);
          }
        }))
      }
    }))
  }

  webNotification() {
    let param: any = {};
    param.count = 0;
    this.commonSandBox.GetNotificationList(param);
    this.subscriptions.push(this.commonSandBox.GetNotificationList$.subscribe(payload => {
      if (payload && payload.data && payload.data.length > 0) {
        this.notificationList = payload.data;
        this.notificationCount = payload.count;
        this.subscriptions.forEach(each => { each.unsubscribe(); });
        const modalRef = this.modalService.open(WebNotificaionComponent, {
          windowClass: 'webNotification',
          keyboard: false
        });
        modalRef.componentInstance.notificationList = this.notificationList;
        modalRef.result.then(result => {
          if (result) {
            this.ngOnInit();
          }
        });
      }
    }))
  }

  changeAcademicYear() {
    const modalRef = this.modalService.open(AcademicYearDetailsComponent, { backdrop: 'static', windowClass: 'custom-term-other' });
    modalRef.componentInstance.requestDetails = 1;
    modalRef.result.then(result => {
      if (result) {
        // this.getOtherFeeList();
      }
    });
  }





  // for expired institutes login
  checkSubscriptionTo() {
    let getLocal = JSON.parse(localStorage.getItem("instituteDetails")!);
    if (getLocal.validityDaysLeft <= 0) {
      this.DisableSidebar = 1;
    }
  }

  settings(type: any) {
    if (type == 1) {
      window.open(environment.linkList.termsAndConditions);
    } else if (type == 2) {
      window.open(environment.linkList.privacyPolicy);
    } else if (type == 3) {
      window.open(environment.linkList.aboutUs);
    } else if (type == 4) {
      window.open(environment.linkList.contanctUs);
    }
  }

}
