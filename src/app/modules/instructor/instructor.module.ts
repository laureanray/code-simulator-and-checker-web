import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './instructor/instructor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstructorInfoCardComponent } from './instructor/instructor-info-card/instructor-info-card.component';
import { CoursesComponent } from './courses/courses.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MessagesComponent } from './messages/messages.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CreateComponent } from './courses/create/create.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses/courses-list-item/courses-list-item.component';
import {SharedModule} from '../../shared/shared.module';
import {InstructorRoutingModule} from './instructor-routing.module';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    InstructorComponent,
    DashboardComponent,
    InstructorInfoCardComponent,
    CoursesComponent,
    AssignmentsComponent,
    MessagesComponent,
    CreateComponent,
    CoursesListComponent,
    CoursesListItemComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})

export class InstructorModule { }
