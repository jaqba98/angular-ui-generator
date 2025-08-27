import {Injectable, ViewContainerRef} from '@angular/core';
import { BlockMetadataModel } from './block-metadata.model';
import { BlockComponent } from '../../../../component';

@Injectable({ providedIn: 'root' })
export class BlockBuilder {
  build(container: ViewContainerRef, metadata: BlockMetadataModel) {
    const { tag, children } = metadata;
    const component = container.createComponent(BlockComponent);
    component.setInput('tag', tag);
    return { component, children };
  }
}
