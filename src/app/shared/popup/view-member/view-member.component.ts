import { Component } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MeetingSandbox } from '../../../pages/meeting/meeting.sandbox';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrl: './view-member.component.scss'
})
export class ViewMemberComponent {
  public subscriptions: Array<Subscription> = [];


  meeting_id:any;
  meeting_name:any;

  membersAttendance : any = [];

  constructor(
    public activeModal: NgbActiveModal,
    private meetingSandbox : MeetingSandbox,

  ) { }

  ngOnInit() {
    this.viewAttendance(this.meeting_id);
  }
  viewAttendance(meeting_id:any){
    let params : any = {
      meeting_id : meeting_id
    }
    this.meetingSandbox.viewAttendanceDetails(params);
    this.subscriptions.push(this.meetingSandbox.viewAttendance$.subscribe((response: any) => {
      console.log('response', response)
      if (response && response.status == true) {

       

        this.membersAttendance = response.data;
        // this.fetchMeetingList();
      }
    }))
  }

  close(){
    debugger
    this.activeModal.close();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
