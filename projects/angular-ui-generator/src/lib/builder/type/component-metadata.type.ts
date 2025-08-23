import { ButtonMetadataModel } from '../component/control/basic/button/button-metadata.model';
import { BlockMetadataModel } from '../component/layout/block/block-metadata.model';
import { ParagraphMetadataModel } from '../component/text/paragraph/paragraph-metadata.model';

export type ComponentMetadataType =
  | ButtonMetadataModel
  | BlockMetadataModel
  | ParagraphMetadataModel;
