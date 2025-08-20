import { RegisterViewArgModel } from '../arg/register-view-arg.model';
import { AugViewGenerator } from '../../../generator';

export interface RegisterViewDtoModel {
  arg: RegisterViewArgModel;
  target: AugViewGenerator;
}
