import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '@environments/environment';

@Injectable({ providedIn: 'root'})
export class InstructorService {
  private httpOptions: { headers: HttpHeaders };
  constructor(private http: HttpClient) {
  }

  getInstructor(username: string) {
    return this.http
      .get(`${environment.apiUrl}/api/v1/instructor/find/${username}`);
  }
}
