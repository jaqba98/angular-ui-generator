import {
  HTMLGenericElementType,
  HTMLSemanticElementType,
} from '../../../shared';

export interface BlockMetadataModel {
  tag: HTMLGenericElementType | HTMLSemanticElementType;
}
