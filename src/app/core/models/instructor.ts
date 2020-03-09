import {User} from './user';
import {Course} from './course';
import {Role} from './role';

export class Instructor extends  User {
  course: Course[];
  roles: Role[];
}
