import { Component, input, ViewChild, ViewContainerRef } from '@angular/core';
import { BlockMetadataModel } from './block-metadata.model';

@Component({
  selector: 'aug-block',
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss',
})
export class BlockComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  metadata = input.required<BlockMetadataModel>();
}
