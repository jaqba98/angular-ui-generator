import {
  HTMLGenericElementType,
  HTMLSemanticElementType,
} from '../../../shared';

export type BlockTagType = HTMLGenericElementType | HTMLSemanticElementType;

export interface BlockMetadataModel {
  tag: BlockTagType;
}
