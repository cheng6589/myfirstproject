import { Pipe, PipeTransform } from '@angular/core';

//my-pipe
@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let unit:string = "year";
    if(typeof args == "string" && args.length > 0)
      unit = args;
    return value + " " + unit;

/*
    if(value == 1)
      return value + "year old";
    return value + " years old";
    */
  }

}
