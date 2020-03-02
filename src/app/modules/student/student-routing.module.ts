import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from '@app/modules/student/student/student.component';
import {DashboardComponent} from '@app/modules/student/dashboard/dashboard.component';
import {CoursesComponent} from '@app/modules/student/courses/courses.component';
import {AssignmentsComponent} from '@app/modules/student/assignments/assignments.component';
import {MessagesComponent} from '@app/modules/student/messages/messages.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard'},
  { path: '', component: StudentComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'courses', component: CoursesComponent},
      { path: 'assignments', component: AssignmentsComponent},
      { path: 'messages', component: MessagesComponent}
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})


export class StudentRoutingModule { }
