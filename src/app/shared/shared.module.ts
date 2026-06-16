import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ViewMemberComponent } from './popup/view-member/view-member.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { LogoutConfirmComponent } from './popup/logout-confirm/logout-confirm.component';
import { ViewGroupComponent } from './popup/view-group/view-group.component';


@NgModule({

  imports: [
    CommonModule,
    RouterModule,      
    DatePipe,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    NgSelectModule,
    ViewMemberComponent,
    SelectDropDownModule,
    LogoutConfirmComponent
  ],
  declarations: [
    SidebarComponent,
    ViewMemberComponent,
    LogoutConfirmComponent,
    ViewGroupComponent
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: []
})
export class SharedModule { }
