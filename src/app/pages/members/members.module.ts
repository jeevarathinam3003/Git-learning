import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MembersLayoutComponent } from './members-layout/members-layout.component';
import { MembersComponent } from './components/members/members.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { EffectsModule } from '@ngrx/effects';
import { MembersEffect } from './effects/members.effect';
import { MembersService } from './members.service';
import { MembersSandbox } from './members.sandbox';
import { SelectDropDownModule } from 'ngx-select-dropdown';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

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
        component: MembersLayoutComponent,

        children: [
            {
                path: 'list',
                component: MembersComponent,
            },

            {
                path: 'edit/:id',
                component: AddMemberComponent,
            },
            {
                path: 'add',
                component: AddMemberComponent,
            },

            {
                path: '',
                redirectTo: 'list',
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
        MatNativeDateModule,
        NgbModule,
        BsDatepickerModule.forRoot(),
        EffectsModule.forFeature([MembersEffect]),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        MembersLayoutComponent,
        MembersComponent,
        AddMemberComponent,
    ],
    providers: [
        MembersService,
        MembersSandbox,
        { provide: DateAdapter, useClass: MomentDateAdapter, 
            deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }

    ],
    exports: [RouterModule],
    bootstrap: [MembersComponent]

})

export class MembersModule { }
