import { BlockComponent, BlockMetadataModel } from '../../../component';
import { AugUiElement } from '../../type/aug-ui-element';

export interface BlockBuilderModel {
  kind: 'block';
  component: typeof BlockComponent;
  metadata: BlockMetadataModel;
  children: AugUiElement[];
}
