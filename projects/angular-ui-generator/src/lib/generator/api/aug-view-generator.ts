// todo: I am here
import {
  AfterViewInit,
  Component,
  inject,
  ViewContainerRef,
} from '@angular/core';
import { AugComponentMetadataType } from '../type/aug-component-metadata.type';

@Component({
  selector: 'aug-view-generator',
  template: '',
})
export abstract class AugViewGenerator implements AfterViewInit {
  private readonly vcr = inject(ViewContainerRef);

  abstract generate(): AugComponentMetadataType[];

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngAfterViewInit() {
  //   this.generate(this.getUiElements(), this.viewContainerRef);
  // }
  //
  // abstract getUiElements(): AugComponentMetadataType[];
  //
  // private generate(
  //   augUiElements: AugComponentMetadataType[],
  //   container: ViewContainerRef,
  // ) {
  //   augUiElements.forEach((augUiElement) => {
  //     const { kind } = augUiElement;
  //     switch (kind) {
  //       case 'button': {
  //         // const { component, metadata } = augUiElement;
  //         // const newComponent = container.createComponent(component);
  //         // newComponent.setInput('metadata', metadata);
  //         break;
  //       }
  //       case 'block': {
  //         const { component, metadata, children } = augUiElement;
  //         const newComponent = container.createComponent(component);
  //         newComponent.setInput('metadata', metadata);
  //         const childContainer = newComponent.instance.container;
  //         this.generate(children, childContainer);
  //         break;
  //       }
  //       case 'paragraph': {
  //         const { component, metadata } = augUiElement;
  //         const newComponent = container.createComponent(component);
  //         newComponent.setInput('metadata', metadata);
  //         break;
  //       }
  //       default:
  //         throw new Error('Not supported kind');
  //     }
  //
  //     console.log(augUiElement, container);
  //   });
  // }
}
