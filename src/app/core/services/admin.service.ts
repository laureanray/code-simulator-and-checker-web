import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root'})
export class AdminService {
  private httpOptions: { headers: HttpHeaders };
  constructor(private http: HttpClient) {
  }

  getAdmin(username: string) {
    return this.http
      .get(`${environment.apiUrl}/api/v1/admin/find/${username}`);
  }
}
