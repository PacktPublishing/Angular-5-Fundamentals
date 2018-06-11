import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'formattedTime'
})
export class FormattedTimePipe implements PipeTransform {
    transform(totalMinutes : number) {
        let minutes : number = totalMinutes % 60;
        let hours : numbers = Math.floor(totalMinutes / 60);
        return `${hours} h: ${minutes} m`;
    }
}

