import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CommonEffect } from './effects/common.effect';
import { SharedModule } from '../shared/shared.module';
import { CommonSandbox } from './common.sandbox';
import { CommonService } from './common.service';
// import { DashboardComponent } from '../pages/dashboard/components/dashboard.component';


export const CONTAINERS = {
    LayoutComponent,
};
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        // DashboardComponent
        EffectsModule.forFeature([CommonEffect])
    ],
    providers: [
        CommonSandbox,
        CommonService
    ],
    declarations: [
        LayoutComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class CommonLayoutModule {
}
