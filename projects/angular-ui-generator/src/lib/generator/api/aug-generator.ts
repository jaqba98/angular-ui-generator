import {
  AfterViewInit,
  Component,
  inject,
  ViewContainerRef,
} from '@angular/core';
import { AugUiElement } from '../../ui-element';

@Component({
  selector: 'aug-generator',
  template: '',
})
export abstract class AugGenerator implements AfterViewInit {
  private readonly viewContainerRef = inject(ViewContainerRef);

  ngAfterViewInit() {
    this.generate(this.getUiElements(), this.viewContainerRef);
  }

  abstract getUiElements(): AugUiElement[];

  private generate(augUiElements: AugUiElement[], container: ViewContainerRef) {
    augUiElements.forEach((augUiElement) => {
      const { kind } = augUiElement;
      switch (kind) {
        case 'button': {
          const { component, metadata } = augUiElement;
          const newComponent = container.createComponent(component);
          newComponent.setInput('metadata', metadata);
          break;
        }
        case 'block': {
          const { component, metadata, children } = augUiElement;
          const newComponent = container.createComponent(component);
          newComponent.setInput('metadata', metadata);
          const childContainer = newComponent.instance.container;
          this.generate(children, childContainer);
          break;
        }
        case 'paragraph': {
          const { component, metadata } = augUiElement;
          const newComponent = container.createComponent(component);
          newComponent.setInput('metadata', metadata);
          break;
        }
        default:
          throw new Error('Not supported kind');
      }

      console.log(augUiElement, container);
    });
  }
}
