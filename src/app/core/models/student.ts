import {User} from '@app/core/models/user';
import {Course} from '@app/core/models/course';
import {Role} from '@app/core/models/role';

export class Student extends User {
  courses: Course[];
}
