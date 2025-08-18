import { Component, input } from '@angular/core';
import { ParagraphMetadataModel } from './paragraph-metadata.model';

@Component({
  selector: 'aug-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  metadata = input.required<ParagraphMetadataModel>();
}
