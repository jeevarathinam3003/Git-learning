import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './components/dashboard.component';
// import { DashboardSandbox } from './dashboard.sandbox';
// import { DashboardService } from './dashboard..service';
// import { EffectsModule } from '@ngrx/effects';
// import { DashboardEffect } from './effects/dashboard.effect';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { MatMenuModule} from '@angular/material/menu';
// import { NgcCookieConsentConfig, NgcCookieConsentService, WindowService } from 'ngx-cookieconsent';

export const routes = [
    {
        path: '',
        component: DashboardComponent,
        data: {
            title: 'Dashboard',
            urls: [{ title: 'Home' }, { title: 'Dashboard' }]
        },

        

        // {
        //     path: 'meeting',
        //     loadChildren: () => import('./pages/meeting/meeting.module').then(m => m.MeetingModule)
        //   },
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
    exports: [
        DashboardComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        DashboardComponent,
    ],
    providers: [
        // DashboardSandbox,
        // DashboardService,
        // NgcCookieConsentService,
        // WindowService,
        // NgcCookieConsentConfig
    ],
    
})
export class DashboardModule { }
