import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import moment from 'moment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingSandbox } from '../../meeting.sandbox';
import { Subscription } from 'rxjs';
import { MembersSandbox } from '../../../members/members.sandbox';
import { cloneDeep } from 'lodash';
import { MeetingService } from '../../meeting.service';
import { log } from 'node:console';
import { ToastrService } from 'ngx-toastr';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrl: './create-meeting.component.scss'
})
export class CreateMeetingComponent {
  public subscriptions: Array<Subscription> = [];



  createmeeting: any = FormGroup;


  membersList: any;

  allmemberSelect: boolean = false;

  mode: any;
  public href: string = "";
  edit: any = false;
  meeting_id: any;
  meeting_link: any = '';

  member_empty: any;
  member_empty_error = "";
  minDate: any;
  tempArray: any;

  geoLocationOptions: any = [];
  alloptions: any = [];

  grouplist: any = [

    // {
    //   id: 1,
    //   display: 'Principal'
    // },
    // {
    //   id: 2,
    //   display: 'Staff'
    // },
    // {
    //   id: 3,
    //   display: 'Admin'
    // }
  ];

  groupconfig = {

    displayKey: 'display',
    value: 'id',
    search: true,
    limitTo: 1000,
    height: '300px',
    customComparator: (a: any, b: any) => {
      const keyA = a.standard_level_id;
      const keyB = b.standard_level_id;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public meetingSandbox: MeetingSandbox,
    public membersSandbox: MembersSandbox,
    public meetingservice: MeetingService,
    private toastr: ToastrService,

    public memberSandbox: MembersSandbox,

  ) {
    this.fetchMembersList();
    this.minDate = moment().toDate();
  }
  ngOnInit() {
    this.initCreateForm();
    this.getGeoLocations();
    this.getGroupList();
  }

  getGroupList() {

    this.memberSandbox.getGroupList();

    this.subscriptions.push(
      this.membersSandbox.groupList$.subscribe((response: any) => {
        if (response && response.status == true) {
          let temp: any = [];
          for (let group of response.data) {
            let obj: any = {};
            obj.id = group.id;
            obj.display = group.group_name;
            temp.push(obj);
          }
          this.grouplist = temp;
          console.log('this.grouplist', this.grouplist);

        }
      })
    );

  }

  getGeoLocations() {
    this.meetingSandbox.getGeoLocation();

    this.subscriptions.push(
      this.meetingSandbox.geoLocation$.subscribe((response: any) => {
        if (response && response.status == true) {
          for (let opotion of response.data) {
            let opt: any = {};
            opt.id = opotion.id;
            opt.display = opotion.location_name;
            this.alloptions.push(opt);
          }
          this.geoLocationOptions = this.alloptions;
        }
      })
    );

  }


  setFormData(response: any) {

    this.createmeeting.controls['title'].setValue(response.data[0].title);
    this.createmeeting.controls['date'].setValue(response.data[0].meeting_date);
    this.createmeeting.controls['from_time'].setValue(response.data[0].from_time);
    this.createmeeting.controls['to_time'].setValue(response.data[0].to_time);
    this.createmeeting.controls['venue'].setValue(response.data[0].venue);
    this.createmeeting.controls['agenda'].setValue(response.data[0].meeting_content);
    this.meeting_link = response.data[0].meeting_link;
    this.createmeeting.controls['geo_location'].setValue({
      // id: response.data[0] .id,
      // display: response.data[0] .location_name 
    });
    this.createmeeting.controls['agenda'].setValue(response.data[0].meeting_content);

    let selectedGroups: any = [];

    for (let group of response.data[0].groups) {

      for (let grp of this.grouplist) {
        if (grp.id == group) {
          selectedGroups.push(grp);
        }
      }
    }
    this.createmeeting.controls['groups'].setValue(selectedGroups);


    if ((response.data[0].member_id) && (response.data[0].member_id.length != 0)) {


      console.log('this.membersList', this.membersList);

      for (let id of response.data[0].member_id) { // 14, 15
        for (let member of this.tempArray) { // [14,15,16,17]
          if (member.id == id) {
            member.is_select = true;
          }
          // else if (member && member.is_select && member.is_select != true){
          //   member.is_select = false;

          // } 
          else {
            if ((member.is_select) && (member.is_select == true)) {
              member.is_select = true;
            }
            else {
              member.is_select = false;

            }
          }
        }
      }

      // this.tempArray = this.membersList;

      console.log('this.tempArray', this.tempArray);


      let checkFalse = this.tempArray.filter((obj: any) => obj.is_select == false);
      this.allmemberSelect = checkFalse && checkFalse.length > 0 ? false : true;

      if (checkFalse && checkFalse.length > 0) {
        this.allmemberSelect = false;
      }
      else {
        this.allmemberSelect = true;
      }
      console.log('this.membersList', this.membersList);

    }
  }

  async fetchMembersList() {
    const params: any = {};

    this.membersSandbox.membersList(params);
    await this.subscriptions.push(
      this.membersSandbox.membersList$.subscribe((response: any) => {
        if (response && response.status == true) {
          this.membersList = cloneDeep(response.data);
          this.tempArray = cloneDeep(this.membersList);
          debugger
          for (let element of this.membersList) {
            element.is_select = false;
          }
          //
          this.href = this.router.url;
          let all = this.href.split('/');
          this.mode = all[2];
          if (this.mode === 'edit') {
            this.edit = true;
            this.meeting_id = all[3];
            let params: any = {
              meeting_id: +this.meeting_id
            }

            this.meetingservice.getMeeting(params).subscribe(
              (response: any) => {
                if (response && response.status === true) {
                  this.setFormData(response);

                }
              }
            );
          }
        }
      })
    );

  }

  selectAllMember(event: any) {
    for (let member of this.membersList) {
      member.is_select = event.target.checked == true ? true : false;
    }
    this.tempArray = this.membersList;
    this.allmemberSelect = event.target.checked ? true : false;

  }

  selectOneMember(event: any, member: any) {

    if (event.target?.checked == true) {
      member.is_select = true;
    }
    else {
      member.is_select = false;
    }

    let checkFalse = this.membersList.filter((obj: any) => obj.is_select == false);
    this.allmemberSelect = checkFalse && checkFalse.length > 0 ? false : true;

  }


  initCreateForm() {
    this.createmeeting = this.fb.group({
      title: [null, Validators.required],
      date: [null, Validators.required],
      from_time: [null, Validators.required],
      to_time: [null, Validators.required],
      geo_location: [null],
      venue: [null],
      agenda: [null],
      groups: [null, Validators.required]

    })
  }


  createMeeting() {
    debugger
    if (!this.createmeeting.valid) {
      console.log("this.createmeeting", this.createmeeting.value);
      this.validateAllFormFields(this.createmeeting);
      return;
    }

    // this.timeRangeValidator();
    const from = this.createmeeting.value.from_time;
    const to = this.createmeeting.value.to_time;
    const fromTime = moment(from, 'hh:mm A');
    const toTime = moment(to, 'hh:mm A');
    if (fromTime.isSameOrAfter(toTime)) {
      this.toastr.error('From time must be less than To time!');
      console.log('fn stopped');

      return;
    }
    // this.validateDateAndTime();
    const selectedDate = this.createmeeting.value.date;
    const currentDate = moment();

    if (selectedDate && moment(selectedDate).isSame(currentDate, 'day')) {
      const selectedTime = this.createmeeting.value.from_time;
      const selectedDateTime = moment(selectedDate).set({
        hour: moment(selectedTime, 'hh:mm A').hour(),
        minute: moment(selectedTime, 'hh:mm A').minute(),
        second: 0,
        millisecond: 0
      });

      if (selectedDateTime.isBefore(currentDate)) {
        this.toastr.error('You have selected a past time for today!');
        console.log('fnnnnnnnnnn stopped');

        return
      }
    }

    if ((this.meeting_link == '') && (this.createmeeting.value.geo_location == null)) {
      this.toastr.error('You must select geo location or enter meeting link')
      return
    }

    console.log('clear if');
    debugger

    let groups: any = [];

    for (let group of this.createmeeting.value.groups) {
      groups.push(group.id);
    }



    if (this.edit == false) {

      // let selectedMembers: any = [];
      // for (let element of this.tempArray) {
      //   if (element.is_select == true) {
      //     selectedMembers.push(element.id)
      //   }
      // }
      // if (selectedMembers.length == 0) {
      //   this.member_empty = true;
      //   this.member_empty_error = "Attendees are required";
      //   return;
      // }
      // else {
      //   this.member_empty = false;
      //   this.member_empty_error = "";
      // }

      let params: any = {};
      params.meeting_link = this.meeting_link;
      params.to_time = this.createmeeting.value.to_time;
      params.from_time = this.createmeeting.value.from_time;
      params.meeting_content = this.createmeeting.value.agenda;
      params.meeting_date = moment(this.createmeeting.value.date).format('YYYY/MM/DD');
      params.venue = this.createmeeting.value.venue;
      params.title = this.createmeeting.value.title;
      // params.participants = selectedMembers;
      params.geo_location = this.createmeeting.value.geo_location ? this.createmeeting.value.geo_location.id : null;

      params.groups_id = groups;


      console.log("p", params);


      this.meetingSandbox.createMeeting(params);

      this.subscriptions.push(
        this.meetingSandbox.createMeeting$.subscribe((response: any) => {
          if (response && response.status == true) {
            this.router.navigate(['meeting/meeting-list']);
          }

        })
      );
    }
    else {
      // let selectedMembers: any = [];
      // for (let element of this.membersList) {
      //   if (element.is_select == true) {
      //     selectedMembers.push(element.id)
      //   }
      // }

      let params: any = {};
      params.id = +this.meeting_id;
      params.meeting_link = this.meeting_link;
      params.to_time = this.createmeeting.value.to_time;
      params.from_time = this.createmeeting.value.from_time;
      params.meeting_content = this.createmeeting.value.agenda;
      params.meeting_date = moment(this.createmeeting.value.date).format('YYYY/MM/DD');
      params.venue = this.createmeeting.value.venue;
      params.title = this.createmeeting.value.title;
      // params.participants = selectedMembers;
      params.groups_id = groups;


      this.meetingSandbox.updateMeeting(params);

      this.subscriptions.push(
        this.meetingSandbox.createMeeting$.subscribe((response: any) => {
          if (response && response.status == true) {
            this.router.navigate(['meeting/meeting-list'])
          }
        })
      );
    }

  }


  // timeRangeValidator() {

  // }

  // validateDateAndTime() {

  // }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  onCancelBtnClick() {
    // this.form.reset();
    // this.postUrl = ''
    // this.imagePost = ''
    // this.availability = []
    // this.subscriptions.forEach(each => each.unsubscribe());
    this.router.navigate(['meeting/meeting-list'])
  }

  searchMember(event: any) {
    if (event.target.value == '') {
      this.tempArray = this.membersList;
    }
  }

  enterSearch(event: any) {
    if (event.target.value == '') {
      this.tempArray = this.membersList;
    }
    else {
      this.tempArray = this.membersList;
      let find = this.tempArray.filter((element: any) =>
        element.name.toLowerCase().includes(event.target.value.toLowerCase()) || element.designation.toLowerCase().includes(event.target.value.toLowerCase())
      );
      this.tempArray = find;
    }

  }

  onSelectionChange(selectedItems: any) {
    if (selectedItems.value.length > 2) {
      this.createmeeting.controls['groups'].setValue(selectedItems.value.slice(0, 2));
      this.toastr.error('You can select maximum 2 groups');
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }

}
