import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student/student.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CoursesComponent} from './courses/courses.component';
import {AssignmentsComponent} from './assignments/assignments.component';
import {MessagesComponent} from './messages/messages.component';
import {PostComponent} from './dashboard/post/post.component';
import {PostsComponent} from './dashboard/posts/posts.component';
import {SearchbarComponent} from './courses/searchbar/searchbar.component';
import {EnrolledCoursesComponent} from './courses/enrolled-courses/enrolled-courses.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import {StudentInfoCardComponent} from './student/student-info-card/student-info-card.component';
import {StudentRoutingModule} from './student-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import { PlaygroundComponent } from './playground/playground.component';

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
    ProfileComponent,
    RegistrationSuccessComponent,
    PlaygroundComponent,
  ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        NgbModule,
        MatCardModule
    ]
})
export class StudentModule {
}
