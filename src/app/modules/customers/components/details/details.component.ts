import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  public formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    cellNumber: new FormControl('', [Validators.required]),
  });
  constructor(
    private _router: Router
  ) {

  }

  public async next(): Promise<Boolean> {
    return this._router.navigateByUrl('/customers/new/address');
  }


}
