import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MembersSandbox } from '../../members.sandbox';
import { Subscription } from 'rxjs';
import { cloneDeep } from 'lodash';
import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations';






@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 0s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms 0s', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translatey(-100%)' }),
        animate('300ms 0s', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms 0s', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class MembersComponent implements OnInit {

  public subscriptions: Array<Subscription> = [];

  faSearch: any = "faSearch"
  page: number = 1;
  pageSize: number = 10;

  totalMembersCount: any ;

  checked = true;


  collectionSize :any;

  limit: number = 5;
  offset: number = 0;
  count: number = 1;
  keyword: string = '';

  // config = {
  //   itemsPerPage: this.pageSize, currentPage: this.page, totalItems: ''
  // }

  membersList: any = cloneDeep([]);

  role: any = [
    // { id: 1, display: 'Super Admin' },
    // { id: 2, display: 'Sub Admin' },
    // { id: 3, display: 'Vice chancellor' },
    // { id: 4, display: 'Staff' }
  ];

  constructor(
    private router: Router,
    public membersSandbox: MembersSandbox,
    // public modalService: NgbModal,
    // public commonSandbox: CommonSandbox,

  ) { }

  ngOnInit() {
    this.fetchMembersList()
    // this.fetchUserListCount()
  }


  fetchMembersList() {
    const params: any = {
      limit: this.limit,
      offset: this.offset,
      keyword: this.keyword
      // count: this.count
    }
    this.membersSandbox.membersList(params);
    this.subscriptions.push(
      this.membersSandbox.membersList$.subscribe((response: any) => {
        if (response && response.status == true) {

          this.totalMembersCount = cloneDeep(response.count);

          this.membersList = cloneDeep(response.data);
          for (let element of this.membersList) {
            for (let ele of this.role) {
              if (element.type_id == ele.id) {
                element.type_id = ele.display;
              }
            }
          }
        }
       
      })
    );

  }

  // pagination
  setPageSize(value:any) {
    value=value.target.value;
    this.limit = value;
    this.fetchMembersList();
  }

  goToPage(event:any) {

    let value: any = event.target ? event.target.value : event
    if (value) {
      this.page = value;
      this.offset = (value - 1) * this.limit;
      this.fetchMembersList();
    }
  }

  pageEvent(event:any) {
    this.offset = (event - 1) * this.limit;
    this.fetchMembersList();
  }


  editMember(id: any) {
    this.router.navigate(['members/edit/' + id])
  }



  wantTodeleteMember(id: any) {
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
    console.log("this.membersList", this.membersList);

  }

  cancelDelete(id: any) {
    for (let member of this.membersList) {

      if (member.id == id) {
        member.wantToDelete = false;
      }
    }
  }

  deleteMember(id: any) {
    this.membersSandbox.deleteMember(id);
    this.subscriptions.push(this.membersSandbox.deleteMember$.subscribe((response: any) => {
      if (response && response.status == true) {
        this.fetchMembersList();
      }
    }));
  }


  onAddBtnClick() {
    this.router.navigate(['members/add'])
  }

  
  export() {
    // const params = {
    //   name: 'membersList',
    //   file: 'Memberlist.xlsx',
    //   payload: {
    //     keyword: this.keyword
    //   }

    // }
    // this.commonSandbox.export(params)
  }
  searchMember() {
    if (this.keyword == '') {
      this.fetchMembersList();
    }
  }

  enterSearch() {
    if (this.keyword != '') {
      this.fetchMembersList();
    }

  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
   }


}


