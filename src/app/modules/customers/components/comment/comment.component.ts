import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  public formGroup = new FormGroup({
    comments: new FormControl('', []),
  });

  constructor(
    private _router: Router,
    private _customerService: CustomerService
  ) {

  }

  public ngOnInit(): void {
    const tempComments = this._customerService.getComments();
    if(tempComments) this.formGroup.setValue({comments: tempComments});
  }


  public async submit(): Promise<void | Boolean> {
    if(this.formGroup.invalid ) return false;
    const comment = this.formGroup.value.comments ?? '';
    this._customerService.saveComments(comment);

    const details = this._customerService.getDetails();
    const physicalAddress = this._customerService.getPhysicalAddress();
    const postalAddress = this._customerService.getPostalAddress();

    this._customerService.saveCustomer({
      ...details,
      physicalAddress,
      postalAddress,
      comments: comment
    }).subscribe(async() => {
      this._customerService.clearAllStorage();
      await this._router.navigateByUrl('/customers');
    });

;

  }
  public async back(): Promise<Boolean> {
    return this._router.navigateByUrl('/customers/new/address');
  }
}
