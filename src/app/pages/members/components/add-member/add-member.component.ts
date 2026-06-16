import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';
import { MembersSandbox } from '../../members.sandbox';
import { Subscription } from 'rxjs';
import { MembersService } from '../../members.service';




@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.scss'
})
export class AddMemberComponent {
  @ViewChild('filePath') filePath: any = ElementRef;

  public subscriptions: Array<Subscription> = [];

  form: any = FormGroup;
  files: any;
  file: any;
  fileType: any;
  fileTypeError: any;
  isSelected = false;
  postUrl = 'assets/imgs/users.svg';
  imagePost = '';
  userId = 0
  sipActiveStatus = false
  count = 2
  // orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id
  emailPattern = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' + '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';


  role: any = [
    // { id: 1, display: 'Super Admin' },
    // { id: 2, display: 'Sub Admin' },
    // { id: 3, display: 'Vice chancellor' },
    // { id: 4, display: 'Staff' }
  ];

  gender: any = [
    { id: 1, display: 'Male' },
    { id: 2, display: 'Female' }
  ]
  mode: any;
  public href: string = "";
  edit: any = false;
  memberID: any;
  allow_to_create: any = false;
  // Dont_allow_to_create: any = true;
  allow_required_error: any = '';
  getOtherOrigin: any = false;

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

  origin: any = [
    // {
    //   id: 1,
    //   display: 'Bangalore'
    // },
    // {
    //   id: 2,
    //   display: 'Gulparga'
    // },
    // {
    //   id: 3,
    //   display: 'Others'
    // }
  ];

  other_origin: any = '';
  other_origin_error: any;



  availability = []
  constructor(
    private fb: FormBuilder,
    public membersSandbox: MembersSandbox,
    public memberservice: MembersService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initCreateForm();
    this.getGroupList();
    this.getRoleList();
    this.getOrigin();
    this.href = this.router.url;
    let all = this.href.split('/');
    this.mode = all[2];

    if (this.mode === 'edit') {
      this.edit = true;
      this.memberID = all[3];
      let params: any = {
        member_id: +this.memberID
      }
      this.memberservice.getMember(params).subscribe(
        (response: any) => {
          this.setFormData(response.data[0]);
        }
      );
    }

  }

  getRoleList() {
    this.membersSandbox.getRoleList();
    this.subscriptions.push(
      this.membersSandbox.roleList$.subscribe((response: any) => {
        if (response && response.status == true) {
          let temp: any = [];
          for (let role of response.data) {
            let obj: any = {};
            obj.id = role.id;
            obj.display = role.name;
            temp.push(obj);
          }
          this.role = temp;

        }
      })
    );

  }

  getOrigin() {
    this.membersSandbox.getOriginList();
    this.subscriptions.push(
      this.membersSandbox.originList$.subscribe((response: any) => {
        debugger
        if (response && response.status == true) {
          debugger

          let temp: any = [];
          for (let ori of response.data) {
            let obj: any = {};
            obj.id = ori.id;
            obj.display = ori.city;
            temp.push(obj);
          }
          this.origin = temp;
          // console.log('this.grouplist',this.grouplist);

        }
      })
    );

  }

