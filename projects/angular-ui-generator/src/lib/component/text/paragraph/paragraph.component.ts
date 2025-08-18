import { Component, input } from '@angular/core';
import { ParagraphMetadataModel } from './paragraph-metadata.model';

@Component({
  selector: 'lib-component-text-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  metadata = input.required<ParagraphMetadataModel>();
}
