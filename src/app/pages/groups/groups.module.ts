import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SelectDropDownModule } from 'ngx-select-dropdown';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';



import { MatIconModule } from '@angular/material/icon';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
// import { MeetingLayoutComponent } from './meeting-layout/meeting-layout.component';
// import { CreateMeetingComponent } from './components/create-meeting/create-meeting.component';
// import { MeetingService } from './meeting.service';
// import { MeetingEffect } from './effects/meeting.effect';
// import { MeetingSandbox } from './meeting.sandbox';
import { EffectsModule } from '@ngrx/effects';
// import { MeetingListComponent } from './components/meeting-list/meeting-list.component';
import { MembersSandbox } from '../members/members.sandbox';
import { MembersEffect } from '../members/effects/members.effect';
import { MembersService } from '../members/members.service';
import { GroupsLayoutComponent } from './groups-layout/groups-layout.component';
import { GroupCreateComponent } from './components/group-create/group-create.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupsEffect } from './effects/groups.effect';
import { GroupsSandbox } from './groups.sandbox';
import { GroupsService } from './groups.service';

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY'
    }
};

export const routes: any = [

    {
        path: '',
        component: GroupsLayoutComponent,

        children: [
            {
                path: 'create-group',
                component: GroupCreateComponent,
                
            },

            {
                path: 'group-list',
                component: GroupListComponent,
            },
            {
                path: 'edit-group/:group_id',
                component: GroupCreateComponent,
             
            },

            {
                path: '',
                redirectTo: 'group-list',
                pathMatch: 'full'
            }

        ],
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        SelectDropDownModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        BsDatepickerModule,
        NgbModule,
        MatNativeDateModule,
        MatIconModule,
        NgxMaterialTimepickerModule,
        MatRadioModule,
        // FontAwesomeModule,
        // MatMenuModule,
        EffectsModule.forFeature([GroupsEffect]),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        GroupCreateComponent,
        GroupListComponent,
        GroupsLayoutComponent
    ],
    providers: [
        GroupsSandbox,
        GroupsService,
     
        // NgcCookieConsentService,
        // WindowService,
        // NgcCookieConsentConfig
        {
            provide: DateAdapter, useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },


    ],
    bootstrap: [],
    exports: [RouterModule],


})
export class GroupsModule { }
