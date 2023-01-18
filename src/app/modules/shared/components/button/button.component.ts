import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input('title') public title = 'no title';
  @Output('clicked') buttonClicked = new EventEmitter<void>();
  constructor() {

  }

  clicked() {
    this.buttonClicked.emit();
  }

}
