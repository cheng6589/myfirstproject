import { Pipe, PipeTransform } from '@angular/core';
import {User} from "./user";

@Pipe({
  name: 'sumPipe'
})
export class SumPipePipe implements PipeTransform {

  transform(users: Array<User>, args?: any): any {
    //find sum of users
    let sum = 0;
    users.forEach((value:User, index:number, arr:User[]) =>{
      //insde the loop of users
      sum += value.age;
    })
    return sum;
  }

}
