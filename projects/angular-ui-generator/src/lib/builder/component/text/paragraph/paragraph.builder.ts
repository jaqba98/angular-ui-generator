import { ViewContainerRef } from '@angular/core';
import { ParagraphMetadataModel } from './paragraph-metadata.model';
import { ParagraphComponent } from '../../../../component';

export class ParagraphBuilder {
  build(container: ViewContainerRef, metadata: ParagraphMetadataModel) {
    const { text } = metadata;
    const component = container.createComponent(ParagraphComponent);
    component.setInput('text', text);
  }
}
