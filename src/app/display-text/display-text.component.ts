import { Component } from '@angular/core'

@Component({
  selector: 'app-display-text',
  templateUrl: './display-text.component.html',
  styleUrls: ['./display-text.component.scss']
})
export class DisplayTextComponent {
  value: string;

  updateValue(newValue) {
    this.value = newValue;
  }
}