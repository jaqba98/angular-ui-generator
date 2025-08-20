import {
  AfterViewInit,
  Component,
  input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { UiElement, UiElementKindEnum } from '../../ui-element';

@Component({
  selector: 'aug-generator',
  template: '<ng-container #container></ng-container>',
})
export class AugViewGenerator implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  uiElements = input.required<UiElement[]>();

  ngAfterViewInit() {
    this.generate(this.uiElements(), this.container);
  }

  generate(uiElements: UiElement[], container: ViewContainerRef) {
    uiElements.forEach((uiElement) => {
      const { kind } = uiElement;

      switch (kind) {
        case UiElementKindEnum.button: {
          const { component, metadata } = uiElement;
          const newComponent = container.createComponent(component);
          newComponent.setInput('metadata', metadata);
          break;
        }
        case UiElementKindEnum.block: {
          const { component, children } = uiElement;
          const newComponent = container.createComponent(component);
          const childContainer = newComponent.instance.container;
          this.generate(children, childContainer);
          break;
        }
        case UiElementKindEnum.paragraph: {
          const { component, metadata } = uiElement;
          const newComponent = container.createComponent(component);
          newComponent.setInput('metadata', metadata);
          break;
        }
        default:
          throw new Error('Not supported kind');
      }
    });
  }
}
