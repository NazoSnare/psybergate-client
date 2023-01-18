import { BehaviorSubject, Observable } from 'rxjs';

import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customersList: Customer [] = [
    {
      name: 'John',
      surname: 'Doe',
      cellNumber: '012 345 6789',
      actionLink: '1'
    },
    {
      name: 'Jane',
      surname: 'Doe',
      cellNumber: '012 345 6780',
      actionLink: '2'
    },
    {
      name: 'Joe',
      surname: 'Smit',
      cellNumber: '012 345 6781',
      actionLink: '3'
    },
    {
      name: 'Jane',
      surname: 'Smit',
      cellNumber: '012 345 6788',
      actionLink: '4'
    },
  ];

  customers = new BehaviorSubject<Customer[]>(this.customersList);

  constructor(
    private http: HttpClient
  ) { }

  public getCustomers(): Observable<Customer[]> {

    return this.customers.asObservable();
  }


}
