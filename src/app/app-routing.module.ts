import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/account/components/login/login.component';
import {RegisterComponent} from './modules/account/components/register/register.component';

// ,
// { path: 'admin/**', loadChildren: () => import('@app/modules/admin/admin.module')
//   .then(m => m.AdminModule)}
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'admin', loadChildren: () => import('@app/modules/admin/admin.module').then(m => m.AdminModule)}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
