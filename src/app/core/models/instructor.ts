import {Course} from '@app/core/models/course';
import {User} from '@app/core/models/user';
import {Role} from '@app/core/models/role';

export class Instructor extends  User {
  course: Course[];
  roles: Role[];
}
