import { StatePeople } from '../enums/state-people';
import { PeopleI } from '../interfaces/people-i';

export class People implements PeopleI {
  name!: string;
  firstName!: string;
  lastName!: string;
  address!: string;
  city!: string;
  id!: number;
  constructor(obj?: Partial<People>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
