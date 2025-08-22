import { ParagraphComponent, ParagraphMetadataModel } from '../../../component';

export interface ParagraphBuilderModel {
  kind: 'paragraph';
  component: typeof ParagraphComponent;
  metadata: ParagraphMetadataModel;
}
