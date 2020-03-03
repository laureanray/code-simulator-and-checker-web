import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Student } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Student>;
  public currentUser: Observable<Student>;
  private httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Student>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Student {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa('WEB_CLIENT:SECRET')
      })
    };

    return this.http.post<any>(`${environment.apiUrl}/oauth/token`, { username, password }, this.httpOptions)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        console.log(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
