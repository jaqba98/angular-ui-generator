import { Component, input } from '@angular/core';

@Component({
  selector: 'aug-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  text = input.required<string>();
}
