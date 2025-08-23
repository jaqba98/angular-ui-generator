import { ViewContainerRef } from '@angular/core';
import { ButtonMetadataModel } from './button-metadata.model';
import { ButtonComponent } from '../../../../../component';

export class ButtonBuilder {
  build(container: ViewContainerRef, metadata: ButtonMetadataModel) {
    const { label } = metadata;
    const component = container.createComponent(ButtonComponent);
    component.setInput('label', label);
  }
}
