import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ClaimComponent } from './components/claim/claim.component';
import { ClaimLayoutComponent } from './claim-layout/claim-layout.component';
import { ClaimSandbox } from './claim.sandbox';
import { ClaimService } from './claim.service';
import { EffectsModule } from '@ngrx/effects';
import { ClaimEffect } from './effects/claim.effect';
import { AddClaimComponent } from './components/add-claim/add-claim.component';

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
import { AWSUploadService } from '../../providers/services/awsupload.service';
import { CommonSandbox } from '../../common/common.sandbox';
import { CommonService } from '../../common/common.service';
import { CommonEffect } from '../../common/effects/common.effect';
import { MeetingSandbox } from '../meeting/meeting.sandbox';
import { MeetingService } from '../meeting/meeting.service';
import { MeetingEffect } from '../meeting/effects/meeting.effect';


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
        component: ClaimLayoutComponent,
        // data: {
        //     title: 'Attendance',
        //     urls: [{ title: 'Home' }, { title: 'Attendance' }]
        // }

        children: [
            {
                path: 'claim-list',
                component: ClaimComponent,
            },
            {
                path: 'add-claim',
                component: AddClaimComponent,
            },
            {
                path: '',
                redirectTo: 'claim-list',
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
        MatRadioModule,
        // MomentDateAdapter,
        NgbModule,
        BsDatepickerModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        SelectDropDownModule,
        // FontAwesomeModule,
        // MatMenuModule,
        EffectsModule.forFeature([ClaimEffect, CommonEffect, MeetingEffect]),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        ClaimComponent,
        ClaimLayoutComponent,
        AddClaimComponent,
    ],
    providers: [
        ClaimSandbox,
        ClaimService,
        AWSUploadService,
        CommonSandbox,
        CommonService,
        MeetingSandbox,
        MeetingService,
        // NgcCookieConsentService,
        // WindowService,
        // NgcCookieConsentConfig
        {
            provide: DateAdapter, useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],

})
export class ClaimModule { }
