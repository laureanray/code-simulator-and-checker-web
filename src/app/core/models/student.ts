import {User} from './user';
import {Course} from './course';

export class Student extends User {
  courses: Course[];
}
