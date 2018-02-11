import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'UserFilterPipe',
})
export class UserFilterPipe implements PipeTransform {
    transform(value: any, input: string, name: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                if (name == "firstName") {
                    if(el.firstName!=null){
                        return el.firstName.toLowerCase().indexOf(input) > -1;
                    }
                 }

            })
        }
        return value;
    }
}