import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONTAINERS } from './common/common-layout.module';


const routes: Routes = [

  {
    path: '',
    component: CONTAINERS.LayoutComponent,
    children: [
      {
        path: 'dashboard',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'meeting',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./pages/meeting/meeting.module').then(m => m.MeetingModule)
      },
      {
        path: 'members',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./pages/members/members.module').then(m => m.MembersModule)
      },
      {
        path: 'groups',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./pages/groups/groups.module').then(m => m.GroupsModule)
      },
      {
        path: 'attendance',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./pages/attendance/attendance.module').then(m => m.AttendanceModule)
      },
      {
        path: 'claim',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./pages/claim/claim.module').then(m => m.ClaimModule)
      },
      {
        path: 'settings',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },


  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // {
  //   path: 'meeting',
  //   loadChildren: () => import('./pages/meeting/meeting.module').then(m => m.MeetingModule)
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
