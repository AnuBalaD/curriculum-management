import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: any, name: string) {
        if (input) {
            input = input.toLowerCase();
           
            return value.filter(function (el: any) {
                if (name == "countryName") {
                     return el.countryName.toLowerCase().indexOf(input) > -1;
                }
                else if(name == "buName"){
                    
                     return el.buName.toLowerCase().indexOf(input) > -1;
                }
                 else if(name == "designation"){
                     
                     return el.designation.toLowerCase().indexOf(input) > -1;
                }
                else if(name == "tempName"){
                     return el.tempName.toLowerCase().indexOf(input) > -1;
                }
                else if(name == "accName"){
                     return el.accName.toLowerCase().indexOf(input) > -1;
                }
                else if(name == "taskName"){
                     return el.taskName.toLowerCase().indexOf(input) > -1;
                }
                 else if(name == "name"){
                     if(el.name!==null){
                        return el.name.toLowerCase().indexOf(input) > -1;
                     }
                }  
                else if(name == "description"||name=="heading"||name=="month"||name=="dayno"||name=="year"||name=="dateString"){
                        return el.description.toLowerCase().indexOf(input)>-1||el.heading.toLowerCase().indexOf(input)>-1||el.month.toLowerCase().indexOf(input)>-1||el.dayno.indexOf(input)>-1||el.year.indexOf(input)>-1||el.dateString.toLowerCase().indexOf(input)>-1;
                        // return el.description.toLowerCase().indexOf(input)>-1||el.heading.toLowerCase().indexOf(input)>-1||el.month.indexOf(input)>-1;
                }
                else  if (name == "text") {
                    return el.name.text.toLowerCase().indexOf(input) > -1;
               }
         })
        }
        return value;
    }
}