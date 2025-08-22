import { BlockBuilderModel } from './block-builder.model';
import { BlockComponent, BlockTagType } from '../../../component';

export class BlockBuilder {
  static build(tag: BlockTagType): BlockBuilderModel {
    return {
      kind: 'block',
      component: BlockComponent,
      metadata: {
        tag,
      },
    };
  }
}
