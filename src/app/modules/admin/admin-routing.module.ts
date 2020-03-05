import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {UsersComponent} from '@app/modules/admin/users/users.component';
import {DashboardComponent} from '@app/modules/admin/dashboard/dashboard.component';
import {CoursesComponent} from '@app/modules/admin/courses/courses.component';
import {MaintenanceComponent} from '@app/modules/admin/maintenance/maintenance.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: '', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'course', component: CoursesComponent},
      { path: 'maintenance', component: MaintenanceComponent}
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
