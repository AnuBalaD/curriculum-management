import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SearchFilterPipe',
})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, input: any) {
        if (input) {
            // input = input.toLowerCase();

            return value.filter(function (el: any) {
                return el.name.text.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}