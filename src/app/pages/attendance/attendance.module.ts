import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AttendanceComponent } from './components/attendance.component';

export const routes = [
    {
        path: '',
        component: AttendanceComponent,
        data: {
            title: 'Attendance',
            urls: [{ title: 'Home' }, { title: 'Attendance' }]
        }
    }


    // {
    //         path: 'login',
    //         component: LoginComponent,
    //         pathMatch: 'full',
    //         data: {
    //             title: 'Login',
    //         }
    //     },
    //     {
    //         path: '',
    //         redirectTo: 'login',
    //         pathMatch: 'full'
    //     }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        // FontAwesomeModule,
        // MatMenuModule,
        // EffectsModule.forFeature([DashboardEffect]),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AttendanceComponent,
    ],
    providers: [
        // DashboardSandbox,
        // DashboardService,
        // NgcCookieConsentService,
        // WindowService,
        // NgcCookieConsentConfig
    ],
    
})
export class AttendanceModule { }
