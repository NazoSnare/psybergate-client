import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {

  public physicalAddressFormGroup = new FormGroup({
    firstline: new FormControl('', [Validators.required]),
    secondline: new FormControl('', [Validators.required]),
    thirdline: new FormControl('', [Validators.required]),
    fourthline: new FormControl('', [Validators.required]),
  });

  public postalAddressFormGroup = new FormGroup({
    firstline: new FormControl('', [Validators.required]),
    secondline: new FormControl('', [Validators.required]),
    thirdline: new FormControl('', [Validators.required]),
    fourthline: new FormControl('', [Validators.required]),
  });

  constructor(
    private _router: Router
  ) {

  }

  public async next(): Promise<Boolean> {
    return this._router.navigateByUrl('/customers/new/comments');
  }
  public async back(): Promise<Boolean> {
    return this._router.navigateByUrl('/customers/new/details');
  }
}
