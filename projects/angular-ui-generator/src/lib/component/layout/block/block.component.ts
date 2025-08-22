import { Component, input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'aug-block',
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss',
})
export class BlockComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tag = input.required<any>();
}
