import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './instructor/instructor.component';
import {RouterModule, Routes} from '@angular/router';
import {InstructorRoutingModule} from '@app/modules/instructor/instructor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstructorInfoCardComponent } from './instructor/instructor-info-card/instructor-info-card.component';
import {SharedModule} from '@app/shared/shared.module';


@NgModule({
  declarations: [InstructorComponent, DashboardComponent, InstructorInfoCardComponent],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    SharedModule
  ]
})

export class InstructorModule { }
