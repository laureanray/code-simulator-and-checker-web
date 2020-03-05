import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './users/users.component';
import {AdminRoutingModule} from '@app/modules/admin/admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  declarations: [AdminComponent, UsersComponent, DashboardComponent, CoursesComponent, CoursesComponent, MaintenanceComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
