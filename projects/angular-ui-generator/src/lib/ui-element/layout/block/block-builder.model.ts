import { BlockComponent, BlockMetadataModel } from '../../../component';

export interface BlockBuilderModel {
  kind: 'block';
  component: typeof BlockComponent;
  metadata: BlockMetadataModel;
}
