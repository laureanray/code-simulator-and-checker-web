import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {CoursesComponent} from './courses/courses.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: '', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'courses', component: CoursesComponent},
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
