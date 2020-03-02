import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/account/components/login/login.component';
import {RegisterComponent} from './modules/account/components/register/register.component';
import {NotFoundComponent} from '@app/shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'admin', loadChildren: () => import('@app/modules/admin/admin.module').then(m => m.AdminModule)},
  { path: 'instructor', loadChildren: () => import('@app/modules/instructor/instructor.module')
      .then(m => m.InstructorModule)},
  { path: '**', component: NotFoundComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
