import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
        return value.toLocaleString(['en-US', [{minimumFractionDigits: 2, maximumFractionDigits: 2}]]);
  }

}