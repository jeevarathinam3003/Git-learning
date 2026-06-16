import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupsSandbox } from '../../groups.sandbox';
import { Subscription } from 'rxjs';
import { GroupsService } from '../../groups.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrl: './group-create.component.scss'
})
export class GroupCreateComponent {
  public subscriptions: Array<Subscription> = [];

  edit: any = false;
  creategroup: any = FormGroup;
  public href: string = "";
  mode: any;
  group_id: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public groupSandbox: GroupsSandbox,
    
    // public membersSandbox: MembersSandbox,
    public groupservice: GroupsService,
  ) {

  }


  ngOnInit() {
    this.href = this.router.url;
    let all = this.href.split('/');
    this.mode = all[2];
    if (this.mode === 'edit-group') {
      debugger
      this.edit = true;
      this.group_id = all[3];
      let params: any = {
        group_id: +this.group_id
      }

      this.groupservice.getParticularGroup(params).subscribe(
        (response: any) => {
          if (response && response.status === true) {
            debugger
            this.setFormData(response);

          }
        }
      );
    }
    this.initCreateForm();
  }


  

  onCancelBtnClick() {
    this.router.navigate(['groups/group-list'])
  }

  initCreateForm() {
    this.creategroup = this.fb.group({
      group_name: [null, Validators.required],
      daily_allowance: [null, Validators.required]
    })
  }

  createGroup() {
    debugger

    if (!this.creategroup.valid) {
      this.validateAllFormFields(this.creategroup);
      return;
    }


    if (this.edit == false) {

      let params: any = {};
      params.group_name = this.creategroup.value.group_name;
      params.daily_allowance = this.creategroup.value.daily_allowance;

      console.log("p", params);
      this.groupSandbox.createGroup(params);

      this.subscriptions.push(
        this.groupSandbox.createGroup$.subscribe((response: any) => {
          debugger
          if (response && response.status == true) {
            debugger
            this.router.navigate(['groups/group-list']);
          }

        })
      );
    }
    else {
      let params: any = {};
      params.id = this.group_id;
      params.group_name = this.creategroup.value.group_name;
      params.daily_allowance = this.creategroup.value.daily_allowance;
      
      this.groupSandbox.updateGroup(params);

      this.subscriptions.push(
        this.groupSandbox.createGroup$.subscribe((response: any) => {
          debugger
          if (response && response.status == true) {
            debugger
            this.router.navigate(['groups/group-list']);
          }

        })
      );

      this.groupSandbox.updateGroup(params);

      this.subscriptions.push(
        this.groupSandbox.updateGroup$.subscribe((response: any) => {
          if (response && response.status == true) {
            debugger
            this.router.navigate(['groups/group-list'])
          }
        })
      );
    }

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

  setFormData(response: any) {

    this.creategroup.controls['group_name'].setValue(response.data[0].group_name);
    this.creategroup.controls['daily_allowance'].setValue(response.data[0].daily_allowance);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }


}
