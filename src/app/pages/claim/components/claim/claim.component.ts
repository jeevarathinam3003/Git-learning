import { Component } from '@angular/core';
import { ClaimSandbox } from '../../claim.sandbox';
import { Subscription } from 'rxjs';
import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrl: './claim.component.scss'
})
export class ClaimComponent {

  public subscriptions: Array<Subscription> = [];


  totalclaimsCount: any;

  page: number = 1;
  pageSize: number = 10;

  limit: number = 5;
  offset: number = 0;
  count: number = 1;
  keyword: string = '';


  optoins: any = [
    {
      id: 1,
      display: "All",
      is_select: true
    },
    {
      id: 2,
      display: "Claims for approval",
      is_select: false
    }, {
      id: 3,
      display: "Approved",
      is_select: false
    }, {
      id: 4,
      display: "Rejected",
      is_select: false
    },
  ]

  meetings: any = [

    // {
    //   id: 1,
    //   display: 'Meeting 1'
    // },
    // {
    //   id: 2,
    //   display: 'Meeting 2'
    // },
    // {
    //   id: 3,
    //   display: 'Meeting 3'
    // }
  ];

  meeting_id: any = null;

  meeting_name: any;

  // claimsList: any = [
  //   {
  //     id: 502,
  //     claim_id: "c-324",
  //     claim_date: "27/03/2025",
  //     staff_name: "Swathi Gururajan",
  //     designation: "Principal",
  //     meeting_name: "Annual Conference",
  //     college_name: "SRM Engineering College, Ramapuram",
  //     total_claim_amount: 10000,
  //     status: 0,
  //     wantToExpand: false,

  //     claim_breakup: [
  //       {
  //         name: 'Daily Allowence',
  //         amount: 3000,
  //         split: [
  //           {
  //             name: 'Food',
  //             amount: 3000
  //           }
  //         ]
  //       },
  //       {
  //         name: 'Travel Allowence',
  //         amount: 7000,
  //         split: [
  //           {
  //             name: 'Travel',
  //             amount: 5000
  //           },
  //           {
  //             name: 'Accommodation',
  //             amount: 2000
  //           }
  //         ]

  //       }
  //     ]
  //   },
  //   {
  //     id: 503,
  //     claim_id: "c-323",
  //     claim_date: "27/03/2025",
  //     staff_name: "Jeeva",
  //     designation: "Staff",
  //     meeting_name: "Sports meeting",
  //     college_name: "Vellore Institute of Technology (VIT)",
  //     total_claim_amount: 20000,
  //     status: 1,
  //     wantToExpand: false,

  //     claim_breakup: [
  //       {
  //         name: 'Daily Allowence',
  //         amount: 5000,
  //         split: [
  //           {
  //             name: 'Food',
  //             amount: 5000
  //           }
  //         ]
  //       }, {
  //         name: 'Travel Allowence',
  //         amount: 15000,
  //         split: [
  //           {
  //             name: 'Travel',
  //             amount: 8000
  //           },
  //           {
  //             name: 'Accommodation',
  //             amount: 7000
  //           }
  //         ]

  //       }
  //     ]
  //   },
  //   {
  //     id: 504,
  //     claim_id: "c-325",
  //     claim_date: "27/03/2025",
  //     staff_name: "Rakesh Kumar MSc. PhD",
  //     designation: "Staff",
  //     meeting_name: "General meet",
  //     college_name: "SRM Institute of Science and Technology",
  //     total_claim_amount: 50000,
  //     status: 2,
  //     wantToExpand: false,

  //     claim_breakup: [
  //       {
  //         name: 'Daily Allowence',
  //         amount: 20000,
  //         split: [
  //           {
  //             name: 'Food',
  //             amount: 20000
  //           }
  //         ]
  //       }, {
  //         name: 'Travel Allowence',
  //         amount: 30000,
  //         split: [
  //           {
  //             name: 'Travel',
  //             amount: 20000
  //           },
  //           {
  //             name: 'Accommodation',
  //             amount: 10000
  //           }
  //         ]

