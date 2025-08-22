import { BlockBuilderModel } from './block-builder.model';
import { BlockComponent, BlockTagType } from '../../../component';
import { AugUiElement } from '../../type/aug-ui-element';

export class AugBlockBuilder {
  static build(tag: BlockTagType, children: AugUiElement[]): BlockBuilderModel {
    return {
      kind: 'block',
      component: BlockComponent,
      metadata: {
        tag,
      },
      children,
    };
  }
}
