import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomerDetails } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    cellNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  constructor(
    private _router: Router,
    private _customerService: CustomerService
  ) {

  }
  ngOnInit(): void {
     const temp = this._customerService.getDetails();
     if(temp) {
      this.formGroup.setValue(temp);
     }
  }


  public async next(): Promise<Boolean> {
    if(this.formGroup.invalid) {
      return false;
    }
    const details = this.formGroup.value as CustomerDetails;
    this._customerService.saveDetails(details);
    return this._router.navigateByUrl('/customers/new/address');
  }


}
