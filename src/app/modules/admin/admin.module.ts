import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: 'users', component: UsersComponent}
    ]
  },
];

export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [AdminComponent, UsersComponent],
  imports: [
    CommonModule,
    routing
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
