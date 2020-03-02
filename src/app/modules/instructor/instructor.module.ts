import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './instructor/instructor.component';
import {RouterModule, Routes} from '@angular/router';
import {InstructorRoutingModule} from '@app/modules/instructor/instructor-routing.module';


@NgModule({
  declarations: [InstructorComponent],
  imports: [
    CommonModule,
    InstructorRoutingModule
  ]
})

export class InstructorModule { }
