import { RegisterViewArgModel } from '../arg/register-view-arg.model';
import { AugGenerator } from '../../../generator';

export interface RegisterViewDtoModel {
  arg: RegisterViewArgModel;
  target: typeof AugGenerator;
}
