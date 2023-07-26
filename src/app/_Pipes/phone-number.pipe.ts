import { Pipe, PipeTransform } from '@angular/core';
import {findIndex} from "rxjs";

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    let phoneNumber = "";
    for (let i = 0; i < value.length; i++) {
      if(i % 2 != 0 && i !== value.length - 1){
        phoneNumber += value[i] + "."
      }else{
        phoneNumber += value[i]
      }
    }
    return phoneNumber;
  }

}
