import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Student} from '../models';

@Injectable({ providedIn: 'root'})
export class StudentService {
  private httpOptions: { headers: HttpHeaders };
  constructor(private http: HttpClient) {
  }

  getStudent(username: string) {
    return this.http
      .get(`${environment.apiUrl}/api/v1/students/find/${username}`);
  }

  registerStudent(student: Student) {
    return this.http.post(`${environment.apiUrl}/api/v1/students/register/`, student);
  }
}
