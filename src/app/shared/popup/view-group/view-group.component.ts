import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { MeetingSandbox } from '../../../pages/meeting/meeting.sandbox';
import { Subscription } from 'rxjs';
import { GroupsSandbox } from '../../../pages/groups/groups.sandbox';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrl: './view-group.component.scss'
})
export class ViewGroupComponent {


  public subscriptions: Array<Subscription> = [];


  group_id: any;
  group_name: any;

  membersList: any = [];

  constructor(
    public activeModal: NgbActiveModal,
    private groupSandbox: GroupsSandbox,

  ) { }

  ngOnInit() {
    this.viewGroup(this.group_id);
  }

  viewGroup(group_id: any) {
    let params: any = {
      group_id: group_id
    }
    this.groupSandbox.getMembers(params);
    this.subscriptions.push(this.groupSandbox.groupMembers$.subscribe((response: any) => {
      console.log('response', response)
      if (response && response.status == true) {
        debugger
        this.membersList = cloneDeep(response.data);
      }
    }))
  }

  close() {
    this.activeModal.close();
  }

  wantToDeleteMember(id: any) {

    for (let member of this.membersList) {

      if (member.id != id) {
        member.wantToDelete = false;
      }
      else {
        if (member.wantToDelete && member.wantToDelete == true) {
          member.wantToDelete = false;
        }
        else {
          member.wantToDelete = true;
        }
      }

    }

  }


  deleteMember(id: any) {
    let params = id;

    console.log("id", params)
    this.groupSandbox.removeMember(params);
    this.subscriptions.push(this.groupSandbox.removeGroupMember$.subscribe((response: any) => {
      if (response && response.status == true) {
        this.viewGroup(this.group_id);      }
    }))
  }



  cancelDelete(id: any) {
    for (let member of this.membersList) {
      if (member.id == id) {
        member.wantToDelete = false;
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
