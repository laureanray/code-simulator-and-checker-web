import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '@environments/environment';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class StudentService {
  private httpOptions: { headers: HttpHeaders };
  constructor(private http: HttpClient) {
  }

  getStudent(username: string) {
    console.log('getstudent');
    return this.http
      .get(`${environment.apiUrl}/api/v1/students/find/${username}`)
      .subscribe(data => console.log(data));
  }
}
