import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Address } from '../../models/address.model';
import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
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
    private _router: Router,
    private _customerService: CustomerService
  ) {

  }

  ngOnInit(): void {
    const tempPostal = this._customerService.getPostalAddress();
    const tempPhysical = this._customerService.getPhysicalAddress();
    if(tempPostal) this.postalAddressFormGroup.setValue(tempPostal);
    if(tempPhysical) this.physicalAddressFormGroup.setValue(tempPhysical);

 }

  public async next(): Promise<Boolean> {
    if(this.physicalAddressFormGroup.invalid && this.postalAddressFormGroup.invalid) return false;
    const physicalAddress = this.physicalAddressFormGroup.value as Address;
    const postalAddress = this.postalAddressFormGroup.value as Address;
    this._customerService.savePhysicalAddress(physicalAddress);
    this._customerService.savePostalAddress(postalAddress);
    return this._router.navigateByUrl('/customers/new/comments');
  }
  public async back(): Promise<Boolean> {
    return this._router.navigateByUrl('/customers/new/details');
  }
}
