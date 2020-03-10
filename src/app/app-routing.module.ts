import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './modules/account/login/login.component';
import {RegisterComponent} from './modules/account/register/register.component';
import {HomeComponent} from './shared/home/home.component';
import {AuthGuard} from './core/authentication/auth.guard';
import {NotFoundComponent} from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'instructor',
    loadChildren: () => import('./modules/instructor/instructor.module').then(m => m.InstructorModule),
    canActivate: [AuthGuard],
    data: { role: 'ROLE_INSTRUCTOR'}
  },
  {
    path: 'student', loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule),
    canActivate: [AuthGuard],
    data: { role: 'ROLE_STUDENT' }
  },
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
