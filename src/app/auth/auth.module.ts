import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthSandbox } from './auth.sandbox';
import { AuthService } from './auth.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './effects/auth.effect';

import { CookieService } from 'ngx-cookie-service';


const routes: any  = [
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
        data: {
            title: 'Login',
        }
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        EffectsModule.forFeature([AuthEffect]),
    ],
    declarations: [
        LoginComponent

    ],
    providers: [
        CookieService,
        AuthSandbox,
        AuthService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class AuthModule {
}


