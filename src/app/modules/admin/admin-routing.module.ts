import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import {UsersComponent} from '@app/modules/admin/components/users/users.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: 'users', component: UsersComponent}
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
