import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lib-component-layout-block',
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss',
})
export class BlockComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
}
