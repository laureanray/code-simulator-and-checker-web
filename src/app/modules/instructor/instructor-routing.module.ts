import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '@app/modules/account/components/login/login.component';
import {RegisterComponent} from '@app/modules/account/components/register/register.component';
import {NotFoundComponent} from '@app/shared/components/not-found/not-found.component';
import {InstructorComponent} from '@app/modules/instructor/components/instructor/instructor.component';

const routes: Routes = [
  { path: '', component: InstructorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})

export class InstructorRoutingModule { }
