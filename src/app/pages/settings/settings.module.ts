import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SettingsComponent } from './components/settings.component';

export const routes = [
    {
        path: '',
        component: SettingsComponent,
        data: {
            title: 'Settings',
            urls: [{ title: 'Home' }, { title: 'Settings' }]
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
        SettingsComponent,
    ],
    providers: [
        // DashboardSandbox,
        // DashboardService,
        // NgcCookieConsentService,
        // WindowService,
        // NgcCookieConsentConfig
    ],
    
})
export class SettingsModule { }
