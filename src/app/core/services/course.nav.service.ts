import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({ providedIn: 'root'})
export class CourseNavService {
  private currentRoute = new Subject<string>();

  currentRoute$ = this.currentRoute.asObservable();

  updateRoute(route: string) {
    this.currentRoute.next(route);
  }

  get currentRouteS() {
    return this.currentRoute;
  }

}