  //       }
  //     ]
  //   },
  //   {
  //     id: 505,
  //     claim_id: "c-326",
  //     claim_date: "27/03/2025",
  //     staff_name: "Hari",
  //     designation: "Principal",
  //     meeting_name: "Project meeting",
  //     college_name: "Arts college",
  //     total_claim_amount: 22000,
  //     status: 0,
  //     wantToExpand: false,

  //     claim_breakup: [
  //       {
  //         name: 'Daily Allowence',
  //         amount: 2000,
  //         split: [
  //           {
  //             name: 'Food',
  //             amount: 2000
  //           }
  //         ]
  //       },
  //       {
  //         name: 'Travel Allowence',
  //         amount: 20000,
  //         split: [
  //           {
  //             name: 'Travel',
  //             amount: 7000
  //           },
  //           {
  //             name: 'Accommodation',
  //             amount: 13000
  //           }
  //         ]

  //       }
  //     ]
  //   }

  // ]

  claim_list: any;

  constructor(
    public claimSandbox: ClaimSandbox,
    private router: Router,


  ) { }
  ngOnInit() {
    this.fetchMeetingList();
  }
  fetchMeetingList() {

    let param: any = {
      completed: 1
    }

    this.claimSandbox.getMeetingList(param);
    this.subscriptions.push(
      this.claimSandbox.meetingList$.subscribe((response: any) => {
        if (response && response.status == true) {

          let temp: any = [];

          for (let meeting of response.data) {

            let obj: any = {};
            obj.id = meeting.meeting_id
            obj.display = meeting.meeting_content;
            temp.push(obj);
          }

          this.meetings = temp;

        }
      })
    );


  }

  selectMeeting(event: any) {

    console.log('ytfy', this.meeting_name);

    debugger

    if (event != undefined) {
      this.meeting_id = event.id
    }
    else {
      this.meeting_id = null
    }

    this.fetchClaimList();

  }
  fetchClaimList() {
    const params: any = {
      limit: this.limit,
      offset: this.offset,
    }
    params.category = null;
    params.meeting_id = this.meeting_id;
    for (let op of this.optoins) {
      if (op.is_select == true) {
        params.category = op.id;
      }
    }
    if (params.category == null) {
      this.optoins[0].is_select = true;
      params.category = 1;
    }
    // console.log('params.category', params.category);

    this.claimSandbox.getClaimList(params);

    this.subscriptions.push(
      this.claimSandbox.claimList$.subscribe((response: any) => {
        if (response && response.status == true) {
          debugger
          this.claim_list = cloneDeep(response.data);
          this.totalclaimsCount = cloneDeep(response.count);
        }
      })
    );
  }


  onCheckboxChange(event: any) {

    // for (let op of this.optoins) {
    //   // if (+event.target.value == op.id) {
    //     op.is_select = false;
    //   // }
    //   else {
    //     op.is_select = false;
    //   }
    // }



    for (let op of this.optoins) {
      if (+event.target.value == op.id) {
        op.is_select = !op.is_select
      }
      else {
        op.is_select = false;
      }
    }

    // let temp: any = this.optoins.filter((obj: any) => {
    //   if (obj.is_select == true) {
    //     return obj;
    //   }
    // });
    // console.log('temp',temp);
    // if(temp.length == 0){
    //   this.optoins[0].is_select = true
    // }

    this.fetchClaimList();
  }

  // viewBerakup(claim: any) {
  //   for (let claims of this.claimsList) {
  //     if (claims.id != claim.id) {
  //       claims.wantToExpand = false;
  //     }
  //     else {
  //       if (claims.wantToExpand && claims.wantToExpand == true) {
  //         claims.wantToExpand = false;
  //       }
  //       else {
  //         claims.wantToExpand = true;
  //       }
  //     }
  //   }
  // }

  // pagination
  setPageSize(value: any) {
    value = value.target.value;
    this.limit = value;
    this.fetchClaimList();

  }

  goToPage(event: any) {

    let value: any = event.target ? event.target.value : event
    if (value) {
      this.page = value;
      this.offset = (value - 1) * this.limit;
      this.fetchClaimList();

    }
  }

  pageEvent(event: any) {
    this.offset = (event - 1) * this.limit;
    this.fetchClaimList();

  }
  onAddBtnClick() {
    this.router.navigate(['claim/add-claim'])
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }


}


