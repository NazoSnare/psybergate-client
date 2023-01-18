import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  public formGroup = new FormGroup({
    additionalComments: new FormControl('', [Validators.required]),
  });

  constructor(
    private _router: Router
  ) {

  }


  public async submit(): Promise<Boolean> {
    return this._router.navigateByUrl('/customers/new/details');
  }
  public async back(): Promise<Boolean> {
    return this._router.navigateByUrl('/customers/new/address');
  }
}
