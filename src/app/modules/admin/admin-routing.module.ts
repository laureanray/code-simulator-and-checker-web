import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {UsersComponent} from '@app/modules/admin/users/users.component';
import {OverviewComponent} from '@app/modules/admin/overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview' },
  { path: '', component: AdminComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
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
