import { ActivatedRoute, Router } from '@angular/router';

import { Component } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent {
  private _currentId: string | null = '';
  public $customer: Observable<Customer>;

 constructor(
  private _customersService: CustomerService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
 ) {
  this._currentId = this._activatedRoute.snapshot.paramMap.get('id');
  this.$customer = this._customersService.getCustomerById(this._currentId);
 }

}
