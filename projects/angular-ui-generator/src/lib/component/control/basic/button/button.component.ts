import { Component, input } from '@angular/core';

@Component({
  selector: 'aug-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  label = input.required<string>();
}
