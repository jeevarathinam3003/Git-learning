import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewGroupComponent } from '../../../../shared/popup/view-group/view-group.component';
import { GroupsSandbox } from '../../groups.sandbox';
import { Subscription } from 'rxjs';
import { cloneDeep } from 'lodash';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms 0s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition('* => void', [
        animate('300ms 0s ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class GroupListComponent {

  public subscriptions: Array<Subscription> = [];

  limit: number = 5;
  offset: number = 0;
  keyword: string = '';
  count: number = 1;
  totalGroupsCount:any;

  page: number = 1;



  grouplist: any = [
    // {
    //   id: 1,
    //   group_name: 'Principal',
    //   members_count: 10,
    // },
    // {
    //   id: 2,
    //   group_name: 'Staff',
    //   members_count: 12,
    // },
    // {
    //   id: 3,
    //   group_name: 'Admin',
    //   members_count: 14,
    // }
  ];



  constructor(
    private router: Router,
    public groupsSandbox: GroupsSandbox,
    public modalService: NgbModal,
    // public commonSandbox: CommonSandbox,

  ) { }

  ngOnInit() {
    // this.initCreateForm();
    this.fetchGroupList();
  }

  fetchGroupList() {
    const params: any = {
      limit: this.limit,
      offset: this.offset,
      keyword: this.keyword,

    }
    this.groupsSandbox.getGroupsList(params);
    this.subscriptions.push(
      this.groupsSandbox.groupsList$.subscribe((response: any) => {
        debugger
        console.log('response',response);
        
        if (response && response.status == true) {
          debugger
          this.totalGroupsCount = cloneDeep(response.count);
          // console.log('this.totalMeetingsCount', this.totalMeetingsCount);
          this.grouplist = cloneDeep(response.data);
          
        }
      })
    );
  }

  export() {

  }


  onAddBtnClick() {
    debugger
    this.router.navigate(['groups/create-group'])
  }

 

  enterSearch() {
    if (this.keyword != '') {
      this.fetchGroupList();
    }

  }



  searchMeeting() {
    if (this.keyword == '') {
      this.fetchGroupList();
    }
  }

  editGroup(id: any) {
    this.router.navigate(['groups/edit-group/' + id]);
  }

  wantTodeleteGroup(id: any) {
    for (let group of this.grouplist) {

      if (group.id != id) {
        group.wantToDelete = false;
      }
      else {
        if (group.wantToDelete && group.wantToDelete == true) {
          group.wantToDelete = false;
        }
        else {
          group.wantToDelete = true;
        }
      }

    }
    // console.log("this.membersList", this.membersList);

  }

  cancelDelete(id: any) {
    for (let group of this.grouplist) {

      if (group.id == id) {
        group.wantToDelete = false;
      }
    }
  }
 
  deleteGroup(id: any) {

    this.groupsSandbox.deleteGroup(id);
    this.subscriptions.push(this.groupsSandbox.deleteGroup$.subscribe((response: any) => {
      if (response && response.status == true) {
        debugger
        this.fetchGroupList();
      }
    }));
  }

  viewGroup(group: any) {
    debugger
    const modalRef = this.modalService.open(ViewGroupComponent, { windowClass: 'my-class', backdrop: 'static' });
    modalRef.componentInstance.group_id = group.id;
    modalRef.componentInstance.group_name = group.group_name;
    modalRef.result.then(result => {
      if (result === 'true') {
        // this.page = 1;
        // this.getGroupList();
        // this.getGroupListCount();
      }
    });
  }

  // pagination
  setPageSize(value:any) {
    value=value.target.value;
    this.limit = value;
    this.fetchGroupList();
  }

  goToPage(event:any) {

    let value: any = event.target ? event.target.value : event
    if (value) {
      this.page = value;
      this.offset = (value - 1) * this.limit;
      this.fetchGroupList();
    }
  }

  pageEvent(event:any) {
    this.offset = (event - 1) * this.limit;
    this.fetchGroupList();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }

}

