import { Component, Input } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() inputId: string  = '';
  @Input() control = new FormControl();
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  constructor() {

  }

}
