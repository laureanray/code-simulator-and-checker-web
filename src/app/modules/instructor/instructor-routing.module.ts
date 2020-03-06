import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InstructorComponent} from '@app/modules/instructor/instructor/instructor.component';
import {CoursesComponent} from '@app/modules/instructor/courses/courses.component';
import {DashboardComponent} from '@app/modules/instructor/dashboard/dashboard.component';
import {AssignmentsComponent} from '@app/modules/instructor/assignments/assignments.component';
import {MessagesComponent} from '@app/modules/instructor/messages/messages.component';
import {CreateComponent} from '@app/modules/instructor/courses/create/create.component';
import {CoursesListComponent} from '@app/modules/instructor/courses/courses-list/courses-list.component';

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
