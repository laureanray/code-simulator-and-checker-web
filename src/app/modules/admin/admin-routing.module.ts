import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {UsersComponent} from '@app/modules/admin/users/users.component';
import {DashboardComponent} from '@app/modules/admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: '', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent }
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
