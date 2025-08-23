import { BlockComponentTagType } from '../../../../shared';
import { ComponentMetadataType } from '../../../type/component-metadata.type';

export interface BlockMetadataModel {
  kind: 'block';
  tag: BlockComponentTagType;
  children: ComponentMetadataType[];
}
