import { ButtonBuilderModel } from './button-builder.model';
import { ButtonComponent } from '../../../../component';

export class AugButtonBuilder {
  static build(label: string): ButtonBuilderModel {
    return {
      kind: 'button',
      component: ButtonComponent,
      metadata: {
        label,
      },
    };
  }
}
