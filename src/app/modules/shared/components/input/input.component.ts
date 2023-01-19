import { Component, Input } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() public inputId: string  = '';
  @Input() public control = new FormControl();
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public type: string = 'text';

  public errorMessages: Record<string, string> = {
    required: 'The field is required',
    email: 'The email is invalid',
    length: 'The length is invalid',
    minlength: 'The minimum length is not'
  }

  constructor() {

  }

}
