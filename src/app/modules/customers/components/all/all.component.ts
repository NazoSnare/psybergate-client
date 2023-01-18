import { Component } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {
   $customers: Observable<Customer[]>;
  constructor(
    private _customersService: CustomerService,
    private _router: Router
  ) {
    this.$customers = this._customersService.getCustomers();
  }

  public async addCustomerClicked(): Promise<Boolean> {

    return await this._router.navigateByUrl('/customers/new');
  }

  public async readMore(link?: string): Promise<Boolean> {
     return await this._router.navigateByUrl(`/customers/${link}`);
  }

  // ASYNC PIPE in the html has handled unsubscribing of the observables

}
