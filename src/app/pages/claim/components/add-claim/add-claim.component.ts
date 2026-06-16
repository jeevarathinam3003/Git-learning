import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AWSUploadService } from '../../../../providers/services/awsupload.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClaimSandbox } from '../../claim.sandbox';
import { Subscription } from 'rxjs';
import { MeetingSandbox } from '../../../meeting/meeting.sandbox';
import { cloneDeep } from 'lodash';
import moment from 'moment';


@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrl: './add-claim.component.scss'
})
export class AddClaimComponent {
  @ViewChild('filePath') filePath!: ElementRef;
  @ViewChild('filePathDocument') filePathDocument!: ElementRef;
  UploadDocumentFiles: any = [];

  public subscriptions: Array<Subscription> = [];

  gotDetails:any = false;



  isDefault: boolean = true;
  documentName: any;
  documentFiles: any;
  documentFile!: File
  documentFileType: any;

  files: any = [];
  file: any;
  fileType: any;
  imageFileLength: any;
  imageFileName: any = [];

  isSelected: any = false;
  imagePost: any = '';





  edit_amount: any = 10000.00;

  get_reason: any;

  meetingName: any = [

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

  claimfor: any = FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    public claimSandbox: ClaimSandbox,
    public meetingSandbox: MeetingSandbox,
    // public meetingservice: MeetingService,
    // private toastr: ToastrService
    private awsupload: AWSUploadService,

  ) {
    // this.fetchMembersList();
    // this.minDate = moment().toDate();
  }
  ngOnInit() {
    this.initCreateForm();
    this.getMeetingList()
  }

  getMeetingList(){

    const params: any = {
          ongoing: 0,
          upcoming: 0,
          completed: 1
        }
        this.meetingSandbox.meetingList(params);
        this.subscriptions.push(
          this.meetingSandbox.meetingList$.subscribe((response: any) => {
            if (response && response.status == true) {

              let tempArray : any = [];

              for(let meeting of response.data){
                let each : any = {};
                each.id = meeting.meeting_id;
                each.display = meeting.title;
                tempArray.push(each);
                this.meetingName = tempArray;
              }
           
            }
          })
        );

  }

  initCreateForm() {
    this.claimfor = this.fb.group({
      date: [null, Validators.required],
      meeting_name: [null, Validators.required],
    })
  }
  changeDate(){
    this.gotDetails = false;
  }

  onChange(){
    this.gotDetails = false;
  }

  onCancelBtnClick() {
    // this.form.reset();
    // this.postUrl = ''
    // this.imagePost = ''
    // this.availability = []
    // this.subscriptions.forEach(each => each.unsubscribe());
    this.router.navigate(['claim/claim-list'])
  }

  changamount() {
    if ((+this.edit_amount) > (+10000)) {
      this.get_reason = true;
    }
    else {
      this.get_reason = false;
    }
  }

  getClaimDetails() {
    if (!this.claimfor.valid) {
      this.validateAllFormFields(this.claimfor);
      return;
    }

    const param: any = {
    }

    param.date =moment(this.claimfor.value.date).format('YYYY/MM/DD'); 
    param.meeting_id = this.claimfor.value.meeting_name.id;
    param.member_id = 47;

    debugger

    console.log('param',param);
    this.gotDetails=true

    

    this.claimSandbox.getClaimDetails(param);

      this.subscriptions.push(
        this.claimSandbox.claimDetails$.subscribe((response: any) => {
          if (response && response.status == true) {
            debugger
            this.gotDetails=true
          }
        })
      );


  }
  addClaim(){

  }

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


  // r1
  clickDocument() {
    const doc: HTMLElement = this.filePathDocument.nativeElement as HTMLElement;
    doc.click();
  }
  // r2
  uploadDocument(event: any) {
    debugger
    this.isDefault = false;
    this.documentFiles = event.target.files;
    this.documentFile = this.documentFiles[0];
    this.documentFileType = this.documentFile.type;
    this.documentName = this.documentFile.name;

    this.files = event.target.files;

    this.imageFileLength = event.target.files.length;
    if (this.imageFileLength == 1) {
      this.imageFileName.push({ name: this.files[0].name });
    }

  }


  // r3
  uploadDocumentApi() {
    this.isDefault = true;
    debugger

    const reader = new FileReader();
    reader.onload = async (events: any) => {
      // this.isSelected = true;
      this.imagePost = events.target.result;
      debugger
      if ((this.imageFileName && this.imageFileName.length == 1)) {
        // let InstituteId = JSON.parse(localStorage.getItem('instituteDetails'));

        const file = this.imagePost;
        const fileName = this.imageFileName[0].name;
        const fileExt = fileName.split('.').pop();


        const url_params = {
          bucket: 'schoolchimes-studentphotos',
          fileType: `filetype/${fileExt}`,
          fileName: fileName,
          // bucketPath: `${InstituteId.instituteIntId}`,
        };

        console.log('url_params', url_params);


        // Fetch pre-signed URL for this file
        const s3data = await this.awsupload.fetchPreSignedUrl(url_params);

        console.log('s3data', s3data);


        // Upload the file using the pre-signed URL
        // const awsurl = await this.awsupload.mediaUploadToS3(
        //   s3data.presignedUrl,
        //   url_params,
        //   file,
        //   s3data.fileUrl,
        // );

        // console.log('awsurl', awsurl);
        // this.postUrl = awsurl;
        // this.imageName = this.imageFileName[0].name;
      }
    };
    reader.readAsDataURL(this.documentFile);


  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }

}