  getGroupList() {
    this.membersSandbox.getGroupList();
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

  selectorigin() {

    if (this.form.value.origin.id == 3) {
      this.getOtherOrigin = true
    }
    else {
      this.getOtherOrigin = false
    }


  }

  originTyping(event: any) {
    debugger
    if (event.target.value != '') {
      this.other_origin_error = '';
    }
    else {
      this.other_origin_error = 'This is required field.'
    }

  }
  setFormData(data: any) {

    console.log("setFormData", data);

    this.form.controls['member_name'].setValue(data.name);
    this.form.controls['mobile_number'].setValue(data.mobile_number);
    this.form.controls['whatsapp_number'].setValue(data.whatsapp_number);
    this.form.controls['email_id'].setValue(data.email);
    this.form.controls['designation'].setValue(data.designation);

    let selectedRole: any;

    for (let each of this.role) {
      if (each.id == data.type_id) {
        selectedRole = each;
      }
    }

    this.form.controls['role'].setValue(selectedRole);

    this.form.controls['gender'].setValue({
      id: data.gender == 'Male' ? 1 : data.gender == 'Female' ? 2 : null,
      display: data.gender,
    });

    this.form.controls['dob'].setValue(moment(data.dob).format('DD/MM/YYYY'));
    debugger
    this.form.controls['address'].setValue(data.address);
    this.form.controls['city'].setValue(data.city);
    this.form.controls['district'].setValue(data.district);

    this.form.controls['state'].setValue(data.state);
    this.form.controls['pin_code'].setValue(data.pincode);

    this.form.controls['bank_name'].setValue(data.bank_details.bank_name);
    this.form.controls['branch_name'].setValue(data.bank_details.branch);
    this.form.controls['ifsc_code'].setValue(data.bank_details.ifsc_code);

    this.form.controls['bank_acc_no'].setValue(data.bank_details.active_bank_id);
    this.form.controls['pan_no'].setValue(data.pan_number);

    let selectedGroups: any = [];
    for (let group of data.group_ids) {
      for (let grp of this.grouplist) {
        if (grp.id == group) {
          selectedGroups.push(grp);
        }
      }
    }

    this.form.controls['groups'].setValue(selectedGroups);

    let selectedOrigin: any = {};
    for (let origin of this.origin) {
      if (origin.id == data.origin) {
        selectedOrigin = origin
      }
    }

    this.form.controls['origin'].setValue(selectedOrigin);




    this.allow_to_create = data.is_create_meeting == 1 ? true : false;

    console.log("data.dob", data.dob);



  }

  selectDate(event: any) {

    this.form.controls['dob'].setValue(moment(event.value).format('DD/MM/YYYY'));

    console.log("dob form", this.form.controls['dob']);

  }

  initCreateForm() {
    this.form = this.fb.group({
      member_name: [null, Validators.required],
      mobile_number: [null, Validators.required],
      whatsapp_number: [null],
      email_id: [null, Validators.required],
      // compose([Validators.required, Validators.pattern(this.emailPattern)])
      designation: [null, Validators.required],
      role: [null, Validators.required],
      gender: [null, Validators.required],
      dob: [null],
      address: [null],
      city: [null],
      state: [null],
      pin_code: [null],
      bank_name: [null, Validators.required],
      branch_name: [null, Validators.required],
      ifsc_code: [null, Validators.required],
      bank_acc_no: [null, Validators.required],
      pan_no: [null, Validators.required],
      origin: [null, Validators.required],
      groups: [null, Validators.required],
      district: [null]

    })
  }

  uploadButtonClick() {
    const el: HTMLElement = this.filePath.nativeElement as HTMLElement;
    el.click();
  }
  doCreateMember() {
    
    debugger
    if (!this.form.valid) {
      this.validateAllFormFields(this.form);
      return;
    }

    if ((this.form.value.origin.id == 3) && (this.other_origin == '')) {
      this.other_origin_error = 'This is required field.'
    }
    else {
      this.other_origin_error = ''
    }

    if ((this.allow_to_create == null) || (this.allow_to_create == undefined)) {
      this.allow_required_error = 'This is required field.'
      return
    }
    else {
      this.allow_required_error = ''
    }

    if (this.edit == false) {

      let groups: any = [];

      for (let group of this.form.value.groups) {
        groups.push(group.id);
      }
      debugger
      const param: any = {
      }

      param.name = this.form.value.member_name;
      param.address = this.form.value.address;
      param.type_id = this.form.value.role.id;
      param.profile_url = this.postUrl
      param.designation = this.form.value.designation;
      param.email = this.form.value.email_id;
      param.whatsapp_number = this.form.value.whatsapp_number
      param.mobile_number = this.form.value.mobile_number
      param.city = this.form.value.city;
      param.pincode = this.form.value.pin_code;
      param.state = this.form.value.state;
      param.dob = moment(this.form.value.dob).format('YYYY/MM/DD');
      param.gender = this.form.value.gender.display;
      param.bank_name = this.form.value.bank_name;
      param.branch = this.form.value.branch_name;
      param.ifsc_code = this.form.value.ifsc_code;
      param.active_bank_id = this.form.value.bank_acc_no;
      param.pan_number = this.form.value.pan_no;
      param.is_create_meeting = this.allow_to_create == true ? 1 : 0;
      param.origin = this.form.value.origin.id == 3 ? this.other_origin : this.form.value.origin.id;
      param.groups_id = groups;
      param.district = this.form.value.district;



      console.log("params", param);
      console.log("this.form.value.", this.form);

      this.membersSandbox.createMember(param);
      this.subscriptions.push(
        this.membersSandbox.createMember$.subscribe((response: any) => {
          if (response && response.status == true) {
            this.router.navigate(['members/list'])
          }
        })
      );
    }
    else {
      debugger
      let groups: any = [];

      for (let group of this.form.value.groups) {
        groups.push(group.id);
      }
      const param: any = {
      }
      param.id = +this.memberID
      param.name = this.form.value.member_name;
      param.address = this.form.value.address;
      param.type_id = this.form.value.role.id;
      param.profile_url = this.postUrl
      param.designation = this.form.value.designation;
      param.email = this.form.value.email_id;
      param.whatsapp_number = this.form.value.mobile_number
      param.mobile_number = this.form.value.whatsapp_number
      param.city = this.form.value.city;
      param.pincode = this.form.value.pin_code;
      param.state = this.form.value.state;
      param.dob = moment(this.form.value.dob).format('YYYY/MM/DD');
      param.gender = this.form.value.gender.display;
      param.bank_name = this.form.value.bank_name;
      param.branch = this.form.value.branch_name;
      param.ifsc_code = this.form.value.ifsc_code;
      param.active_bank_id = this.form.value.bank_acc_no;
      param.pan_number = this.form.value.pan_no;
      param.is_create_meeting = this.allow_to_create == true ? 1 : 0;

      param.origin = this.form.value.origin.id == 3 ? this.other_origin : this.form.value.origin.id;
      param.groups_id = groups;
      param.district = this.form.value.district;





      console.log("params", param);
      console.log("this.form.value.", this.form);


      this.membersSandbox.updateMember(param);
      this.subscriptions.push(
        this.membersSandbox.updateMember$.subscribe((response: any) => {
          if (response && response.status == true) {
            this.router.navigate(['members/list'])
          }
        })
      );
    }
  }

  onCreateBtnClick() {
    this.doCreateMember()
  }

  onCancelBtnClick() {
    // this.form.reset();
    // this.postUrl = ''
    // this.imagePost = ''
    // this.availability = []
    // this.subscriptions.forEach(each => each.unsubscribe());
    this.router.navigate(['members/list'])
  }

  // onSelectPhoneType(event) {
  //   if (event.unnest === 'sip') {
  //     return this.sipActiveStatus = true
  //   }
  //   this.sipActiveStatus = false
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

  // uploadButtonClick() {
  //   const el: HTMLElement = this.filePath.nativeElement as HTMLElement;
  //   el.click();
  // }
  uploadImage(event: any) {
    this.fileTypeError = '';
    this.files = event.target.files;
    this.file = this.files[0];
    this.fileType = this.file.type;
    if (this.fileType.match(/image\/*/)) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (events: any) => {
          this.isSelected = true;
          this.postUrl = events.target.result;
          this.imagePost = events.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    } else {
      this.fileTypeError = '(Only Images are allowed)';
    }
  }


  onCheckboxChange() {
    this.allow_to_create = !this.allow_to_create;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
