import { Component, input, ViewChild, ViewContainerRef } from '@angular/core';
import { BlockComponentTagType } from '../../../shared';

@Component({
  selector: 'aug-block',
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss',
})
export class BlockComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  tag = input.required<BlockComponentTagType>();
}
