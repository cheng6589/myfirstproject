import { Pipe, PipeTransform } from '@angular/core';
import {User} from "./user";
@Pipe({
  name: 'filterPipe',
  pure: false,
})
export class FilterPipePipe implements PipeTransform {

  transform(users: Array<User>, args?: any): any {
   let result = users.filter((user:User, index:number, arr:User[]) => {
      //each member in user
      //want only young user
      return !user.isOld();
    });
      return result;

  }

}
