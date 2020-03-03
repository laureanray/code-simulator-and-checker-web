import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/account/login/login.component';
import {RegisterComponent} from './modules/account/register/register.component';
import {NotFoundComponent} from '@app/shared/not-found/not-found.component';
import {HomeComponent} from '@app/shared/home/home.component';
import {AuthGuard} from '@app/core/authentication/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'admin', loadChildren: () => import('@app/modules/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard]},
  { path: 'instructor', loadChildren: () => import('@app/modules/instructor/instructor.module')
      .then(m => m.InstructorModule)},
  { path: 'student', loadChildren: () => import('@app/modules/student/student.module')
      .then(m => m.StudentModule)},
  { path: '**', component: NotFoundComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
