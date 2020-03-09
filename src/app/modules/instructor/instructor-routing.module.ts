import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InstructorComponent} from './instructor/instructor.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CoursesComponent} from './courses/courses.component';
import {CoursesListComponent} from './courses/courses-list/courses-list.component';
import {CreateComponent} from './courses/create/create.component';
import {AssignmentsComponent} from './assignments/assignments.component';
import {MessagesComponent} from './messages/messages.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: '', component: InstructorComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'courses', component: CoursesComponent,
        children: [
          { path: '', redirectTo: 'courses-list' },
          { path: 'courses-list', component: CoursesListComponent },
          { path: 'create',  component: CreateComponent }
        ]
      },
      { path: 'assignments', component: AssignmentsComponent },
      { path: 'messages', component: MessagesComponent }
    ]
  }
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
