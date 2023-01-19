import { Pipe, PipeTransform } from '@angular/core';

import { Address } from '../../customers/models/address.model';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: Address, ...args: unknown[]): string {
    return Object.values(value).reduce((prev,current) => `${prev}, ${current}`);
  }

}
