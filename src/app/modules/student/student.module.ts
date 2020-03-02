import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {StudentRoutingModule} from '@app/modules/student/student-routing.module';
import { StudentInfoCardComponent } from './components/student-info-card/student-info-card.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PostComponent } from './components/dashboard/components/post/post.component';
import { PostsComponent } from './components/dashboard/components/posts/posts.component';
import { SearchbarComponent } from './components/courses/components/searchbar/searchbar.component';
import { EnrolledCoursesComponent } from './components/courses/components/enrolled-courses/enrolled-courses.component';



@NgModule({
  declarations: [StudentComponent, DashboardComponent, StudentInfoCardComponent, SideNavigationComponent, CoursesComponent, AssignmentsComponent, MessagesComponent, PostComponent, PostsComponent, SearchbarComponent, EnrolledCoursesComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
