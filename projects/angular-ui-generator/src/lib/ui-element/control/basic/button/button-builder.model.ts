import { ButtonComponent, ButtonMetadataModel } from '../../../../component';

export interface ButtonBuilderModel {
  kind: 'button';
  component: typeof ButtonComponent;
  metadata: ButtonMetadataModel;
}
