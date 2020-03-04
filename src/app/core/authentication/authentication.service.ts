import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { environment } from '@environments/environment';
import { Student } from '../models';
import {StudentService} from '@app/core/services/student.service';
import {User} from '@app/core/models/user';
import {Instructor} from '@app/core/models/instructor';
import {InstructorService} from '@app/core/services/instructor.service';
import {Admin} from '@app/core/models/admin';
import {AdminService} from '@app/core/services/admin.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private httpOptions: { headers: HttpHeaders };
  public isLoggedIn: boolean;

  constructor(
    private http: HttpClient,
    private studentService: StudentService,
    private instructorService: InstructorService,
    private adminService: AdminService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentUserSubject.subscribe(val => {
      this.isLoggedIn = !!val;
    });
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  login(username: string, password: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa('WEB_CLIENT:SECRET'),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');


    return this.http.post<any>(`${environment.apiUrl}/oauth/token`, body.toString(), this.httpOptions)
      .pipe(map(response => {
        // Check the role first
        const token = response.access_token;
        const tokenInfo = this.getDecodedAccessToken(token);

        switch (tokenInfo.authorities[0]) {
          case 'ROLE_INSTRUCTOR':
            let instructor = new Instructor();
            // Set token so we can access the endpoints
            instructor.token = token;
            instructor.roleName = tokenInfo.authorities[0];
            // Make this the current user
            this.currentUserSubject.next(instructor);
            this.instructorService.getInstructor(username)
              .subscribe((data: Instructor) => {
                instructor = Object.assign({}, data);
                localStorage.setItem('currentUser', JSON.stringify(instructor));
              });
            break;
          case 'ROLE_STUDENT':
            let student = new Student();
            // Set token so we can access the endpoints
            student.token = token;
            student.roleName = tokenInfo.authorities[0];
            // Make this the current user
            this.currentUserSubject.next(student);
            this.studentService.getStudent(username)
              .subscribe((data: Student) => {
                student = Object.assign({}, data);
                localStorage.setItem('currentUser', JSON.stringify(student));
              });
            break;
          case 'ROLE_ADMIN':
            let admin = new Admin();
            // Set token so we can access the endpoints
            admin.token = token;
            admin.roleName = tokenInfo.authorities[0];
            // Make this the current user
            this.currentUserSubject.next(admin);
            this.adminService.getAdmin(username)
              .subscribe((data: Admin) => {
                admin = Object.assign({}, data);
                localStorage.setItem('currentUser', JSON.stringify(admin));
              });
            break;
          default: return;
        }

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        // localStorage.setItem('currentUser', JSON.stringify(student));
        // const student = new Student();
        // student.token = response.access_token;
        // this.currentUserSubject.next(student);
        // this.studentService.getStudent(username)
        //   .subscribe((data: Student) => {
        //       student.id = data.id;
        //       student.firstName = data.firstName;
        //       student.lastName = data.lastName;
        //       student.email = data.email;
        //       student.username = data.username;
        //       student.roles = data.roles;
        //   });
        // console.log(student);
        console.log(response);
        console.log(tokenInfo);
        return response;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
