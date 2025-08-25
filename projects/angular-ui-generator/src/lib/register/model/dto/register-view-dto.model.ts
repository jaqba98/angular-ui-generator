import { RegisterViewArgModel } from '../arg/register-view-arg.model';
import { AugViewGeneratorType } from '../../../generator';

export interface RegisterViewDtoModel {
  arg: RegisterViewArgModel;
  target: AugViewGeneratorType;
}
