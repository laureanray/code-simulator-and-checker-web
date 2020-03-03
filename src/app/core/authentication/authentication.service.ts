import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Student } from '../models';
import {StudentService} from '@app/core/services/student.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Student>;
  public currentUser: Observable<Student>;
  private httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient, private studentService: StudentService) {
    this.currentUserSubject = new BehaviorSubject<Student>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Student {
    return this.currentUserSubject.value;
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
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        const student = new Student();
        student.token = response.access_token;
        // localStorage.setItem('currentUser', JSON.stringify(student));
        this.currentUserSubject.next(student);
        console.log(student);
        const res = this.studentService.getStudent(username);
        console.log(res);
        return response;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
