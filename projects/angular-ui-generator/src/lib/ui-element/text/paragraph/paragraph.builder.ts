import { ParagraphBuilderModel } from './paragraph-builder.model';
import { ParagraphComponent } from '../../../component';

export class ParagraphBuilder {
  static build(text: string): ParagraphBuilderModel {
    return {
      kind: 'paragraph',
      component: ParagraphComponent,
      metadata: {
        text,
      },
    };
  }
}
