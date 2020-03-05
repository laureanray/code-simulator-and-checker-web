import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student/student.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StudentRoutingModule} from '@app/modules/student/student-routing.module';
import {CoursesComponent} from './courses/courses.component';
import {AssignmentsComponent} from './assignments/assignments.component';
import {MessagesComponent} from './messages/messages.component';
import {PostComponent} from './dashboard/post/post.component';
import {PostsComponent} from './dashboard/posts/posts.component';
import {SearchbarComponent} from './courses/searchbar/searchbar.component';
import {EnrolledCoursesComponent} from './courses/enrolled-courses/enrolled-courses.component';
import {SharedModule} from '@app/shared/shared.module';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StudentInfoCardComponent} from '@app/modules/student/student/student-info-card/student-info-card.component';
import { SidenavComponent } from './student/sidenav/sidenav.component';

@NgModule({
  declarations: [
    StudentComponent,
    DashboardComponent,
    CoursesComponent,
    AssignmentsComponent,
    MessagesComponent,
    PostComponent,
    PostsComponent,
    SearchbarComponent,
    EnrolledCoursesComponent,
    MessagesListComponent,
    StudentInfoCardComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule
]
})
export class StudentModule {
}
