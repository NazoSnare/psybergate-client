import { Customer, CustomerDetails } from '../models/customer.model';

import { Address } from '../models/address.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  public getCustomers(): Observable<Customer[]> {

    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }

  public getCustomerById(id: any): Observable<Customer> {

    return this.http.get<Customer>(`http://localhost:3000/customers/${id}`);
  }

  public saveCustomer(data: Customer): Observable<Customer> {

    return this.http.post<Customer>(`http://localhost:3000/customers`, data);
  }

  public saveDetails(details: CustomerDetails ): void {
    localStorage.setItem('details', JSON.stringify(details));
  }

  public savePostalAddress( address:Address): void {
    localStorage.setItem('postalAddress', JSON.stringify(address));
  }

  public savePhysicalAddress( address:Address): void {
    localStorage.setItem('physicalAddress', JSON.stringify(address));
  }

  public saveComments(comment: string): void {
    localStorage.setItem('comments', comment);
  }

  public getFromStorage (key:string) {
    const fromStorage = localStorage.getItem(key);
    if(fromStorage) {
      return JSON.parse(fromStorage);
    } else return null;
  }

  public getDetails () {
    return this.getFromStorage('details');
  }

  public getPhysicalAddress () {
    return this.getFromStorage('physicalAddress');
  }

  public getPostalAddress () {
    return this.getFromStorage('postalAddress');
  }

  public getComments () {
    return localStorage.getItem('comments')
  }

  public clearAllStorage() {
    localStorage.clear();
  }



}
