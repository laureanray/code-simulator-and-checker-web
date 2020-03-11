import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StudentComponent} from './student/student.component';
import {CoursesComponent} from './courses/courses.component';
import {AssignmentsComponent} from './assignments/assignments.component';
import {MessagesComponent} from './messages/messages.component';
import {ProfileComponent} from './profile/profile.component';
import {PlaygroundComponent} from './playground/playground.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard'},
  { path: '', component: StudentComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'courses', component: CoursesComponent},
      { path: 'assignments', component: AssignmentsComponent},
      { path: 'messages', component: MessagesComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'playground', component: PlaygroundComponent}
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
