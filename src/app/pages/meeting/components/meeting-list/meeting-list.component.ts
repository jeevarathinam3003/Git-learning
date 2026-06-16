import { Component } from '@angular/core';
import { MeetingSandbox } from '../../meeting.sandbox';
import { Subscription } from 'rxjs';
import { cloneDeep } from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewMemberComponent } from '../../../../shared/popup/view-member/view-member.component';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastrService } from 'ngx-toastr';
import moment from 'moment';





@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrl: './meeting-list.component.scss'
})
export class MeetingListComponent {
  public subscriptions: Array<Subscription> = [];

  onGoing: boolean = true;
  upComming: boolean = false;
  completed: boolean = false;
  meetingList: any = cloneDeep([]);

  limit: number = 5;
  offset: number = 0;
  count: number = 1;
  keyword: string = '';

  page: number = 1;
  pageSize: number = 10;

  totalMeetingsCount: any;


  constructor(
    // private fb: FormBuilder,
    public meetingSandbox: MeetingSandbox,
    private modalService: NgbModal,
    private router: Router,
    private clipboard: Clipboard,
    private toaster: ToastrService

  ) { }

  ngOnInit() {
    // this.initCreateForm();
    this.fetchMeetingList();
  }
  onCheckboxChangeType1(event: any) {
    if ((event.target.checked == false) ) {
      if((this.completed == false) && (this.upComming == false)){
        this.onGoing = true;
      }
    }
    else{
    this.onGoing = !this.onGoing;
    }
    this.fetchMeetingList();
    
  }
  onCheckboxChangeType2(event: any) {
    this.upComming = !this.upComming;
    if ((event.target.checked == false) && ((this.onGoing == false) && (this.completed == false) && (this.upComming == false))) {
      this.onGoing = true;
    }
    this.fetchMeetingList();
  }
  onCheckboxChangeType3(event: any) {
    this.completed = !this.completed;
    if ((event.target.checked == false) && ((this.onGoing == false) && (this.completed == false) && (this.upComming == false))) {
      this.onGoing = true;
    }
    this.fetchMeetingList();
  }


  fetchMeetingList() {
    const params: any = {
      ongoing: this.onGoing == true ? 1 : 0,
      upcoming: this.upComming == true ? 1 : 0,
      completed: this.completed == true ? 1 : 0,

      limit: this.limit,
      offset: this.offset,
      keyword: this.keyword,

    }
    this.meetingSandbox.meetingList(params);
    this.subscriptions.push(
      this.meetingSandbox.meetingList$.subscribe((response: any) => {
        if (response && response.status == true) {
          this.totalMeetingsCount = cloneDeep(response.count);

          this.meetingList = cloneDeep(response.data);
          for (let meet of this.meetingList) {
            meet.isHidden = false;
            meet.meeting_date = moment(meet.meeting_date).format('DD/MM/YYYY');
          }
        }
        else{
          this.meetingList = [];
        }
      })
    );
  }

  // View member modal
  viewMember(meeting: any) {
    debugger
    const modalRef = this.modalService.open(ViewMemberComponent, { windowClass: 'my-class', backdrop: 'static' });
    modalRef.componentInstance.meeting_id = meeting.meeting_id;
    modalRef.componentInstance.meeting_name = meeting.title;
    modalRef.result.then(result => {
      if (result === 'true') {
        // this.page = 1;
        // this.getGroupList();
        // this.getGroupListCount();
      }
    });
  }

  wantTodeleteMeeting(meeting_id: any) {

    for (let meeting of this.meetingList) {

      if (meeting.meeting_id != meeting_id) {
        meeting.wantToDelete = false;
      }
      else {
        if (meeting.wantToDelete && meeting.wantToDelete == true) {
          meeting.wantToDelete = false;
        }
        else {
          meeting.wantToDelete = true;
        }
      }

    }

  }


  deleteMeeting(id: any) {
    let params = id;

    console.log("id", params)
    this.meetingSandbox.deleteMeeting(params);
    this.subscriptions.push(this.meetingSandbox.deleteMeeting$.subscribe((response: any) => {
      console.log('response', response)
      if (response && response.status == true) {
        this.fetchMeetingList();
      }
    }))
  }



  cancelDelete(meeting_id: any) {
    for (let meeting of this.meetingList) {
      if (meeting.meeting_id == meeting_id) {
        meeting.wantToDelete = false;
      }
    }
  }

  editMeeting(meeting_id: any) {
    this.router.navigate(['meeting/edit/' + meeting_id])
  }

  // pagination
  setPageSize(value: any) {
    value = value.target.value;
    this.limit = value;
    this.fetchMeetingList();
  }

  goToPage(event: any) {

    let value: any = event.target ? event.target.value : event
    if (value) {
      this.page = value;
      this.offset = (value - 1) * this.limit;
      this.fetchMeetingList();
    }
  }

  pageEvent(event: any) {
    this.offset = (event - 1) * this.limit;
    this.fetchMeetingList();
  }



  onAddBtnClick() {
    this.router.navigate(['meeting/create'])
  }

  searchMember() {
    if (this.keyword == '') {
      this.fetchMeetingList();
    }
  }

  enterSearch() {
    if (this.keyword != '') {
      this.fetchMeetingList();
    }

  }

  copyText(value: any) {
    this.clipboard.copy(`${value}`);
    this.toaster.success('Link copied')
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
