import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InstructorComponent} from '@app/modules/instructor/instructor/instructor.component';

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
